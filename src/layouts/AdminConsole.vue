<template>
  <el-container class="wrapper">
    <el-header class="header-bar">
      <admin-header></admin-header>
    </el-header>
    <el-container>
      <el-aside width="250px" class="admin-side">
        <admin-sidebar></admin-sidebar>
      </el-aside>
      <el-main class="admin-main">
        <div class="admin-main-content">
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
    return {};
  },
  components: {
    AdminHeader,
    AdminSidebar,
  },
  mounted() {
    this.$store.dispatch('admin/getUser');
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
