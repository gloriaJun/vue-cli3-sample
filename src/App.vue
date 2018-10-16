<template>
  <div id="app">
    <div>
      Change Language to: <locale-switcher/>
      <p>
        {{ $t('meta') }}
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import LocaleSwitcher from './components/LocaleSwitcher.vue';

export default {
  name: 'App',
  components: {
    LocaleSwitcher,
  },
};
</script>

<style lang="scss">
</style>
