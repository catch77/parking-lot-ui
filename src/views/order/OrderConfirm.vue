<template>
<div style="margin:0px auto;font-size:2em">
 <el-form ref="form" :model="car" label-width="80px"  style="width:400px;margin-left:20%">
  <label id="tipLabel" style="margin-left:25%;color:red;font-size:1em"></label>
  <el-form-item label="车牌号">
    <el-input v-model="car.carNo" style="width:230%px;"></el-input>
  </el-form-item>

  <el-form-item size="large">
    <el-button type="primary" @click="handleCommit"  style="margin-left:10%">确定</el-button>
    <el-button style="margin-left:30%" @click="back">返回</el-button>
  </el-form-item>
</el-form>
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
    handleCommit() {
      var tipMessage = document.getElementById('tipLabel');
      if (this.car.carNo === '') {
        tipMessage.innerText = '车牌号不能为空';
        return;
      }
      if (this.car.carNo.length !== 5) {
        tipMessage.innerText = '车牌号长度不正确';
        return;
      }
      this.$store
        .dispatch('order/postCarNo', this.car.carNo)
        .then(() => {
          this.$message.success('添加成功');
          this.$router.push('/customers/finishedorder');
        })
        .catch(() => {
          this.$message.error('添加失败');
        });
    },
    back() {
      this.$router.push('/customers/customerselect');
    },
  },
};
</script>
