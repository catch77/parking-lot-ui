<template>
  <div class="wrapper">
    <div class="mobile-view">
      <h1>parkingboy</h1>
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
        authorityCheck: false,
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
};
</script>

<style scoped lang="scss">
@import '../assets/css/mobile-view';
</style>
