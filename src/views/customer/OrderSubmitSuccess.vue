<template>
  <div>
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
.icon-wrapper {
  color: #5daf34;
  text-align: center;
  font-size: 50vw;
  padding-top: 60px;
  @media screen and (min-width: 400px) {
    font-size: 200px;
  }
}
.result-info {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}
.confirm-btn {
  width: 100%;
}
</style>
