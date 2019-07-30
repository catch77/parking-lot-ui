<template>
  <div class="wrapper">
    <div class="mobile-view">
      <div class="mobile-view-main">
        <router-view v-if="authorityCheck"></router-view>
      </div>
      <div class="mobile-view-footer">
        <a @click="handleLogout">退出登录</a>
      </div>
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
    methods: {
      handleLogout() {
        this.$store.dispatch('logout').then(() => {
          this.$router.push('/customers/signin');
        });
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '../assets/css/mobile-view';

  .mobile-view {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .mobile-view-main {
    flex: 1;
  }

  .mobile-view-footer {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    color: #8c939d;
  }


</style>
<style lang="scss">
  .customer-page-title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 30px;
    margin-top: 10px;
    padding-top: 20px;
  }
</style>
