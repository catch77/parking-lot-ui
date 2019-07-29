<template>
  <div style="margin:0px auto;font-size:2em">
    <el-form ref="form" :model="car" label-width="0" style="width:100%">
      <label id="tipLabel" style="margin-left:25%;color:red;font-size:1em"></label>
      <h3 class="confirm-title">请输入车牌号以继续</h3>
      <el-form-item>
        <el-input v-model="car.carNo"/>
      </el-form-item>

    <div class="confirm-btn-bar">
      <el-button style="margin-left:30%" @click="back">取消</el-button>
      <el-button type="primary" @click="handleCommit" class="confirm-btn">确定 <i class="el-icon-right"></i></el-button>

    </div>

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

<style lang="scss" scoped>
  .confirm-title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .confirm-btn-bar {
    display: flex;
    justify-content: flex-end;
    .confirm-btn{
width: 120px;
    }
  }
</style>
