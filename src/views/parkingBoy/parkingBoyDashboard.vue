<template>
    <div>
        <div class="user-dashboard-header" >
            <h1 class="user-name">
            <span class="welcome-title">欢迎您,停车员：<br /></span>
            {{ name }}
            </h1>
        </div>
        <br/>
        <br/>
        <div class="card">
            <el-card class="box-card" :body-style="{ padding: '60px' }">
              <div  class="clearfix">
             <span >查看我的订单</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleLookMyOrder">进入</el-button>
              </div>
            </el-card>
        </div>
        <br/>
        <br/>
        <div class="card">
            <el-card class="box-card" :body-style="{ padding: '60px' }">
            <div  class="clearfix">
            <span>查看所有订单</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="handleLookAllOrder">进入</el-button>
            </div>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      canclevisible: false,
    };
  },
  props: {
    addVisible: Boolean,
  },
  methods: {
    handleLookMyOrder() {
      this.$router.push("/pb/myorder");
    },
    handleLookAllOrder() {
      this.$router.push('/pb/allorder');
    },
  },
  computed: {
    name() {
      return this.$store.getters['parkingboy/getParkingboy'] && this.$store.getters['parkingboy/getParkingboy'].user
        ? this.$store.getters['parkingboy/getParkingboy'].user.name
        : '';
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
.card{
    .text {
    font-size: 18px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
}
</style>