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
      path: '/customers/finishedorder',
      name: 'finishedorder',
      component: () => import('../views/customer/OrderSubmitSuccess.vue'),
    },
    {
      path: '/customers/orderconfirm',
      name: 'orderconfirm',
      component: () => import('../views/customer/OrderSubmit.vue'),
    },
    {
      path: '/customers/fetchable-order-list',
      name: 'FetchableOrderList',
      component: () => import('../views/customer/FetchableCardList'),
    }, {
      path: '/customers/fetch-result/:orderId',
      name: 'FetchResultPage',
      component: () => import('../views/customer/OrderFetchResult'),
    },
  ],
};
