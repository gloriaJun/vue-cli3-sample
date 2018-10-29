import Vue from 'vue';
import Router from 'vue-router';

// import auth from '@/utils/auth';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes,
});

// check auth
router.beforeEach((to, from, next) => {
  // if (to.matched.some(record => record.meta.requiresAuth) && !auth.getToken()) {
  //   next({
  //     name: 'Login',
  //   });
  // }
  next();
});

export default router;
