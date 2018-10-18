<template>
  <q-layout-header>
    <q-toolbar>
      <q-btn
        flat
        round
        dense
        icon="menu"
        @click="setDrawer(!drawer)"/>
      <q-btn
        flat
        round
        dense
        icon="fas fa-angle-left"
        @click="setDrawerMini(!mini)"/>
      <q-toolbar-title>
        Title
      </q-toolbar-title>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('app', {
      drawer: 'getSideDrawer',
      mini: 'getSideDrawerMini',
    }),
  },
  methods: {
    ...mapMutations('app', {
      setDrawer: 'SET_SIDE_DRAWER',
      setDrawerMini: 'SET_SIDE_DRAWER_MINI',
    }),
  },
};
</script>

<style>
</style>
