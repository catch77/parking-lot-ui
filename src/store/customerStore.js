import * as userService from '../services/customerService';
import Router from '../router';

const customer = {
  namespaced: true,
  state: {
    customer: {},
  },
  mutations: {
    SET_USER(state, user) {
      state.customer = user;
    },
    CLEAR_USER(state) {
      state.customer = null;
    },
    // SAVE_USER(state, payload){

    // }
  },
  actions: {
    getCustomer({ commit, rootGetters }) {
      if (!rootGetters.isLogin) {
        commit('CLEAR_USER');
        return Promise.reject('Did not login');
      }
      return userService
        .fetchCurrentCustomer()
        .then(user => {
          commit('SET_USER', user);
        })
        .catch(err => {
          commit('CLEAR_USER');
          throw err;
        });
    },
    clearCustomer({ commit }) {
      return new Promise(resolve => {
        commit('CLEAR_USER');
        resolve();
        Router.push(`/customer/signin`);
      });
    },
  },
  getters: {
    getCustomer(state) {
      return state.customer;
    },
    getCustomerName(state) {
      if (state.customer) {
        return state.customer.name;
      }
      return null;
    },
  },
};

export default customer;
