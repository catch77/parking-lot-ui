import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import element from 'element-ui';
import './assets/css/element-ui.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(element);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
