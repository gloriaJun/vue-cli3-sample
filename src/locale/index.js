import Vue from 'vue';
import VueI18n from 'vue-i18n';
import _ from 'lodash';

import langs from './langs/index';

Vue.use(VueI18n);

const defaultLocale = 'ko';
const messages = {};
_.keys(langs).forEach((key) => {
  let locale = {};
  locale = _.merge(langs[key], locale);
  // merge with 'en' for default value setting (href, icon ...)
  messages[key] = (key === defaultLocale) ?
    locale : _.merge(_.cloneDeep(langs[defaultLocale]), locale);
});

// Create VueI18n instance with options
export default new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
});

