<template>
  <div>
    <div class="user-dashboard-header">
      <h1 class="user-name">
        <span class="welcome-title">欢迎您,<br/></span>
        {{ name }}
      </h1>
    </div>
    <el-row>
      <div class="customer-card-list">
        <FeatureItemCard icon="parking" title="新建停车订单" description="系统会自动为您指派停车员" theme-color="#0052CC"
                         @click="handleParking"/>
        <FeatureItemCard icon="car-side" title="取车" description="系统会自动为您指派取车员" theme-color="#67C23A"
                         @click="handleFetching"/>
        <FeatureItemCard icon="list-alt" title="所有订单" description="查看您所有的停车订单" theme-color="#344563"
                         @click="handleParking" v-show="false"/>
      </div>
    </el-row>
  </div>
</template>
<script>
  import FeatureItemCard from './components/FeatureItemCard';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faParking, faArrowRight, faListAlt, faCarSide } from '@fortawesome/free-solid-svg-icons';

  library.add(faParking, faArrowRight, faListAlt, faCarSide);
  export default {
    components: { FeatureItemCard },
    data: function() {
      return {
        sizeForm: {
          carNo: '',
        },
        canclevisible: false,
      };
    },
    props: {
      addVisible: Boolean,
    },
    methods: {
      handleLookingReceipt() {
        // this.$router.push("/");
      },
      handleParking() {
        this.$router.push('/customers/orderconfirm');
      },
      handleFetching() {
        this.$router.push('/customers/fetchable-order-list');
      },
    },
    computed: {
      name() {
        return this.$store.getters['customer/getCustomer'] && this.$store.getters['customer/getCustomer'].user
          ? this.$store.getters['customer/getCustomer'].user.name
          : '';
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "./style";

  .user-dashboard-header {
    padding-top: 10px;

    .welcome-title {
      font-size: 24px;
      color: #6e798b;
    }

    .user-name {
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 400;
      font-size: 36px;
    }
  }


</style>
<style lang="scss">
  .customer-card-list {
    margin-top: 30px;
    margin-bottom: 40px;
  }
</style>
