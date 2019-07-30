<template>
  <div class="phone-header">
    <div class="back" @click="onClickBack">
      <div v-show="showBack">
        返回
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneHeaderBar',
  props: {
    showBack: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.phone-header {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.onClickBack {
}
</style>
