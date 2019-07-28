<template>
  <el-dialog
    title="添加停车场"
    :visible.sync="addVisible"
    width="30%"
    :show-close="false"
    :close-on-press-escape="false"
  >
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="容量">
        <el-input v-model="form.capacity"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancleAdd">取 消</el-button>
      <el-button type="primary" @click="saveAdd">添 加</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data: function() {
    return {
      form: {
        name: '',
        capacity: '',
        address: '',
      },
      canclevisible: false,
    };
  },
  props: {
    addVisible: Boolean,
  },
  methods: {
    saveAdd() {
      this.$store.dispatch('addPL', this.form);
      this.$message.success('添加');
      this.cancleAdd();
    },
    cancleAdd() {
      this.$emit('update:addVisible', this.canclevisible);
    },
  },
};
</script>
