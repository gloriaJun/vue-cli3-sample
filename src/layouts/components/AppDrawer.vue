<template>
  <q-layout-drawer
    v-model="drawer"
    :mini="mini"
    :width="width">
    <!-- drawer content -->
    drawer : {{ mini }}
  </q-layout-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppDrawer',
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
};
</script>

<style>
</style>
