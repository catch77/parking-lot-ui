<template>
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
      <el-button @click="cancleDel()">取 消</el-button>
      <el-button type="primary" @click="deleteHr">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data: function() {
    return {
      canclevisible: false,
    };
  },
  props: {
    delVisible: Boolean,
    currentHrId: Number,
  },
  methods: {
    deleteHr() {
      this.$store
        .dispatch('hrStore/deleteHr', {id: this.currentHrId})
        .then(() => {
          this.$message.success('删除成功');
        })
        .catch(() => {
          this.$message.error('删除失败');
        });
        this.cancleDel();
    },
    cancleDel() {
      this.$emit('update:delVisible',this.canclevisible);
    },
  },
};
</script>
