<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" background-color="#324157" text-color="#bfcbd9" router>
      <template v-for="item in items">
        <template>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'el-icon-lx-home',
          index: '/admin/dashboard',
          title: '系统首页',
        },
        {
          icon: 'el-icon-lx-cascades',
          index: '/admin/managePB',
          title: '管理ParkingBoy',
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
