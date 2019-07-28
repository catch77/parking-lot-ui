<template>
  <el-container class="wrapper" v-loading="!authorityCheck">
    <el-header class="header-bar">
      <admin-header v-if="authorityCheck"></admin-header>
    </el-header>
    <el-container>
      <el-aside class="admin-side">
        <admin-sidebar v-if="authorityCheck"></admin-sidebar>
      </el-aside>
      <el-main class="admin-main">
        <div class="admin-main-content" v-if="authorityCheck">
          <router-view></router-view>
        </div>
        <el-footer>© {{ new Date().getFullYear() }} Ivy</el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AdminHeader from '../components/admin/Header.vue';
import AdminSidebar from '../components/admin/Sidebar.vue';

export default {
  data() {
    return {
      authorityCheck: false,
    };
  },
  components: {
    AdminHeader,
    AdminSidebar,
  },
  mounted() {
    if (!this.$store.getters.isLogin) {
      this.$router.push('/admin/login');
      return;
    }
    this.$store
      .dispatch('admin/getUser')
      .then(() => {
        this.authorityCheck = true;
      })
      .catch(() => {
        this.$router.push('/admin/login');
      });
  },
};
</script>

<style lang="scss" scoped>
.header-bar {
  background: #172b4d;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
}

.wrapper {
  min-height: 100vh;
}

.admin-main {
  background: #f4f5f7;
}

.admin-side,
.admin-main {
  height: calc(100vh - 60px);
  overflow: auto;
}

.admin-side {
  width: 250px;
  background: #172b4d;
}

.admin-main {
  display: flex;
  flex-direction: column;
}

.admin-main-content {
  flex: 1;
}
</style>

<style lang="scss">
.admin-container {
  padding: 30px;
  border: 1px solid #c1c7d0;
  border-radius: 5px;
  background: #fff;
}

.admin-pagination {
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
}
</style>
