<template>
  <!-- delete tips -->
  <el-dialog
    title="提示"
    :visible.sync="delVisible"
    width="300px"
    center
    :show-close="false"
    :close-on-press-escape="false"
  >
    <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancleDel(currentPage)">取 消</el-button>
      <el-button type="primary" @click="deletePl">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  props: {
    delVisible: Boolean,
    id: String,
    currentPage: Number,
  },
  methods: {
    deletePl() {
      this.$store.dispatch('deletePl', this.id);
      this.$message.success('删除成功');
      this.cancleDel(1);
    },
    cancleDel(val) {
      this.$emit('cancleDel', val);
    },
  },
};
</script>
