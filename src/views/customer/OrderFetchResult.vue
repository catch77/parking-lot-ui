<template>
  <div class="result-page">
    <div class="fetch-header">
      <div class="icon-wrapper">
        <i class="el-icon-success icon"></i>
      </div>
      <div class="result-info">
        已提交取车
      </div>
    </div>
    <div class="fetch-content" v-if="!loading">
      <div class="customer-item-card fetch-parking-boy-card">
        <h3 class="card-title">已为您分配取车员</h3>
        <div class="parking-boy-wrapper">
          <span class="parking-boy-name"><fa-icon icon="user"/></span>{{order && order.fetchParkingBoy.name}}
        </div>
      </div>
      <OrderItemCard :order="order || null"/>
    </div>
    <div class="fetch-footer">
      <el-button type="primary" class="footer-submit-btn" @click="$router.push(`/customers/dashboard`)">完成</el-button>
    </div>
  </div>
</template>

<script>
  import OrderItemCard from './components/OrderItemCard';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faUser } from '@fortawesome/free-solid-svg-icons';

  library.add(faUser);

  export default {
    name: 'OrderFetchResult',
    components: { OrderItemCard },
    data() {
      return {
        loading: false,
      };
    },
    computed: {
      order() {
        return this.$store.getters.fetchingOrder;
      },
    },
    mounted() {
      this.fetchCurrentOrder();
    },
    methods: {
      fetchCurrentOrder() {
        const orderInStore = this.$store.getters.fetchingOrder;
        if (!orderInStore || orderInStore.id !== this.$route.params.orderId) {
          this.loading = true;
          this.$store.dispatch('fetchFetchingOrder', this.$route.params.orderId)
            .then(() => {
              this.loading = false;
            });
        }
      },
    },
    watch: {
      '$route.path'() {
        this.fetchCurrentOrder();
      },
    },
  };
</script>

<style scoped lang="scss">

  @import "style";

  .fetch-content {
    margin-top: 40px;
  }

  .fetch-parking-boy-card {
    .card-title {
      font-weight: 400;
      margin-top: 8px;
      margin-bottom: 12px;
      font-size: 16px;
      color: #6e798b;
    }
  }

  .parking-boy-wrapper {
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: 32px;
    line-height: 40px;

    .parking-boy-name {
      color: #e68a1c;
      margin-right: 15px;
      font-size: 32px;
    }
  }

  .fetch-footer {
    margin: 20px 0 40px;

    .footer-submit-btn {
      width: 100%;
    }
  }
</style>
