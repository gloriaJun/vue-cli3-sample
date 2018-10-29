<template>
  <v-navigation-drawer
    :value="drawer"
    :clipped="$vuetify.breakpoint.mdAndUp"
    :width="width"
    stateless
    fixed
    app
  >

    <dropdown-menu :items="items"/>

  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import menus from '@/menus';
import DropdownMenu from '@/components/DropdownMenu.vue';

export default {
  name: 'AppSidebar',
  components: {
    DropdownMenu,
  },
  props: {
    width: {
      type: Number,
      default: 280,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('app', {
      drawer: 'getSidebarDrawer',
    }),
    items() {
      return menus.sidebar;
    },
  },
};
</script>

<style scoped>
</style>
