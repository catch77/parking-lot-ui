export default {
  path: '/customer',
  name: 'customer',
  component: () => import('../layouts/Customer.vue'),
  children: [
    {
      path: '/customer/signin',
      name: 'customerSignIn',
      component: () => import('../views/Customer/CustomerSignIn.vue'),
    },
    {
      path: '/customer/signup',
      name: 'customerSignUp',
      component: () => import('../views/Customer/CustomerSignUp.vue'),
    },
  ],
};
