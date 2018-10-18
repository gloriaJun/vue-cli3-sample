import Vue from 'vue';
import Quasar, * as All from 'quasar-framework/dist/quasar.ios.esm';

import '@/styles/quasar.styl';
import 'quasar-framework/dist/quasar.ie.polyfills';

// icon
import 'quasar-extras/fontawesome';
import 'quasar-extras/material-icons';

Vue.use(Quasar, {
  config: {},
  components: All,
  directives: All,
});
