export default {
  path: '/customer',
  name: 'customer',
  component: () => import('../layouts/Customer.vue'),
  children: [

    {
      path: '/customer/dashboard',
      name: 'customerDashboard',
      component: () => import('../views/Customer/CustomerDashboard.vue'),
    },
  ],
};
