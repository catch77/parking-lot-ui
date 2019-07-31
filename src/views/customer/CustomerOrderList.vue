<template>
  <div>
    <h1 class="customer-page-title">
      我的订单
    </h1>
    <div class="order-list">
      <OrderCard/>
    </div>
  </div>
</template>

<script>
  import OrderCard from './components/OrderCard';

  export default {
    name: 'CustomerOrderList',
    components: { OrderCard },
    data() {
      return {
        order: {},
      };
    },
    mounted() {
      this.fetchUserOrderList();
    },
    methods: {
      fetchUserOrderList() {

      },
    },
  };
</script>

<style scoped lang="scss">

  @import "./style";

</style>
