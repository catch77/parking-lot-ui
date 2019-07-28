<template>
  <el-row type="flex" justify="center">
    <el-form :model="ruleForm" label-width="80px" class="loginContainer" status-icon ref="ruleForm" :rules="rules">
      <h3>系统登录</h3>
      <el-form-item label="用户名:" prop="user">
        <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pass">
        <el-input
          v-model="ruleForm.password"
          type="password"
          placeholder="请输入密码"
          @keyup.enter.native="login"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('ruleForm')" class="loginStyle">登录</el-button>
      </el-form-item>
    </el-form>
    <router-view />
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', { ...this.ruleForm }).then(() => {
        this.$router.push('/admin/console/dashboard');
      });
    },
  },
};
</script>
<style scoped>
body {
  background: #dfe9fb;
}

.loginContainer {
  width: 350px;
  margin-left: 4%;
  margin-top: 10%;
}

.loginStyle {
  width: 270px;
}
</style>
