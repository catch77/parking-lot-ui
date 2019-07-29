<template>
  <div>
    <div class="admin-container">
      <el-table
        :data="getUserList"
        border
        class="table"
      >
        <el-table-column prop="name" label="姓名" width="240" align="center"></el-table-column>
        <el-table-column prop="username" label="用户名" width="240" align="center"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="240" align="center"></el-table-column>
        <el-table-column  prop="point"  label="积分" width="180" align="center"></el-table-column>
        <el-table-column prop="vip" label="VIP" width="240" align="center"></el-table-column>
        <el-table-column prop="times" label="消费次数" width="240" align="center"></el-table-column>
      </el-table>
      <div class="admin-pagination">
        <el-pagination
          background
          :page-size="getgetPageSize"
          :current-page="getCurrentPage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="getTotalCount"
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
     this.$store.dispatch('fetchAllPbBypage', 1);
  },
  data() {
    return {
      moment,
      currentPage:1,
      userList: [],
      getPageNumber: 1,
      select_word: '',
      id: '',
      form: {
        id: '',
        name: '',
        username:'',
        phone:'',
        point:'',
        vip:'',
        times: '',
      },
    };
  },
  computed: {
    getTotalCount(){
      return this.$store.getters.getTotalCount
    },
    getUserList() {
      return this.$store.getters.getPbList;
    },
    getgetPageSize() {
      return this.$store.getters.getgetPageSize;
    },
    getCurrentPage(){
       return this.$store.getters.getCurrentPage
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage=val
      this.$store.dispatch('fetchAllPbBypage', val);
    },
  },
};
</script>

<style scoped>
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




