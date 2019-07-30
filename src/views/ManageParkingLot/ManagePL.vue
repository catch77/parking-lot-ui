<template>
  <div>
    <div class="admin-container">
      <div class="handle-box">
        <!-- <el-input v-show="false" v-model="select_word" placeholder="搜索" class="handle-input mr10"></el-input>
        <el-button v-show="false" type="primary" icon="el-icon-search" @click="selectPL">搜索</el-button> -->
        <el-button v-show="false" type="primary" @click="getAllPLList">查看全部</el-button>
        <el-button class="add" type="primary" @click="handleAdd">添加</el-button>
      </div>
      <el-table :data="plList" border class="table">
        <el-table-column prop="name" label="名称" width="240"></el-table-column>
        <el-table-column prop="capacity" label="容量"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
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

    <PLAdd :addVisible.sync="addVisible"></PLAdd>
    <PlEdit :editVisible.sync="editVisible" :form="form"></PlEdit>
    <PlDel :delVisible="delVisible" :currentPage="currentPage" @cancleDel="cancleDel($event)" :id="id"></PlDel>
  </div>
</template>

<script>
import PLAdd from './PlAdd';
import PlEdit from './PlEdit';
import PlDel from './PlDel';

export default {
  name: 'basetable',
  mounted: function() {
    // this.$store.dispatch('fetchAllPl');
    this.$store.dispatch('fetchAllPlBypage', 1);
  },
  components: {
    PLAdd,
    PlEdit,
    PlDel,
  },
  data() {
    return {
      currentPage: 1,
      getPageNumber: 1,
      select_word: '',
      editVisible: false,
      delVisible: false,
      addVisible: false,
      id: '',
      form: {
        id: '',
        name: '',
        capacity: '',
        address: '',
      },
    };
  },
  computed: {
    getTotalCount() {
      return this.$store.getters.getTotalCount;
    },
    plList() {
      return this.$store.getters.getPlList;
    },
    getgetPageSize() {
      return this.$store.getters.getgetPageSize;
    },
    getCurrentPage() {
      return this.$store.getters.getCurrentPage;
    },
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.$store.dispatch('fetchAllPlBypage', val);
    },
    getAllPLList() {
      this.plList = this.getplList;
    },
    // selectPL() {
    //   this.plList = this.$store.getters.getplListByName(this.select_word);
    // },
    handleAdd() {
      this.addVisible = true;
    },
    handleEdit(row) {
      this.id = row.id;
      this.form = {
        ...row,
      };
      this.editVisible = true;
    },
    handleDelete(row) {
      this.id = row.id;
      this.delVisible = true;
    },
    cancleDel(val) {
      this.delVisible = false;
      this.currentPage = val;
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
