<template>
  <div class="error-page">
    This is Dashboard Page

    Change Language to: <locale-switcher/>
    <p>{{ $t('meta') }}</p>
  </div>
</template>

<script>
import LocaleSwitcher from '../components/LocaleSwitcher.vue';

export default {
  name: 'DashboardPage',
  components: {
    LocaleSwitcher,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>
