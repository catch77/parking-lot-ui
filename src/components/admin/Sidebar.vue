<template>
  <el-menu class="admin-sidebar" background-color="#172B4D" text-color="#7A869A" active-text-color="#F4F5F7" router>
    <template v-for="item in items">
      <template>
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'el-icon-lx-home',
          index: '/admin/console/dashboard',
          title: '系统首页',
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '/admin/console/managePB',
          title: '管理ParkingBoy',
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '/admin/console/managePL',
          title: '管理ParkingLot',
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '/admin/console/checkUser',
          title: '查看用户列表',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.admin-sidebar {
  height: 100%;
}
</style>
