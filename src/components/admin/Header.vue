<template>
  <div class="admin-header">
    <h2 class="header-title">Ivy Park 后台管理系统</h2>
    <div class="header-right">
      <div class="header-user-info">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link username">
            {{ this.$store.getters['admin/name'] }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>@{{ this.$store.getters.username }}</el-dropdown-item>
            <el-dropdown-item divided command="LOG_OUT">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: 'admin',
    };
  },

  methods: {
    handleCommand(command) {
      if (command === 'LOG_OUT') {
        this.$store.dispatch('logout').then(() => {
          this.$router.push('/admin/login');
        });
      }
    },
  },
};
</script>
<style scoped>
.admin-header {
  display: flex;
  color: #fff;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.header-title {
  margin: 0;
  font-weight: 400;
}

.username {
  color: #fff;
}
</style>
