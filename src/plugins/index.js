import Vue from 'vue';
import Vuetify from 'vuetify';

import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.base,
    secondary: colors.blueGrey.lighten3,
    accent: colors.purple.accent2,
    error: colors.red.accent2,
    warning: colors.amber.darken3,
    info: colors.lightBlue.lighten1,
    success: colors.green.darken1,
    // primary: '#2196F3',
    // secondary: '#B0BEC5',
    // accent: '#E040FB',
    // error: '#FF5252',
    // warning: '#FF8F00',
    // info: '#29B6F6',
    // success: '#43A047',
  },
  iconfont: 'fa',
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
