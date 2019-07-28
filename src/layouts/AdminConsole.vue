<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box">
      <div class="content">
        <router-view></router-view>
      </div>
      <el-footer>© {{ new Date().getFullYear() }} Ivy</el-footer>
    </div>
  </div>
</template>
<script>
import vHead from '../components/admin/Header.vue';
import vSidebar from '../components/admin/Sidebar.vue';
export default {
  data() {
    return {};
  },
  components: {
    vHead,
    vSidebar,
  },
};
</script>
