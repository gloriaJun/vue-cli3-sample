<template>
  <span
    :class="`flag-icon-${localeIcon}`"
    class="flag-icon"
    v-on="$listeners"
  />
</template>

<script>
import FlagTypes from './flag-types';

export default {
  name: 'FlagIcon',
  props: {
    locale: {
      type: String,
      default: 'us',
      validate: value => Object.keys(FlagTypes).includes(value),
    },
  },
  computed: {
    localeIcon() {
      return FlagTypes[this.locale];
    },
  },
};
</script>

<style scoped>
</style>
