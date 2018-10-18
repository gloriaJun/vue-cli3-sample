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

      <div
        class="flag-icon flag-icon-kr"
        @click="showing = !showing">
        <q-popover
          v-model="showing">
          <q-list highlight>
            <q-item>
              <q-item-side class="flag-icon flag-icon-kr"/>
              <q-item-main>
                <q-item-tile label>Photos</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="assignment"/>
              <q-item-main>
                <q-item-tile label>Photos</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-popover>
      </div>
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
      showing: false,
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
