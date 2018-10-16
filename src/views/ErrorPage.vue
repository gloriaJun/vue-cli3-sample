<template>
  <div class="error-page">
    This is Error Page
  </div>
</template>

<script>
// const ErrorObject = Object.freeze({
//   401: {
//     icon: 'error',
//     message: 'UnAuthorized',
//     description: 'access is denied due to invalid credentials.',
//   },
//   403: {
//     icon: '403.png',
//     type: 'img',
//     message: 'Forbidden',
//     description: 'Access is Allowed only for Registered User.',
//   },
//   404: {
//     icon: 'block',
//     message: 'Oops! You\'re lost',
//     description: 'We can not find the page you\'re looking for.',
//   },
//   500: {
//     icon: 'settings',
//     message: 'Opps! Internal Server Error!',
//     description: 'Unfortunately we\'re having trouble loading the page you are looking for.
// <br/>Please come back in a while.',
//   },
// });

export default {
  name: 'ErrorPage',
  props: {
    statusCode: Number,
    errorMessage: String,
    errorDetail: String,
  },
  data() {
    return {
      // error: ErrorObject[this.statusCode],
    };
  },
  computed: {
    // icon() {
    //   return this.error.icon;
    // },
    // message() {
    //   return !this.errorMessage ? this.error.message : this.errorMessage;
    // },
    // description() {
    //   return !this.errorDetail ? this.error.description : this.errorDetail;
    // },
  },
  mounted() {
    // console.log(this.$route, this.error);
    console.log('error page');
  },
  methods: {
    /**
     * @event - go home url
     */
    onClickHome() {
      // location.replace(`/${this.$store.getters.locale}/login`);
    },
  },
};
</script>
