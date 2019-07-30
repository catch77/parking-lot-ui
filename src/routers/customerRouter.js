export default {
  path: '/customers',
  name: 'customer',
  component: () => import('../layouts/Customer.vue'),
  children: [
    {
      path: '/customers/dashboard',
      name: 'customerselect',
      component: () => import('../views/customer/CustomerHome'),
    },
    {
      path: '/customers/userorder',
      name: 'userorder',
      component: () => import('../views/customer/order/UserOrder.vue'),
    },

    {
      path: '/customers/finishedorder',
      name: 'finishedorder',
      component: () => import('../views/customer/order/FinishedOrder.vue'),
    },
    {
      path: '/customers/orderconfirm',
      name: 'orderconfirm',
      component: () => import('../views/customer/order/OrderConfirm.vue'),
    },
  ],
};
