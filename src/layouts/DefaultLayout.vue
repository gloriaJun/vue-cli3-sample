<template>
  <q-layout view="hHh Lpr lFf">

    <app-header/>
    <app-drawer/>

    <q-page-container>
      Change Language to: <locale-switcher/>
      <p>{{ $t('meta') }}</p>
      <router-view class="app-content"/>
    </q-page-container>

    <app-footer/>
  </q-layout>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppDrawer from './components/AppDrawer.vue';
import AppFooter from './components/AppFooter.vue';
import LocaleSwitcher from '../components/LocaleSwitcher.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppDrawer,
    AppFooter,
    LocaleSwitcher,
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
