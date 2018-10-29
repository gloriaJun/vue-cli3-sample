<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    color="blue"
    dark
    app
    fixed
  >
    <v-toolbar-title>
      <v-toolbar-side-icon @click.stop="setDrawer(!drawer)"/>
      <router-link
        :to="{ name: 'Dashboard' }"
        class="logo-link"
      >
        {{ $t('app.brand') }}
      </router-link>
    </v-toolbar-title>

    <v-spacer/>

    <v-toolbar-items>
      <v-menu
        bottom
        offset-y
        left
        attach
        class="login-user"
      >
        <v-btn
          slot="activator"
          flat
        >
          <v-icon>{{ loginUserItems.icon }}</v-icon>
          {{ loginUser }}
        </v-btn>
        <dropdown-menu
          :items="loginUserItems.children"
          @click="onClickUserMenu"
        />
      </v-menu>
    </v-toolbar-items>

    <v-toolbar-items>
      <locale-switcher/>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
// utilities
import {
  mapMutations,
  mapGetters,
} from 'vuex';
import menus from '@/menus';

// component
import DropdownMenu from '@/components/DropdownMenu.vue';
import LocaleSwitcher from '@/components/LocaleSwitcher.vue';

export default {
  name: 'AppDrawer',
  components: {
    DropdownMenu,
    LocaleSwitcher,
  },
  props: {
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters('app', {
      drawer: 'getSidebarDrawer',
    }),
    loginUser() {
      return 'username@example.com';
    },
    loginUserItems() {
      return menus.header.loginUser;
    },
  },
  methods: {
    ...mapMutations('app', {
      setDrawer: 'SET_SIDEBAR_DRAWER',
    }),
    onClickUserMenu(item) {
      console.log(item);
      if (item.action === 'ChangePassword') {
        this.showDialog(true);
      } else if (item.action === 'Logout') {
        this.logout();
      }
    },
    showDialog(isOpen) {
      // this.dialog = isOpen;
      console.log('open dialog', isOpen);
    },
    logout() {
    },
  },
};
</script>

<style scoped>
  .logo-link {
    text-decoration: none;
    color: inherit;
  }
  .login-user .v-btn {
    text-transform: none;
  }
  .login-user .v-btn .v-icon {
    margin-right: 8px;
  }
</style>
