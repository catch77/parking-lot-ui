<template>
  <div class="wrapper">
    <div class="mobile-view">
      <router-view v-if="authorityCheck"></router-view>
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
        if (!this.$store.getters.roles.includes('CUSTOMER')) {
          this.$message.error('请从正确的入口登录');
          this.$router.push('/customers/signin');
        }
        this.authorityCheck = true;
      })
      .catch(() => {
        this.$router.push('/customers/signin');
      });
  },
};
</script>

<style scoped lang="scss">
@import '../assets/css/mobile-view';
</style>
