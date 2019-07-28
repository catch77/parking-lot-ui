<template>
  <div class="wrapper">
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>
    <div class="content-box">
      <div class="content">
        <router-view></router-view>
      </div>
      <el-footer>© {{ new Date().getFullYear() }} Ivy</el-footer>
    </div>
  </div>
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
