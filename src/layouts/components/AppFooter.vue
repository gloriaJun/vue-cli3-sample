<template>
  <v-footer
    color="grey lighten-2"
    app
    inset
  >
    <div
      class="pl-3"
      v-html="$t('app.footer.copyright')"/>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
</style>
