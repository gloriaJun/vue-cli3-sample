<template>
  <v-list class="dropdown-menu">
    <template v-for="item in items">
      <v-list-group
        v-if="item.children"
        :key="item.labelKey"
        :prepend-icon="item.icon"
        no-action
      >
        <!-- menu -->
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ $t(`${item.labelKey}`) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- sub menu -->
        <v-list-tile
          v-for="child in item.children"
          :key="child.labelKey"
          @click="onClickMenu(child)"
        >

          <v-list-tile-content>
            <v-list-tile-title>{{ $t(`${child.labelKey}`) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>

      <v-list-tile
        v-else
        :key="item.labelKey"
        @click="onClickMenu(item)"
      >

        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ $t(`${item.labelKey}`) }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </template>
  </v-list>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    /**
     * @event 'click' (if path not define)
     * @param item
     */
    onClickMenu(item) {
      if (item.path) {
        this.$router.push({ name: item.path });
      } else {
        this.$emit('click', item);
      }
    },
  },
};
</script>

<style scoped>
</style>
