<template>
  <div>
    <el-row type="flex" justify="center" align="center" class="login-wrapper">
      <el-form
        :model="user"
        label-width="100px"
        class="login-container"
        status-icon
        ref="signUpForm"
        :rules="rules"
      >
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
          <el-input v-model="user.password" type="password" placeholder="密  码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="rePassword" label="重复密码">
          <el-input v-model="rePassword" type="password" placeholder="重复密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="电话号码">
          <el-input v-model="user.phone" placeholder="电话号码"></el-input>
        </el-form-item>
        <el-form-item prop="name" label="昵     称">
          <el-input v-model="user.name" placeholder="昵     称"></el-input>
        </el-form-item>
        <el-form-item />
        <el-form-item align="center">
          <el-button type="primary" @click="goBack" class="login-btn" :loading="loading">返回</el-button>
          <el-button type="primary" @click="signUp" class="login-btn" :loading="loading">注册</el-button>
        </el-form-item>
      </el-form>
      <router-view />
    </el-row>
  </div>
</template>

<script>
import * as customerService from '../../services/customerService'
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (this.user.password !== this.rePassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      rePassword: '',
      user: {
        username: '',
        password: '',
        phone: '',
        name: '',
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
        name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
        rePassword: [{ validator: validatePass2, trigger: 'blur' }],
      },
      isSignUpError: false,
      loading: false,
      isPasswordSame: false,
    };
  },
  methods: {
    goBack() {
      this.$router.push('/customer/signin');
    },
    signUp() {
      this.$refs.signUpForm.validate(valid => {
        if (valid) {
            const form = {
                phone: this.user.phone,
                user: {...this.user}
            }
            customerService.customerRegister(form)
            .then(res =>{
                 this.$message.error('注册成功');
                this.$router.push('/customer/signin');
            })
            .catch(() => {
                this.$message.error('注册失败')
            });
        }
      });
    },
  },
  computed: {},
};
</script>
