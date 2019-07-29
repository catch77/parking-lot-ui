<template>
  <div class="wrapper">
    <div class="mobile-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Customer',
  };
</script>

<style scoped lang="scss">
  @import "../assets/css/mobile-view";
</style>
