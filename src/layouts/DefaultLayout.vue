<template>
  <v-app>
    <template v-if="!isFullScreen">
      <app-header/>
      <app-sidebar/>

      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>

    </template>
    <template v-else>
      <router-view/>
    </template>
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
  computed: {
    isFullScreen() {
      return this.$route.meta.fullScreen;
    },
  },
};
</script>

<style lang="stylus">
</style>
