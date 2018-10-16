import Translation from '@/i18n/translation';

function load(component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`);
}

export default [
  {
    path: '/:lang',
    // component: {
    //   template: '<router-view></router-view>',
    // },
    component: () => import('@/components/Layout.vue'),
    beforeEnter: Translation.routeMiddleware,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: load('DashboardPage'),
      },
      {
        path: 'login',
        name: 'Login',
        component: load('LoginPage'),
      },
      {
        path: '*',
        component: load('ErrorPage'),
      },
    ],
  },
  {
    // Redirect user to supported lang version.
    path: '*',
    redirect() {
      return Translation.getUserSupportedLang();
    },
  },
];
