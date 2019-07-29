import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
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
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/customers/signin',
      name: 'customerSignIn',
      component: () => import('./views/Customer/CustomerSignIn.vue'),
    },
    {
      path: '/customers/signup',
      name: 'customerSignUp',
      component: () => import('./views/Customer/CustomerSignUp.vue'),
    },
    adminRouter,
    customerRouter,
    parkingBoyRouter
  ],
});
