<template>
    <div>
        <div class="card">
            <el-card class="el-card" :body-style="{ padding: '20px' }" v-for="order in orderList" :key="order.orderNumber" @click.native='goOrder(order)' style="margin-top: 10px;border-radius:15px;">
            <div  class="clearfix" >
                <el-row :guttur="5">
                    <el-col :span="5"><span>订单编号</span></el-col>
                    <el-col :span="10"><span>{{order.orderId}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="5"><span>订单状态</span></el-col>
                    <el-col :span="10">
                        <span v-if="order.orderStatus==='PARK'">停车</span>
                        <span v-else>取车</span>
                    </el-col>
                </el-row>
                <br>
                <el-row :guttur="5">
                    <el-col :span="5"><span>顾客姓名</span></el-col>
                    <el-col :span="10"><span>{{order.username}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="5"><span>顾客电话</span></el-col>
                    <el-col :span="10"><span>{{order.phone}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="5"><span>车牌号</span></el-col>
                    <el-col :span="10"><span>{{order.carNo}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="5"><span>停车场</span></el-col>
                    <el-col :span="10"><span>{{order.parkingLotName}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="5"><span>提交时间</span></el-col>
                    <el-col :span="10"><span>{{order.submitTime}}</span></el-col>
                </el-row>
                <el-row :guttur="5" v-if="false">
                    <el-col :span="5"><span>取车时间</span></el-col>
                    <el-col :span="10"><span >{{order.fetchTime}}</span></el-col>
                </el-row>
                <el-row :guttur="5" v-if="!order.orderStatus==='PARK'">
                    <el-col :span="5"><span>停车员</span></el-col>
                    <el-col :span="10"><span>{{order.parkParkingBoyName}}</span></el-col>
                </el-row>
                <el-row :guttur="5" v-if="false">
                    <el-col :span="5"><span>取车人</span></el-col>
                    <el-col :span="10"><span>{{order.fetchParkingBoyName}}</span></el-col>
                </el-row>
                <el-row :guttur="5" v-if="false">
                    <el-col :span="5"><span>总价</span></el-col>
                    <el-col :span="10"><span>{{order.price}} 元</span></el-col>
                </el-row>
            </div>
            </el-card>
        </div>

        <div class="mobile-view-footer">
        <el-button @click="back" icon="el-icon-back">返回</el-button>
      </div>
    </div>

</template>

<script>
export default {
    data: function(){
        return {
        }
    },
    methods: {
        goOrder(order) {
            this.$store.dispatch('parkingboy/setCurrentParkOrder', order);
            this.$router.push('/pb/orderlsit');
        },
        back() {
            this.$router.push('/pb/dashboard');
        }
    },
    computed: {
        orderList(){
            return this.$store.getters['parkingboy/getParkOrders'];
        }
    },
}
</script>

<style lang='scss' scoped>
  .mobile-view-footer {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    color: #8c939d;
  };
// div {
//     background-color: green 
// }
  
</style>
