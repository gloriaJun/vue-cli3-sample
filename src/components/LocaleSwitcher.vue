<template>
  <div class="locale-switcher">
    locale switcher : {{ currentLanguage }}
    <ul>
      <li
        v-for="lang in supportedLanguages"
        :key="lang"
        @click="onChangeLanguage(lang)">{{ lang }}</li>
    </ul>
    <q-btn>Button</q-btn>
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
      const to = this.$router.resolve({ params: { lang } });
      Translation.changeLanguage(lang).then(() => {
        this.$router.push(to.location);
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
