<template>
  <div class="result-page">
    <div class="icon-wrapper">
      <i class="el-icon-success icon"></i>
    </div>
    <div class="result-info">停车订单提交成功</div>
    <div class="btn-bar">
      <el-button type="success" @click="handleBack" class="confirm-btn">返回用户页面</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        car: {
          carNo: '',
        },
        canclevisible: false,
      };
    },
    props: {
      addVisible: Boolean,
    },
    methods: {
      handleBack() {
        this.$router.push('/customers/dashboard');
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "style";

  .confirm-btn {
    width: 100%;
  }
</style>
