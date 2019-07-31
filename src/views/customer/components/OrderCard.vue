<template>
  <div class="order-item-card customer-item-card" @click="handleClick">
    <h2 class="card-no">
      <span class="card-no-icon"><fa-icon icon="parking"/></span>{{order.carNo}}
    </h2>
    <h3 class="status-bar" :class="order.orderStatus">
        <span class="order-status-icon">
        <fa-icon :icon="orderStatus.icon"/>
      </span>
      {{orderStatus.text}}
    </h3>
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
    <div class="card-collapse" v-if="order.parkParkingBoy">
      <el-collapse accordion v-model="index">
        <el-collapse-item name="1">
          <div class="info-row">
            <span class="row-icon">
              <fa-icon icon="user-plus"/>
            </span>
            {{order.parkParkingBoy.name}}
          </div>
          <div class="info-row" v-if="order.fetchParkingBoy">
            <span class="row-icon">
              <fa-icon icon="user-minus"/>
            </span>
            {{order.fetchParkingBoy.name}}
          </div>
          <div class="price-bar" v-if="order.orderStatus === 'PAID'">
            ￥{{order.price}}
          </div>
          <div class="action-bar" v-if="false">
            <el-button type="success" class="action-btn" v-if="order.orderStatus === 'PARK'">
              取车
            </el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faParking, faSpinner, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
  import moment from 'moment';

  library.add(faParking, faSpinner, faUserPlus, faUserMinus);
  export default {
    name: 'OrderCard',
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
          'orderStatus': 'PROGRESSING',
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
        index: '',
      };
    },
    methods: {
      timeFormatter(date) {
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
      },
      toggleCollapseOpen() {
        this.index ? this.index = '' : this.index = '1';
      },
      handleClick() {
        this.toggleCollapseOpen();
      },
    },
    computed: {
      orderStatus() {
        switch (this.order.orderStatus) {
          case 'PROGRESSING':
            return {
              text: '待分配停车员',
              icon: 'spinner',
            };
          case 'ACCEPT':
            return {
              icon: 'user-check',
              text: '已分配停车员',
            };
          case 'PARK':
            return {
              text: '已停车',
              icon: 'check',
            };
          case 'FETCH':
            return {
              icon: 'spinner',
              text: '待分配取车员',
            };
          case 'ACCEPT_FETCH':
            return {
              icon: 'user-check',
              text: '已分配取车员',
            };
          case 'PAID':
            return {
              icon: 'accept',
              text: '已取车',
            };
          default:
            return {
              text: '',
              icon: '',
            };
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  @import "../style";

  .status-bar {
    font-size: 16px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 8px;
    opacity: .7;

    &.PROGRESSING,
    &.ACCEPT,
    &.PARK {
      color: #0052cc;
    }

    &.FETCH,
    &.ACCEPT_FETCH,
    &.PAID {
      color: #67c23a;
    }
  }

  .info-row {
    font-size: 16px;
    line-height: 24px;
    margin-top: 8px;

    .row-icon {
      display: inline-block;
      width: 20px;
      padding-right: 4px;
      font-size: 16px;
      color: #484848;
    }
  }

  .action-bar {
    .action-btn {
      width: 100%;
      margin-top: 12px;
    }
  }

  .price-bar {
    text-align: center;
    font-size: 32px;
    margin-top: 16px;
    padding-top: 18px;
    border-top: 1px solid #f0f2f5;
  }
</style>

<style lang="scss">
  .card-collapse {
    .el-collapse {
      border: none;
    }

    .el-collapse-item__header {
      display: none;
    }

    .el-collapse-item__wrap {
      border-bottom: none;
    }

    .el-collapse-item__content {
      padding-bottom: 0;
    }
  }

</style>
