<template>
  <div>
    <h1 class="customer-page-title">
      <fa-icon icon="chevron-left" @click="$router.push(`/customers/dashboard`)"/>
      我的订单
    </h1>
    <el-row v-loading="loading" v-if="loading"/>
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
        loading: false,
      };
    },
    mounted() {
      this.fetchUserOrderList();
    },
    methods: {
      fetchUserOrderList() {
        this.loading = true;
        this.$store.dispatch('clearCustomerOrderList').then(() =>
          this.$store.dispatch('fetchAllOrders'),
        ).then(() => {
          this.loading = false;
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
