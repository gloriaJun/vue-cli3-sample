<template>
  <v-menu
    bottom
    offset-y
    left
    attach
    class="locale-switcher"
  >
    <v-btn
      slot="activator"
      flat
    >
      <flag-icon :locale="currentLanguage"/>
    </v-btn>
    <v-list>
      <v-list-tile
        v-for="(lang, key) in supportedLanguages"
        :key="key"
        @click="onChangeLanguage(key)"
      >
        <v-list-tile-action>
          <flag-icon :locale="key"/>
        </v-list-tile-action>

        <v-list-tile-title>{{ lang.label }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import Translation from '@/i18n/translation';
import FlagIcon from '@/components/Icon/FlagIcon.vue';

export default {
  name: 'LocaleSwitcher',
  components: { FlagIcon },
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
.locale-switcher .flag-icon {
  width: 26px;
  height: 26px;
}
.locale-switcher .v-btn {
  min-width: 48px;
}
</style>
