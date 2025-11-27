import { defineRouter } from '#q-app/wrappers'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'
import { useAuthStore } from 'src/store/auth'
import { jwtDecode } from 'jwt-decode'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })

  Router.beforeEach((to, from, next) => {
    const auth = useAuthStore()

    // 1) Verifica expiração do token
    if (auth.token) {
      try {
        const decoded = jwtDecode(auth.token)
        if (decoded.exp * 1000 < Date.now()) {
          auth.logout()
          return next('/auth')
        }
      } catch (error) {
        console.log(error);
        auth.logout()
        return next('/auth')
      }
    }
    // 2) Rotas que exigem autenticação
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
      return next('/auth')
    }
    // 3) Rotas que exigem permissões específicas
    if (to.meta.requiresAdmin && auth.userRole !== 'admin') {
      return next('/unauthorized') // você cria essa página
    }

    next()
  })

  return Router
})
