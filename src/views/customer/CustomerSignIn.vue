<template>
  <el-row type="flex" justify="center" align="center" class="login-wrapper">
    <el-form :model="user" label-width="0" class="login-container" status-icon ref="loginForm" :rules="rules">
      <h3 class="login-form-title" align="center">用 户 登 录</h3>
      <el-alert
        v-if="isLoginError"
        title="用户名或密码错误"
        type="error"
        effect="dark"
        :closable="false"
        class="login-error"
      ></el-alert>
      <el-form-item prop="username">
        <el-input v-model="user.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="user.password" type="password" placeholder="密码" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" class="login-btn" :loading="loading">登录</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="signup" class="login-btn" :loading="loading">注册</el-button>
      </el-form-item>
    </el-form>
    <router-view />
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      isLoginError: false,
      loading: false,
    };
  },
  mounted() {
    if (this.$store.getters.isLogin && this.$store.getters.roles.includes('CUSTOMER')) {
      this.$router.push('/customers/dashboard');
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          //登录
          this.$store
            .dispatch('login', { ...this.user })
            .then(() => {
              this.loading = false;
              this.isLoginError = false;
              //跳转路由
              this.$router.push('/customers/dashboard');
            })
            .catch(() => {
              this.loading = false;
              this.isLoginError = true;
            });
        }
      });
    },
    signup() {
      this.$router.push('/customers/signup');
    },
  },
};
</script>
<style lang="scss" scoped>
.login-wrapper {
  min-height: 100vh;
  align-items: center;
  background: #f4f5f7;
}

.login-container {
  width: 360px;
  margin-bottom: 120px;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid #dfe1e6;
  background: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
}

.login-form-title {
  font-size: 36px;
  margin-bottom: 12px;
  margin-top: 12px;
  font-weight: 400;
}

.login-btn {
  width: 100%;
}

.login-error {
  margin-bottom: 20px;
}
</style>
