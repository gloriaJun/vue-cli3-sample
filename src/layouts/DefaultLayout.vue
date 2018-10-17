<template>
  <q-layout>
    <q-layout-header>
      header
    </q-layout-header>

    <q-page-container>
      Change Language to: <locale-switcher/>
      <p>{{ $t('meta') }}</p>
      <router-view class="app-content"/>
    </q-page-container>

    <q-layout-footer>
      footer
    </q-layout-footer>
  </q-layout>
</template>

<script>
import LocaleSwitcher from '../components/LocaleSwitcher.vue';

export default {
  name: 'DefaultLayout',
  components: {
    LocaleSwitcher,
  },
};
</script>

<style lang="scss">
</style>
