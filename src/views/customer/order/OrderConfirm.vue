<template>
  <div>
    <h1 class="customer-page-title">
      新建停车订单
    </h1>
    <div class="customer-item-card">
      <el-form ref="form" :model="car" label-width="0" @submit.native.prevent :rules="rules">
        <h3 class="confirm-title">请输入车牌号以继续</h3>
        <el-form-item prop="carNo">
          <el-input v-model="car.carNo"/>
        </el-form-item>

        <div class="confirm-btn-bar">
          <el-button type="primary" @click="handleCommit" class="confirm-btn"
          >确定
            <fa-icon icon="arrow-right"/>
          </el-button>
        </div>
      </el-form>
    </div>
    <div class="cancel-bar">
      <el-button type="text" @click="back" class="cancel-btn">取消</el-button>
    </div>
  </div>
</template>
<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

  library.add(faArrowRight);
  export default {
    data() {
      const checkCarNo = (rule, value, cb) => {
        if (value.length !== 5) {
          cb(new Error('请输入五位数车牌号'));
        }
        if (!/^[a-zA-Z0-9]+$/.test(value)) {
          cb(new Error('车牌号只能是数字或字母'));
        }
        cb();
      };
      return {
        car: {
          carNo: '',
        },
        canclevisible: false,
        rules: {
          carNo: [{ required: true, message: '请输入车牌号', trigger: 'blur' },
            { validator: checkCarNo, trigger: 'blur' }],
        },
      };
    },
    props: {
      addVisible: Boolean,
    },
    methods: {
      handleCommit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$store
              .dispatch('order/postCarNo', this.car.carNo)
              .then(() => {
                this.$message.success('添加成功');
                this.$router.push('/customers/finishedorder');
              })
              .catch(() => {
                this.$message.error('添加失败');
              });
          }
        });

      },
      back() {
        this.$router.push('/customers/dashboard');
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../style";

  .confirm-title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .confirm-btn-bar {
    display: flex;
    justify-content: flex-end;

    .confirm-btn {
      width: 120px;
    }
  }

  .cancel-bar {
    text-align: center;
    margin-top: 20px;
    font-size: 16px;

    .cancel-btn {
      color: #505F79;
    }
  }
</style>
