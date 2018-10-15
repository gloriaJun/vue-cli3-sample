// import { Trans } from '@/plugins/Translation'

function load(component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`);
}

export default [
  {
    path: '/:lang',
    component: {
      template: '<router-view></router-view>',
    },
    // beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'Login',
        component: load('LoginPage'),
      },
      // {
      //   path: '*',
      //   component: load('404'),
      // },
    ],
  },
  // {
  //   // Redirect user to supported lang version.
  //   path: '*',
  //   redirect (to) {
  //     return Trans.getUserSupportedLang()
  //   }
  // }
];
