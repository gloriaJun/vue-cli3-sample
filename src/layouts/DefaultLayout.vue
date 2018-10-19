<template>
  <v-app>
    <app-header/>
    <app-sidebar/>

    <v-content>
      <v-container
        fluid
        fill-height>
        <router-view/>
      </v-container>
    </v-content>

    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
  },
  data() {
    return {
    };
  },
};
</script>

<style >
</style>
