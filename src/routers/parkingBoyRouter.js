export default {
  path: '/pb',
  component: () => import('../layouts/ParkingBoy'),
  children: [
    {
      path: '/pb/dashboard',
      name: 'pbDashboard',
      component: () => import('../views/parkingBoy/parkingBoyDashboard'),
    },
    {
      path: '/pb/myorder',
      name: 'pbMyOder',
      component: () => import('../views/parkingBoy/parkingBoyMyOrder'),
    },
    {
      path: '/pb/allorder',
      name: 'pbAllOder',
      component: () => import('../views/parkingBoy/parkingBoyAllOrder'),
    },
  ],
};
