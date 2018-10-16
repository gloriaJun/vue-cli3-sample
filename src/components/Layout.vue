<template>
    <div id="app">
        <div>
            Change Language to: <locale-switcher/>
            <p>
                {{ $t('meta') }}
            </p>
        </div>
        <div class="app-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import LocaleSwitcher from './LocaleSwitcher.vue';

export default {
  name: 'Layout',
  components: {
    LocaleSwitcher,
  },
};
</script>

<style lang="scss">
</style>
