
const routes = [
  { path: '/auth', component: () => import('pages/LoginRegisterPage.vue')},
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
      { path: '/forum', component: () => import('pages/ForumPage.vue'),
        meta: {requiresAuth: true}
      },
      { path: '/profile', component: () => import('src/pages/ProfilePage.vue'),
        meta: {requiresAuth: true}
      },
      { path: '/form', component: () => import('pages/FormPage.vue'),
        meta: {requiresAuth: true}
      },
      { path: '/settings', component: () => import('pages/SettingsPage.vue'),
        meta: {requiresAuth: true}
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
