import Vue from 'vue';
import i18n from './i18n';
import router from './router';
import store from './store';
import './plugins';
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
