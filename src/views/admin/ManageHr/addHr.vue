<template>
  <el-dialog
    title="添加"
    :visible.sync="addVisible"
    width="30%"
    :show-close="false"
    :close-on-press-escape="false"
  >
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
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
      rules: {
        name: [{ required: true, message: '请输入名字', trigger: 'blur' }],
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      form: {
        username: '',
        name: '',
        password:''
      },
      canclevisible: false,
    };
  },
  props: {
    addVisible: Boolean,
  },
  methods: {
    saveAdd() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$store
            .dispatch('hrStore/addHr', this.form)
            .then(() => {
              this.$message.success('添加成功');
              this.cancleAdd();
            })
            .catch(err => {
              if (err.response.data.errorCode == 101) this.$message.error('用户名已被注册');
            });
        } else {
          this.$message.error('请填写完整的信息');
        }
      });
    },
    cancleAdd() {
      this.$emit('update:addVisible', this.canclevisible);
    },
  },
};
</script>