import Vue from 'vue';
import Vuex from 'vuex';
import auth from './store/auth';
import plStore from './store/plStore';
import pbStore from './store/pb';
import admin from './store/admin';
<<<<<<< HEAD
import userL from './store/userL'
=======
import customer from './store/customerStore'
>>>>>>> 51ce984bb131572f41eda6f11afd2a66e240d9eb

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    plStore,
    pbStore,
    admin,
<<<<<<< HEAD
    userL,
=======
    customer,
>>>>>>> 51ce984bb131572f41eda6f11afd2a66e240d9eb
  },
  state: {
    userName: '',
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload;
    },
  },
  actions: {
    getUserName: state => {
      return state.userName;
    },
  },
});
