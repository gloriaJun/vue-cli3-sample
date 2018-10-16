import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from './constants';
import ko from './lang/ko';

Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { ko },
});

export default i18n;
