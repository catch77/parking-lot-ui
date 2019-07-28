import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./layouts/Admin.vue'),
      children: [
        {
          name: 'consoleLayout',
          path: '/admin/console',
          component: () => import('./layouts/AdminConsole'),
        },
        {
          path: '/admin/Dashboard',
          component: () => import('./views/Dashboard/Dashboard.vue'),
        },
        {
          path: '/admin/managePL',
          component: () => import('./views/ManageParkingLot/ManagePL.vue'),
        },
      ],
    },
  ],
});
