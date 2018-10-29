import Translation from '@/i18n/translation';

function load(component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`);
}

export default [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    beforeEnter: Translation.routeMiddleware,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: load('DashboardPage'),
        meta: { requiresAuth: true },
      },

      // 사용자 관련
      {
        path: 'users',
        name: 'Users',
        component: load('users/List'),
        meta: { requiresAuth: true },
      },

      // Login Page
      {
        path: 'login',
        name: 'Login',
        component: load('LoginPage'),
        meta: { fullScreen: true },
      },

      // Error Page
      {
        path: '*',
        component: load('ErrorPage'),
        meta: { fullScreen: true },
      },
    ],
  },
];
