export default {
  path: '/admin',
  name: 'admin',
  component: () => import('../layouts/Admin.vue'),
  children: [
    {
      path: '/admin/console',
      name: 'AdminConsole',
      component: () => import('../layouts/AdminConsole.vue'),
      children: [
        {
          path: '/admin/console',
          component: () => import('../views/Dashboard/Dashboard.vue'),
        },
        {
          path: '/admin/console/Dashboard',
          component: () => import('../views/Dashboard/Dashboard.vue'),
        },
        {
          path: '/admin/console/managePB',
          component: () => import('../views/ManagePB/ManagePB.vue'),
        },
        {
          path: '/admin/console/managePL',
          component: () => import('../views/ManageParkingLot/ManagePL.vue'),
        },
        {
          path: '/admin/console/checkUser',
          component: () => import('../views/admin/UserList.vue'),
        },
        {
          path: '/admin/console/manageHr',
          component: () => import('../views/ManageHr/ManageHr.vue'),
        }
      ],
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('../views/admin/Login.vue'),
    },
  ],
};
