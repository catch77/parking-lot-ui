<template>
  <el-container class="wrapper">
    <el-header class="header-bar">
      <admin-header></admin-header>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <admin-sidebar></admin-sidebar>
      </el-aside>
      <el-main>
        <div class="content-box">
          <div class="content">
            <router-view></router-view>
          </div>
          <el-footer>© {{ new Date().getFullYear() }} Ivy</el-footer>
        </div>
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
</style>
