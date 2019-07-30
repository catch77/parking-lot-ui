<template>
  <div>
    <h1 class="customer-page-title">
      选择需要取车的订单
    </h1>
    <div class="order-lit">
      <OrderItemCard @click="handleSubmitFetch"/>
    </div>
    <el-dialog :visible="showConfirmDialog" class="confirm-dialog" width="90%">
      <div>
        <div class="confirm-content">
          <h2 class="title">请确定是否取车</h2>
          <div class="confirm-content-inner">
            此操作将为您取车，请确认车牌号并继续。
            <h3 class="car-no">
              {{currentConfirmOrder && currentConfirmOrder.carNo}}
            </h3>
          </div>
        </div>
        <div class="button-bar">
          <el-row class="confirm-btn-bar">
            <el-button class="confirm-btn" @click="confirmFetch" type="primary">确定取车</el-button>
          </el-row>
          <el-row class="confirm-btn-bar">
            <el-button class="confirm-btn" @click="cancelFetch">取消</el-button>
          </el-row>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import OrderItemCard from './components/OrderItemCard';

  export default {
    name: 'FetchableCardList',
    components: { OrderItemCard },
    data() {
      return {
        showConfirmDialog: false,
        currentConfirmOrder: {
          carNo: 'A12345',
          submitTime: new Date(),
          fetchTime: new Date(),
          orderStatus: 'PARK',
        }
      };
    },
    methods: {
      handleSubmitFetch() {
        this.showConfirmDialog = true;
      },
      confirmFetch() {
        this.showConfirmDialog = false;
      },
      cancelFetch() {
        this.showConfirmDialog = false;
      },
    },
  };
</script>

<style scoped lang="scss">
  .confirm-dialog {
  }

  .title {
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .confirm-content {
    margin-top: -40px;
    .car-no {
      font-size: 42px;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }

  .confirm-btn-bar + .confirm-btn-bar {
    margin-top: 10px;
  }

  .confirm-btn {
    width: 100%;
  }
</style>
