import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from './constants';
import en from './lang/en';

Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { en },
});

export default i18n;
