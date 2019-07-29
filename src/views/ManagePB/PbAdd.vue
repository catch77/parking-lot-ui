<template>
  <el-dialog
    title="添加"
    :visible.sync="addVisible"
    width="30%"
    :show-close="false"
    :close-on-press-escape="false"
  >
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="请选择">
          <el-option label="MALE" value="MALE"></el-option>
          <el-option label="FEMALE" value="FEMALE"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancleAdd">取 消</el-button>
      <el-button type="primary" @click="saveAdd">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data: function() {
    return {
      form: {
        name: '',
        gender: '',
      },
      canclevisible: false,
    };
  },
  props: {
    addVisible: Boolean,
  },
  methods: {
    saveAdd() {
      this.$store.dispatch('addPB', this.form)
      .then(() => {
        this.$message.success('添加成功');
        this.cancleAdd();
      })
      .catch(() => {
        this.$message.error("添加失败")
      });
    },
    cancleAdd() {
      this.$emit('update:addVisible', this.canclevisible);
    },
  },
};
</script>
