// import axios from 'axios'
import { merge } from 'lodash';
import Cookies from 'js-cookie';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './constants';
import i18n from './index';

const Translation = (() => {
  const COOKIE_KEY = 'locale';

  return {
    get defaultLanguage() {
      return DEFAULT_LANGUAGE;
    },
    get supportedLanguages() {
      return SUPPORTED_LANGUAGES;
    },
    get currentLanguage() {
      return i18n.locale;
    },
    set currentLanguage(lang) {
      i18n.locale = lang;
    },
    /**
     * Gets the first supported language that matches the user's
     * @return {String}
     */
    getUserSupportedLang() {
      const userPreferredLang = Translation.getUserLang();

      // Check if user preferred browser lang is supported
      if (Translation.isLangSupported(userPreferredLang.locale)) {
        return userPreferredLang.locale;
      }
      // Check if user preferred lang without the ISO is supported
      if (Translation.isLangSupported(userPreferredLang.localeNoISO)) {
        return userPreferredLang.localeNoISO;
      }
      return Translation.defaultLanguage;
    },
    /**
     * Returns the users preferred language
     */
    getUserLang() {
      const lang = Cookies.get(COOKIE_KEY)
        || window.navigator.language
        || Translation.defaultLanguage;
      return {
        locale: lang,
        localeNoISO: lang.split('-')[0],
      };
    },
    /**
     * Sets the language to various services (axios, the html tag etc)
     * @param {String} lang
     * @return {String} lang
     */
    setI18nLanguageInServices(lang) {
      Translation.currentLanguage = lang;
      Cookies.set(COOKIE_KEY, lang);
      // axios.defaults.headers.common['Accept-Language'] = lang
      document.querySelector('html').setAttribute('lang', lang);
    },
    /**
     * Loads new translation messages and changes the language when finished
     * @param lang
     * @return {Promise<any>}
     */
    async changeLanguage(lang) {
      if (!Translation.isLangSupported(lang)) return Promise.reject(new Error('Language not supported'));
      if (i18n.locale === lang) return Promise.resolve(lang); // has been loaded prior

      // change language
      const message = await Translation.genLanguageMessage(lang);
      i18n.setLocaleMessage(lang, message);
      Translation.setI18nLanguageInServices(lang);
      return lang;
    },
    /**
     * generate message for language
     * @param lang
     * @return {Promise<*>|*}
     */
    genLanguageMessage(lang) {
      return new Promise(async (resolve) => {
        let message = await Translation.loadLanguageFile(lang);
        if (lang !== DEFAULT_LANGUAGE) {
          const defaultMessage = await Translation.loadLanguageFile(DEFAULT_LANGUAGE);
          message = merge(_.cloneDeep(defaultMessage), message);
        }
        resolve(message);
      });
    },
    /**
     * Async loads a translation file
     * @param lang
     * @return {Promise<*>|*}
     */
    loadLanguageFile(lang) {
      return new Promise(async (resolve) => {
        let locale = await import(/* webpackChunkName: "lang-[request]" */ `@/i18n/lang/${lang}`);
        locale = locale.default || locale;
        resolve(locale);
      });
    },
    /**
     * Checks if a lang is supported
     * @param {String} lang
     * @return {boolean}
     */
    isLangSupported(lang) {
      return Object.keys(Translation.supportedLanguages).includes(lang);
    },
    /**
     * Checks if the route's param is supported, if not, redirects to the first supported one.
     * @param {Route} to
     * @param {Route} from
     * @param {Function} next
     * @return {*}
     */
    routeMiddleware(to, from, next) {
      // Load async message files here
      const lang = Translation.getUserSupportedLang();
      return Translation.changeLanguage(lang).then(() => next());
    },
  };
})();

export default Translation;
