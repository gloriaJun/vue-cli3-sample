// import axios from 'axios'
import _ from 'lodash';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './constants';
import i18n from './index';

const Translation = {
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
  // /**
  //  * Gets the first supported language that matches the user's
  //  * @return {String}
  //  */
  // getUserSupportedLang () {
  //   const userPreferredLang = Trans.getUserLang()
  //
  //   // Check if user preferred browser lang is supported
  //   if (Trans.isLangSupported(userPreferredLang.lang)) {
  //     return userPreferredLang.lang
  //   }
  //   // Check if user preferred lang without the ISO is supported
  //   if (Trans.isLangSupported(userPreferredLang.langNoISO)) {
  //     return userPreferredLang.langNoISO
  //   }
  //   return Trans.defaultLanguage
  // },
  // /**
  //  * Returns the users preferred language
  //  */
  // getUserLang () {
  //   const lang = window.navigator.language
  // || window.navigator.userLanguage || Trans.defaultLanguage
  //   return {
  //     lang: lang,
  //     langNoISO: lang.split('-')[0]
  //   }
  // },
  // /**
  //  * Sets the language to various services (axios, the html tag etc)
  //  * @param {String} lang
  //  * @return {String} lang
  //  */
  // setI18nLanguageInServices(lang) {
  //   // Translation.currentLanguage = lang;
  //   // axios.defaults.headers.common['Accept-Language'] = lang
  //   // document.querySelector('html').setAttribute('lang', lang);
  //   // return lang;
  // },
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
    Translation.currentLanguage = lang;
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
        message = _.merge(_.cloneDeep(defaultMessage), message);
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
    return Translation.supportedLanguages.includes(lang);
  },
  // /**
  //  * Checks if the route's param is supported, if not, redirects to the first supported one.
  //  * @param {Route} to
  //  * @param {Route} from
  //  * @param {Function} next
  //  * @return {*}
  //  */
  // routeMiddleware (to, from, next) {
  //   // Load async message files here
  //   const lang = to.params.lang
  //   if (!Trans.isLangSupported(lang)) return next(Trans.getUserSupportedLang())
  //   return Trans.changeLanguage(lang).then(() => next())
  // }
};

export default Translation;
