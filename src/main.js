import '@babel/polyfill';
import Vue from 'vue';
import i18n from './i18n';
import router from './router';
import store from './store';

import './registerServiceWorker';
import './plugins';

// style
import './styles/main.styl';

import App from './App.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
