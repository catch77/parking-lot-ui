<template>
  <el-row type="flex" justify="center">
    <el-form :model="ruleForm" label-width="80px" class="loginContainer" status-icon ref="ruleForm" :rules="rules">
      <h3>系统登录</h3>
      <el-form-item label="用户名:" prop="user">
        <el-input v-model="ruleForm.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pass">
        <el-input
          v-model="ruleForm.pass"
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
import qs from 'qs';
export default {
  data() {
    return {
      ruleForm: {
        user: '',
        pass: '',
      },
      rules: {
        user: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.formName.user + md5(this.formName.pass));
          axios
            .get('' + this.formName.user + 'password=' + md5(this.formName.pass))
            .then(response => {
              console.log(response);
              this.$router.push('/');
            })
            .catch(err => {
              console.log('用户账号或密码错误');
            });
        } else {
          console.log('Failed');
        }
      });
    },
  },
};
</script>
<style>
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
