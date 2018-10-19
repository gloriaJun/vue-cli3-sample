<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    color="blue"
    dark
    app
    fixed>
    <v-toolbar-title>
      <v-toolbar-side-icon @click.stop="setDrawer(!drawer)"/>
      <span>
        {{ $t('meta.brand.label') }}
      </span>
    </v-toolbar-title>

  </v-toolbar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'AppDrawer',
  computed: {
    ...mapGetters('app', {
      drawer: 'getSidebarDrawer',
    }),
  },
  methods: {
    ...mapMutations('app', {
      setDrawer: 'SET_SIDEBAR_DRAWER',
    }),
  },
};
</script>

<style scoped>
</style>
