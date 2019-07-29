<template>
  <div class="wrapper">
    <div class="mobile-view">
      <!-- <h1 v-show="authorityCheck">拿到了token</h1> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  data() {
    return {
      authorityCheck: false,
    };
  },
  components: {},
  mounted() {
    if (!this.$store.getters.isLogin) {
      this.$router.push('/customers/signin');
      return;
    }
    this.$store
      .dispatch('customer/getCustomer')
      .then(() => {
        this.authorityCheck = true;
      })
      .catch(() => {
        this.$router.push('/customer/signin');
      });
  },
};
</script>

<style scoped lang="scss">
@import '../assets/css/mobile-view';
</style>
