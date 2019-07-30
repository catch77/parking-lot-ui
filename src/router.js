import Vue from 'vue';
import Router from 'vue-router';
import adminRouter from './routers/adminRouter';
import customerRouter from './routers/customerRouter';
import parkingBoyRouter from './routers/parkingBoyRouter';
// import login from './views/admin/login.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/customers/signin',
      name: 'customerSignIn',
      component: () => import('./views/customer/CustomerSignIn.vue'),
    },
    {
      path: '/customers/signup',
      name: 'customerSignUp',
      component: () => import('./views/customer/CustomerSignUp.vue'),
    },
    adminRouter,
    customerRouter,
    parkingBoyRouter,
    {
      path: '/*',
      redirect: '/customers/signin',
    },
  ],
});
