export default {
  path: '/customers',
  name: 'customer',
  component: () => import('../layouts/Customer.vue'),
  children: [
    {
      path: '/customers/dashboard',
      name: 'customerselect',
      component: () => import('../views/Customer/customerSelect/CustomerSelect'),
    },
    {
      path: '/customers/userorder',
      name: 'userorder',
      component: () => import('../views/order/UserOrder.vue'),
    },

    {
      path: '/customers/finishedorder',
      name: 'finishedorder',
      component: () => import('../views/order/FinishedOrder.vue'),
    },
    {
      path: '/customers/orderconfirm',
      name: 'orderconfirm',
      component: () => import('../views/order/OrderConfirm.vue'),
    }
  ],
};
