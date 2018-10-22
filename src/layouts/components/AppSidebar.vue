<template>
  <v-navigation-drawer
    :value="drawer"
    :clipped="$vuetify.breakpoint.mdAndUp"
    fixed
    app
  >
    <v-list dense>
      <template v-for="item in items">
        <v-list-group
          v-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i">
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile
          v-else
          :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppSidebar',
  components: {
  },
  props: {
  },
  data() {
    return {
      items: [
        { icon: 'fas fa-address-card', text: 'Contact' },
        { icon: 'fas fa-cog', text: 'Settings' },
        { icon: 'fas fa-question-circle', text: 'Help' },
        {
          icon: 'fas fa-angle-up',
          'icon-alt': 'fas fa-angle-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'fas fa-plus', text: 'Create label' },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapGetters('app', {
      drawer: 'getSidebarDrawer',
    }),
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
