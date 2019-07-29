<template>
  <div>
    <div class="user-dashboard-header">
      <h1 class="user-name">
        <span class="welcome-title">欢迎您,<br></span>
        {{name}}
      </h1>
    </div>
    <el-row style="padding-top:40px;text-align:center; ">
      <el-button type="success" plain @click="handleParking" style="width:100%">我要停车</el-button>
      <br>
      <el-button type="success" plain @click="handleFetching" style="width:8em" v-show="false">我要取车</el-button>
      <br>
      <el-button type="success" plain @click="handleLookingReceipt" style="width:8em" v-show="false">查看我的订单</el-button>
    </el-row>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        sizeForm: {
          carNo: '',
        },
        canclevisible: false,
      };
    },
    props: {
      addVisible: Boolean,
    },
    methods: {
      handleLookingReceipt() {
        // this.$router.push("/");
      },
      handleParking() {
        this.$router.push('/customers/orderconfirm');
      },
      handleFetching() {
        //this.$router.push("/");
      },
    },
    computed: {
      name() {
        return this.$store.getters['customer/getCustomer'] && this.$store.getters['customer/getCustomer'].user ? this.$store.getters['customer/getCustomer'].user.name : '';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .user-dashboard-header {
    padding-top: 10px;

    .welcome-title {
      font-size: 28px;
    }
    .user-name {
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 400;
      font-size: 36px;
    }
  }
</style>
