<script>
export default {
  name: 'AppRoot',
  mounted() {
    if (this.$store.getters.isLogin) {
      this.$store.dispatch('fetchPrincipal');
    }
  },
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/css/main';
</style>
