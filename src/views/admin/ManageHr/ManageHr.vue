<template>
  <div>
    <div class="admin-container">
      <div class="handle-box">
        <el-button class="add" type="primary" @click="handleAddHr">添加</el-button>
      </div>
      <el-table :data="getHrList" border class="table">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column>
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
          :current-page="getCurrentHrpage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="getTotalHrPageSize"
        ></el-pagination>
      </div>

      <addHr :addVisible.sync="addVisible"></addHr>
      <deleteHr :delVisible.sync="delVisible" :currentHrId="cuurent_HrId"></deleteHr>
      <editHr :form="form" :editVisible.sync="editVisible"></editHr>
    </div>
  </div>
</template>

<script>
import addHr from './addHr';
import deleteHr from './deleteHr';
import editHr from './editHr';
export default {
  name: 'basetable',
  mounted: function() {
    this.$store.dispatch('hrStore/getHrList', 1);
  },
  components: {
    addHr,
    deleteHr,
    editHr,
  },
  data() {
    return {
      currentHrPage: 1,
      editVisible: false,
      delVisible: false,
      addVisible: false,
      form: {
        id: '',
        name: '',
      },
      cuurent_HrId: undefined,
    };
  },
  computed: {
    getHrList() {
      return this.$store.getters['hrStore/getHrList'];
    },
    getHrPageSize() {
      return this.$store.getters['hrStore/getHrPageSize'];
    },
    getTotalHrPageSize() {
      return this.$store.getters['hrStore/getTotalHrPageSize'];
    },
    getCurrentHrpage() {
      return this.$store.getters['hrStore/getCurrentHrpage'];
    },
  },
  methods: {
    handleCurrentChange(page) {
      this.currentHrPage = page;
      this.$store.dispatch('hrStore/getHrList', page);
    },
    handleAddHr() {
      this.addVisible = true;
    },
    handleEditHr(row) {
      this.form = {
        id: row.id,
        name: row.name,
      };
      this.editVisible = true;
    },
    handleDeleteHr(row) {
      this.cuurent_HrId = row.id;
      this.delVisible = true;
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
