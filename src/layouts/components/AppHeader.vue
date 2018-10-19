<template>
  <div class="app-header">
    <a href="/">{{ $t('meta.brand.label') }}</a>
    <locale-switcher/>
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue';

export default {
  name: 'AppHeader',
  components: {
    LocaleSwitcher,
  },
  props: {
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped>
  .app-header {
    background-color: #B3E5FC;
  }
</style>
