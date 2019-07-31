<template>
  <div class="wrapper">
    <div class="mobile-view">
      <!-- <h1>parkingboy</h1> -->
      <router-view v-if="authorityCheck"></router-view>
    </div>
          <div class="mobile-view-footer">
        <a @click="handleLogout">退出登录</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ParkingBoy',
  data() {
      return {
        authorityCheck: true,
      };
  },
  methods: {
      handleLogout() {
        this.$store.dispatch("logout")
          .then(() => {
            this.$router.push("/pb/login")
          })
      },
  },
  components: {

  },
   mounted() {
      if (!this.$store.getters.isLogin) {
        this.$router.push('/pb/login');
        return;
      }
      this.$store
        .dispatch('parkingboy/getParkingboy')
        .then(() => {
          if (!this.$store.getters.roles.includes('PARKINGBOY')) {
            this.$message.error('请从正确的入口登录');
            this.$router.push("/pb/login");
          }
          this.authorityCheck = true;
        })
        .catch(() => {
          this.$router.push("/pb/login");
        });
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
