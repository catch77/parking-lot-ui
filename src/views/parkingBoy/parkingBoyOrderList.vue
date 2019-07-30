<template>
    <div>

        <div class="card">
            <el-card class="box-card" :body-style="{ padding: '20px' }">
            <div  class="clearfix" >
                <el-row :guttur="5">
                    <el-col :span="6"><span>订单编号</span></el-col>
                    <el-col :span="10"><span>{{order.orderNumber}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="6"><span>订单状态</span></el-col>
                    <el-col :span="10">
                        <span v-if="order.orderStatus==='FETCH'">取车</span>
                        <span v-else>停车</span>
                    </el-col>
                </el-row>
                <br>
                <el-row :guttur="5">
                    <el-col :span="6"><span>顾客姓名</span></el-col>
                    <el-col :span="10"><span>{{order.name}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="6"><span>顾客电话</span></el-col>
                    <el-col :span="10"><span>{{order.customerPhone}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="6"><span>车牌号</span></el-col>
                    <el-col :span="10"><span>{{order.carNo}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="6"><span>停车场</span></el-col>
                    <el-col :span="10"><span>{{order.parkingLotName}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="6"><span>订单提交时间</span></el-col>
                    <el-col :span="10"><span>{{order.submitTime}}</span></el-col>
                </el-row>
                <el-row :guttur="5" >
                    <el-col :span="6"><span>取车时间</span></el-col>
                    <el-col :span="10"><span >{{order.fetchTime}}</span></el-col>
                </el-row>
                <el-row :guttur="5" >
                    <el-col :span="6"><span>停车员</span></el-col>
                    <el-col :span="10"><span>{{order.parkParkingBoy}}</span></el-col>
                </el-row>
                <el-row :guttur="5" >
                    <el-col :span="6"><span>取车人</span></el-col>
                    <el-col :span="10"><span>{{order.fetchParkingBoy}}</span></el-col>
                </el-row>
                <br>
                <el-row :guttur="5" >
                    <el-col :span="6"><span>总价</span></el-col>
                    <el-col :span="10"><span>{{order.price}} 元</span></el-col>
                </el-row>
            </div>
            </el-card>
        </div>
        <br/>
        <br/>
        <div class="mobile-view-footer">
        <el-button @click="back" icon="el-icon-back">返回</el-button>
      </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            //order: null,
            // order:  {
            //         id:'1',
            //         name: 'vip客户1',//顾客姓名
            //         customerPhone: '15521081400',//客户电话
            //         carNo: 'aaaa1',//车牌号
            //         price: 12.0,//总价
            //         submitTime: '2019-07-29 15:21:00',//订单提交时间
            //         parkingLotName: '六号停车场', //停车场
            //         orderNumber: '00001',//订单编号
            //         orderStatus: 'PARK',//订单状态
            //         fetchTime: '2019-07-29 22:21:00',//取车时间
            //         fetchParkingBoy: '小明',//取车人name
            //         parkParkingBoy: '小明',//停车员name
            // },
        }
    },
    methods: {
        back() {
            this.$router.push('/pb/allorder');
        },
    },
    computed: {
        order: this.$store.getters['parkingboy/getCurrentParkOrde'],
    }
}
</script>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
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
  .body-row{
        .el-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-col {
    border-radius: 4px;
    }
     .bg-purple-dark {
    background: #99a9bf;
     }
     .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  }
.mobile-view-footer {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    color: #8c939d;
  };
</style>
