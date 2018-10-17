import Vue from 'vue';
import Quasar, * as All from 'quasar-framework/dist/quasar.mat.esm';

import '@/styles/quasar.styl';
import 'quasar-framework/dist/quasar.ie.polyfills';

Vue.use(Quasar, {
  components: All,
  directives: All,
});

// /* javascript library */
// import Lodash from './lodash';
// import Moment from './moment';
// import axios from './axios';
//
// /* ui vip components */
// import VuComponent from 'vip-component';
// import 'vip-component/dist/style/vu-component.min.css';
// /* ui custom components */
// import CustomComponent from '@/components/global';
//
// /** Install Plugins **/
// Vue.prototype.$http = axios;
// // Vue.use(Element)
// Vue.use(VuComponent);
// Vue.use(CustomComponent);
// Vue.use(Lodash);
// Vue.use(Moment);
