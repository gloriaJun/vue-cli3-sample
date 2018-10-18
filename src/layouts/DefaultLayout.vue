<template>
  <q-layout view="hHh Lpr lFf">
    <app-header/>
    <app-drawer/>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <app-footer/>
  </q-layout>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppDrawer from './components/AppDrawer.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppDrawer,
    AppFooter,
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
