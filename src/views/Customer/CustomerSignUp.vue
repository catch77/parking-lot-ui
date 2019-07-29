<template>
    <div>
    <el-row type="flex" justify="center" align="center" class="login-wrapper">
    <el-form :model="user" label-width="100px" class="login-container" status-icon ref="loginForm" :rules="rules">
      <h3 class="login-form-title" align="center">用 户 注 册</h3>
      <el-alert
        v-if="isSignUpError"
        title="注册出错!"
        type="error"
        effect="dark"
        :closable="false"
        class="login-error"
      ></el-alert>
      <el-form-item prop="username" label="用 户 名">
        <el-input v-model="user.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密    码">
        <el-input v-model="user.password" type="password" placeholder="密  码" @keyup.enter.native="login"></el-input>
      </el-form-item>
        <el-form-item prop="rePassword" label="重复密码">
        <el-input v-model="user.password" type="password" placeholder="重复密码" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-form-item prop="phone" label="电话号码">
        <el-input v-model="user.phone" placeholder="电话号码"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="您的姓名">
        <el-input v-model="user.name" placeholder="您的姓名"></el-input>
      </el-form-item>
      <el-form-item/>
      <el-form-item align="center">
          <el-button type="primary" @click="goBack" class="login-btn" :loading="loading" >返回</el-button>
        <el-button type="primary" @click="signUp" class="login-btn" :loading="loading" >注册</el-button>
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
        rePassword: '',
        phone: '',
        name: '',
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        rePassword: [{ required: true, message: '请输入确认密码', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
        name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
      },
      isSignUpError: false,
      loading: false,
    };
  },
  methods: {
      goBack () {
          this.$router.push('/customer/signin');
      },
      signUp () {

      },
  }
}
</script>
