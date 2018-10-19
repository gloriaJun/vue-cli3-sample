<template>
  <div
    class="locale-switcher"
    @click="showing = !showing">
    <flag-icon :locale="currentLanguage"/>
    <q-popover v-model="showing">
      <q-list
        highlight
        link>
        <q-item
          v-for="(lang, key) in supportedLanguages"
          :key="key">
          <q-item-side>
            <flag-icon
              :locale="key"
              @click="onChangeLanguage(key)"/>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{ lang.label }}</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-popover>
  </div>
</template>

<script>
import Translation from '@/i18n/translation';
import FlagIcon from './Icon/FlagIcon.vue';

export default {
  name: 'LocaleSwitcher',
  components: { FlagIcon },
  props: {
  },
  data() {
    return {
      showing: false,
    };
  },
  computed: {
    supportedLanguages() {
      return Translation.supportedLanguages;
    },
    currentLanguage() {
      return Translation.currentLanguage;
    },
  },
  mounted() {
    document.querySelector('html').setAttribute('lang', this.currentLanguage);
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
