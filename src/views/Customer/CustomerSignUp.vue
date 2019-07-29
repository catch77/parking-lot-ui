<template>
    <div>
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
    </el-form>
    <router-view />
  </el-row>
    </div>
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
}
</script>
