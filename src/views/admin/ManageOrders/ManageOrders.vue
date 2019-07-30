<template>
  <div>
    <div class="admin-container">
      <div class="handle-box">
        <!-- <el-button class="add" type="primary" @click="handleAddHr">添加</el-button> -->
      </div>
      <el-table :data="getOrderList" border class="table">
        <el-table-column prop="number" label="订单号"></el-table-column>
        <el-table-column prop="customer.user.name" label="客户名字"></el-table-column>
        <el-table-column prop="carNo" label="车牌号"></el-table-column>
        <el-table-column prop="parkParkingBoy.name" label="parkingBoy"></el-table-column>
        <el-table-column prop="fetchParkingBoy.name" label="fetch-parkingBoy"></el-table-column>
        <el-table-column prop="orderStatus" label="状态"></el-table-column>
        <el-table-column prop="submitTime" label="停车时间">
          <template slot-scope="scope">
              {{moment(scope.row.submitTime).format('YYYY-MM-DD HH:mm:ss')}}      
          </template>
        </el-table-column>
        <el-table-column prop="fetchTime" label="取车时间">
            <template slot-scope="scope">
              {{ scope.row.fetchTime==null?'':moment(scope.row.fetchTime).format('YYYY-MM-DD HH:mm:ss')  }}      
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <!-- <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" @click="handleEditHr(scope.row)">do something</el-button>
          </template> -->
        </el-table-column>
      </el-table>
      <div class="admin-pagination">
        <el-pagination
          background
          :page-size="getOrderPageSize"
          :current-page="getCurrentOrderPage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="getTotalOrdersPageSize"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'basetable',
  mounted: function() {
    console.log(this.$store);
    this.$store.dispatch('manageOrdersStore/fetchOrdersByPage', 1);
  },
  components: {},
  data() {
    return {
      moment,
      currentOrdersPage: 1,
      editVisible: false,
      delVisible: false,
      addVisible: false,
      cuurentOrderId: undefined,
    };
  },
  computed: {
    getOrderList() {
      return this.$store.getters['manageOrdersStore/getOrderList'];
    },
    getOrderPageSize() {
      return this.$store.getters['manageOrdersStore/getOrderPageSize'];
    },
    getTotalOrdersPageSize() {
      return this.$store.getters['manageOrdersStore/getTotalOrdersPageSize'];
    },
    getCurrentOrderPage() {
      return this.$store.getters['manageOrdersStore/getCurrentOrderPage'];
    },
  },
  methods: {
    handleCurrentChange(val) {
      this.$store.dispatch('manageOrdersStore/fetchOrdersByPage', val);
    },
  },
};
</script>

<style scoped>
.add {
  float: right;
}

.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}

.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}

.table {
  width: 100%;
  font-size: 14px;
}

.red {
  color: #ff0000;
}

.mr10 {
  margin-right: 10px;
}
</style>
