<template>
  <div class="locale-switcher">
    locale switcher : {{ currentLanguage }}
    <ul>
      <li
        v-for="lang in supportedLanguages"
        :key="lang"
        @click="onChangeLanguage(lang)">{{ lang }}</li>
    </ul>
  </div>
</template>

<script>
import Translation from '@/i18n/translation';

export default {
  name: 'LocaleSwitcher',
  props: {
  },
  computed: {
    supportedLanguages() {
      return Translation.supportedLanguages;
    },
    currentLanguage() {
      return Translation.currentLanguage;
    },
  },
  methods: {
    onChangeLanguage(lang) {
      Translation.changeLanguage(lang).then(() => {
        console.log('locale change to ', lang);
        console.log(this.$router);
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
