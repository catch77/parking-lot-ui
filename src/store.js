import Vue from 'vue';
import Vuex from 'vuex';
import auth from './store/auth';
import plStore from './store/plStore';
import pbStore from './store/pb';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    plStore,
    pbStore,
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
