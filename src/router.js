import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import login from './views/admin/login.vue'
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
          path: '/admin/console',
          name: 'AdminConsole',
          component: () => import('./layouts/AdminConsole.vue'),
          children: [
            {
              path: '/admin/console',
              component: () => import('./views/Dashboard/Dashboard.vue'),
            },
            {
              path: '/admin/console/Dashboard',
              component: () => import('./views/Dashboard/Dashboard.vue'),
            },
            {
              path: '/admin/console/managePB',
              component: () => import('./views/ManagePB/ManagePB.vue'),
            },
          ],
        },
        {
          path: '/admin/login',
          name: 'login',
          component: () => import('./views/admin/login.vue'),
        },
      ],
    },
  ],
});
