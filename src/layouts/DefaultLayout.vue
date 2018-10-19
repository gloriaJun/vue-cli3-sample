<template>
  <v-app>
    <app-header/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
// import AppDrawer from './components/AppDrawer.vue';
// import AppFooter from './components/AppFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    // AppDrawer,
    // AppFooter,
  },
  data() {
    return {
    };
  },
};
</script>

<style >
</style>
