<template>
    <div>
        <div class="card">
            <el-card class="el-card" :body-style="{ padding: '20px' }" v-for="order in orderList" :key="order.orderNumber" @click.native='goOrder(order)' style="margin-top: 10px;border-radius:15px;">
            <div  class="clearfix" >
                <el-row :guttur="5">
                    <el-col :span="5"><span>订单编号</span></el-col>
                    <el-col :span="10"><span>{{order.orderNumber}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="5"><span>订单状态</span></el-col>
                    <el-col :span="10">
                        <span v-if="order.orderStatus==='FETCH'">取车</span>
                        <span v-else>停车</span>
                    </el-col>
                </el-row>
                <br>
                <el-row :guttur="5">
                    <el-col :span="5"><span>顾客姓名</span></el-col>
                    <el-col :span="10"><span>{{order.name}}</span></el-col>
                </el-row>
                <el-row :guttur="5">
                    <el-col :span="5"><span>顾客电话</span></el-col>
                    <el-col :span="10"><span>{{order.customerPhone}}</span></el-col>
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
                <el-row :guttur="5" v-if="order.orderStatus==='FETCH'">
                    <el-col :span="5"><span>停车员</span></el-col>
                    <el-col :span="10"><span>{{order.parkParkingBoy}}</span></el-col>
                </el-row>
                <el-row :guttur="5" v-if="false">
                    <el-col :span="5"><span>取车人</span></el-col>
                    <el-col :span="10"><span>{{order.fetchParkingBoy}}</span></el-col>
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
        //     orderList: [
        //         {
        //             name: 'vip客户1',//顾客姓名
        //             customerPhone: '15521081400',//客户电话
        //             carNo: 'aaaa1',//车牌号
        //             price: 12.0,//总价
        //             submitTime: '2019-07-29 15:21:00',//订单提交时间
        //             parkingLotName: '六号停车场', //停车场
        //             orderNumber: '00001',//订单编号
        //             orderStatus: 'PARK',//订单状态
        //             fetchTime: '2019-07-29 22:21:00',//取车时间
        //             fetchParkingBoy: '小明',//取车人name
        //             parkParkingBoy: '小明',//停车员name
        //     },
        //     {
        //             name: '客户2',//顾客姓名
        //             customerPhone: '13369581564',
        //             carNo: '23654',//车牌号
        //             price: 6.0,//总价
        //             submitTime: '2019-07-29 18:56:00',//订单提交时间
        //             parkingLotName: '六号停车场', //停车场
        //             orderNumber: '00002',//订单编号
        //             orderStatus: 'FETCH',//订单状态
        //             fetchTime: '2019-07-29 23:36:00',//取车时间
        //             fetchParkingBoy: '小明',//取车人
        //             parkParkingBoy: '小明',//停车人
        //     },
        //     ],
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
        orderList: this.$store.getters['parkingboy/getParkOrders'],
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
