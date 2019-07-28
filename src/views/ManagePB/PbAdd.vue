<template>
  <el-dialog title="添加" :visible.sync="addVisible" width="30%" :show-close="false" :close-on-press-escape="false">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="请选择">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="入职时间">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.joinTime"
          value-format="yyyy-MM-dd"
          style="width: 100%;"
        ></el-date-picker>
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
        address: '',
        joinTime: '',
      },
      canclevisible: false,
    };
  },
  props: {
    addVisible: Boolean,
  },
  methods: {
    saveAdd() {
      this.$store.dispatch('addPB', this.form);
      this.$message.success('添加成功');
      this.cancleAdd();
    },
    cancleAdd() {
      this.$emit('update:addVisible', this.canclevisible);
    },
  },
};
</script>
