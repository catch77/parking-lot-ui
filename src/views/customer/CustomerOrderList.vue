<template>
  <div>
    <h1 class="customer-page-title">
      我的订单
    </h1>
    <div class="order-list">
      <OrderCard v-for="order in orders" :key="order.id" :order="order"/>
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
        this.$store.dispatch('fetchAllOrders')
          .then(res => {
            console.log(res);
          });
      },
    },
    computed: {
      orders() {
        return this.$store.getters.customerOrderList;
      },
    },
  };
</script>

<style scoped lang="scss">

  @import "./style";

</style>
