import Vue from 'vue';
import i18n from './locale';
import router from './router';
import store from './store';
import './registerServiceWorker';

import App from './App.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
