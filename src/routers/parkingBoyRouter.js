export default {
  path: '/pb',
  component: () => import('../views/parkingBoy/Login.vue'),
  children: [
    {
      path: '/pb/dashboard',
      name: 'paDashboard',
      component: () => import('../views/parkingBoy/parkingBoyDashboard'),
    },
  ],
};
