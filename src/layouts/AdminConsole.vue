<script>
import Sidebar from '../components/admin/Sidebar';

export default {
  components: { Sidebar },
};
</script>

<template>
  <el-container class="admin-container">
    <el-header class="admin-header">
      <h3 class="admin-title">停车场管理系统</h3>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar class="admin-sidebar" />
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>© {{ new Date().getFullYear() }} Ivy</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.admin-container {
  min-height: 100vh;
}

.admin-header {
  background: #0052cc;
  display: flex;
  align-items: center;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
}

.admin-title {
  color: #fff;
  font-weight: 400;
}
.admin-sidebar {
  height: 100%;
  overflow: scroll;
}
</style>
