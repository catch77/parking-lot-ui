<template>
  <div>
    <div class="admin-container">
      <div class="handle-box">
        <el-button class="add" type="primary" @click="handleAddHr">添加</el-button>
      </div>
      <el-table :data="getPbList" border class="table">
        <el-table-column prop="name" label="姓名"></el-table-column>
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" @click="handleEditHr(scope.row)">编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDeleteHr(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="admin-pagination">
        <el-pagination
          background
          :page-size="getHrPageSize"
          :current-page="currentHrPage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="getTotalHrPageSize"
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
    this.$store.dispatch('hrStore/getHrList', 1);
  },
  components: {},
  data() {
    return {
      moment,
      currentHrPage: 1,
    };
  },
  computed: {
    getHrList() {
      return this.$store.getters.getHrList;
    },
    getHrPageSize() {
      return this.$store.getters.getHrPageSize;
    },
    getTotalHrPageSize() {
      return this.$store.getters.getTotalHrPageSize;
    },
  },
  methods: {
    handleCurrentChange(page) {
        this.currentHrPage=page
        this.$store.dispatch('hrStore/getHrList',page)
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
