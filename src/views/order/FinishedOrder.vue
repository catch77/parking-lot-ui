<template>
<div>
<i class="el-icon-success">提交订单成功</i><br>
 <el-button type="success"  @click="handleBack">返回用户页面</el-button>
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
    }
  },
};
</script>
