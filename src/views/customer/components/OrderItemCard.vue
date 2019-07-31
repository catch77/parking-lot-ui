<template>
  <div class="order-item-card customer-item-card" @click="$emit('click')">
    <h2 class="card-no">
      <span class="card-no-icon"><fa-icon icon="parking"/></span>{{order.carNo}}
    </h2>
    <div class="card-content">
      <el-row>
        <el-col :span="6" class="item-title" v-if="order.submitTime">订单提交</el-col>
        <el-col :span="14" v-if="order.submitTime">{{timeFormatter(order.submitTime)}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="6" class="item-title" v-if="order.fetchTime">取车提交</el-col>
        <el-col :span="14" v-if="order.fetchTime">{{timeFormatter(order.fetchTime)}}</el-col>
      </el-row>
    </div>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faParking } from '@fortawesome/free-solid-svg-icons';
  import moment from 'moment';

  library.add(faParking);

  export default {
    name: 'OrderItemCard',
    props: {
      order: {
        type: Object,
        default: () => ({
          'id': '8a80cb816c46e873016c46eb7f2e0005',
          'number': '201907311516136',
          'customer': {
            'id': '8a80cb816c46e873016c46e988df0001',
            'phone': '12388885555',
            'point': 0,
            'times': 0,
            'user': {
              'id': 36,
              'username': 'user1',
              'roles': ['CUSTOMER'],
              'name': 'User',
              'deleteFlag': false,
              'createTime': '2019-07-31T07:23:26.000+0000',
              'updateTime': '2019-07-31T07:23:26.000+0000',
            },
            'createTime': '2019-07-31T07:23:26.000+0000',
            'updateTime': '2019-07-31T07:23:26.000+0000',
            'vip': false,
          },
          'carNo': 'A42A3',
          'startTime': '2019-07-31T07:25:34.000+0000',
          'endTime': null,
          'parkParkingBoy': {
            'id': '297ed7b96c4616f7016c461bc9100001',
            'parkingLotList': [],
            'user': {
              'id': 34,
              'username': 'xiaohong',
              'roles': ['PARKINGBOY'],
              'name': '小红',
              'deleteFlag': false,
              'createTime': '2019-07-31T03:38:42.000+0000',
              'updateTime': '2019-07-31T03:38:42.000+0000',
            },
            'status': 'OPEN',
            'name': '小红',
            'gender': 'MALE',
            'orderNumInOpen': 0,
            'orderNumInClose': 0,
            'free': false,
            'joinTime': '2019-07-31T03:38:42.000+0000',
            'createTime': '2019-07-31T03:38:42.000+0000',
            'updateTime': '2019-07-31T03:40:07.000+0000',
          },
          'fetchParkingBoy': null,
          'parkingLot': {
            'id': '8a5e9d216c3c8ae5016c3c8bb5000004',
            'name': '1',
            'capacity': 10,
            'address': '1',
            'usedCapacity': 10,
            'createTime': null,
            'updateTime': null,
          },
          'orderStatus': 'PARK',
          'price': 0,
          'submitTime': '2019-07-31T07:25:34.000+0000',
          'fetchTime': null,
          'createTime': '2019-07-31T07:25:34.000+0000',
          'updateTime': '2019-07-31T07:25:34.000+0000',
        }),
      },
    },
    data() {
      return {

      };
    },
    methods:{
      timeFormatter(date) {
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
      },
    }
  };
</script>

<style scoped lang="scss">
  @import "../style";


</style>
