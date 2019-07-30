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
          carNo: 'A12345',
          submitTime: new Date(),
          fetchTime: new Date(),
          orderStatus: 'PARK',
        }),
      },
    },
    data() {
      return {
        timeFormatter(date) {
          return moment(date).format('YYYY-MM-DD HH:mm:ss');
        },
      };
    },
  };
</script>

<style scoped lang="scss">
  @import "../style";

  .card-no {
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: 32px;
    line-height: 40px;

    .card-no-icon {
      color: #0052CC;
      margin-right: 15px;
      font-size: 36px;
    }
  }

  .card-content {
    font-size: 14px;
    line-height: 24px;
  }

  .item-title {
    color: #6e798b;
  }
</style>
