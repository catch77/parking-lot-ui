import * as orderService from '../services/orderService';

const order = {
  namespaced: true,
  state: {
    carNo: '',
  },
  mutations: {
    SET_FORM(state, payload) {
      state.carNo = payload;
    },
  },
  actions: {
    postCarNo({ commit, rootGetters }, payload) {
      const username = rootGetters.username;
      return orderService.postCarNoAndUserName(username, payload).then(() => {
        commit('SET_FORM', payload);
      });
    },
  },
  getters: {
    CarNo(state) {
      return state.carNo;
    },
  },
};

export default order;
