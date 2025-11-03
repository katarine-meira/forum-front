const routes = [
  { path: '/auth', component: () => import('pages/LoginRegisterPage.vue')},
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
      { path: '/forum', component: () => import('pages/ForumPage.vue') },
      { path: '/profile', component: () => import('src/pages/ProfilePage.vue') },
      { path: '/form', component: () => import('pages/FormPage.vue') },
      { path: '/settings', component: () => import('pages/SettingsPage.vue') },
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
