import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import element from 'element-ui';
import './assets/css/element-ui.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

Vue.component('fa-icon', FontAwesomeIcon);
library.add(faChevronLeft);

Vue.config.productionTip = false;
Vue.use(element);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
