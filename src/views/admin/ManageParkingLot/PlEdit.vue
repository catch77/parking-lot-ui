<template>
  <el-dialog title="编辑" :visible.sync="editVisible" width="30%" :show-close="false" :close-on-press-escape="false">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="容量">
        <el-input-number v-model="form.capacity"></el-input-number>
      </el-form-item>

      <el-form-item label="地址">
        <el-input v-model="form.address" :disabled="true"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancleEdit">取 消</el-button>
      <el-button type="primary" @click="saveEdit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data: function() {
    return {
      cancleVisible: false,
    };
  },
  props: {
    editVisible: Boolean,
    form: Object,
  },
  methods: {
    saveEdit() {
      this.$store
        .dispatch('updatePL', this.form)
        .then(() => {
          this.$message.success('修改成功');
          this.cancleEdit();
        })
        .catch(() => {
          this.$message.success('修改失败');
        });
    },
    cancleEdit() {
      this.$emit('update:editVisible', this.cancleVisible);
    },
  },
};
</script>
