export default {
  path: '/pb',
  component: () => import('../layouts/ParkingBoy'),
  children: [
    {
      path: '/pb/dashboard',
      name: 'paDashboard',
      component: () => import('../views/parkingBoy/parkingBoyDashboard'),
    },
  ],
};
