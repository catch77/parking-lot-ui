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
        <div class="card" v-if="false">
            <el-card class="box-card" :body-style="{ padding: '60px' }" style="border-radius:15px" @click.native="handleLookMyOrder">
              <div  class="clearfix">
             <span >查看指派中的订单</span>
              </div>
            </el-card>
        </div>
        <br/>
        <br/>
        <div class="card" style="text-align:right">
            <el-card class="box-card" :body-style="{ padding: '60px' }" style="border-radius:15px" @click.native="handleLookAllOrder">
            <div  class="clearfix" style="text-align:center">
            <span >查看所有订单</span>
            </div>
            </el-card>
            
            <el-switch
                style="margin-top: 20px"
                v-model="value1"
                inactive-text="改变抢单状态">
                <!-- change="changeParkingboyStatus" -->
            </el-switch>
            <p v-show="false">{{changeParkingboyStatus}}</p>
        </div>
    
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      canclevisible: false,
      value1: false,
    //   value1: this.$store.getters['parkingboy/getParkingboyId'],
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
        this.$store.dispatch('parkingboy/setParkingBoyOrders');
        this.$router.push('/pb/allorder');
    },
  },
  computed: {
    name() {
      return this.$store.getters['parkingboy/getParkingboy'] && this.$store.getters['parkingboy/getParkingboy'].user
        ? this.$store.getters['parkingboy/getParkingboy'].user.name
        : '';
    },
    changeParkingboyStatus () {
        if (this.value1){
            let id = this.$store.getters['parkingboy/getParkingboyId']
            this.$store.dispatch('changeParkingboyStatus', id);
            return true;
        }
        return false;
    }
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
    width: 100%;
    font-size:2em
  }
}
</style>