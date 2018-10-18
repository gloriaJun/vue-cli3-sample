<template>
  <q-layout-header>
    <q-toolbar>
      <q-btn
        flat
        round
        dense
        icon="menu"
        @click="setDrawer(!drawer)"/>

      <a
        class="brand"
        href="/">{{ $t('meta.brand.label') }}</a>

      <q-btn
        flat
        round
        dense
        icon="fas fa-angle-left"
        @click="setDrawerMini(!mini)"/>
      <q-toolbar-title/>
      <span class="flag-icon flag-icon-kr"/>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  props: {
    width: {
      type: Number,
      default: 200,
    },
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

<style scoped>
.brand {
  padding-left: .5rem;
  padding-right: 1rem;
  color: inherit;
  font-weight: 500;
  font-size: 1.2rem;
}
</style>
