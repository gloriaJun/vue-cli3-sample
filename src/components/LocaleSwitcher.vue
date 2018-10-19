<template>
  <v-menu offset-y>
    <v-btn
      slot="activator"
      dark
      icon
    >
      <v-icon>fas fa-globe</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile
        v-for="(lang, key) in supportedLanguages"
        :key="key"
        @click="onChangeLanguage(key)"
      >
        <v-list-tile-title>{{ lang.label }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
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

<style scoped>
</style>
