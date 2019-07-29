/**
 * Created by morenyang on 2019-07-28.
 */
import * as userService from '../services/userService';
import Router from '../router';

const admin = {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    getUser({ commit, rootGetters }) {
      if (!rootGetters.isLogin) {
        commit('CLEAR_USER');
        return Promise.reject('Did not login');
      }
      return userService
        .fetchCurrentUser()
        .then(user => {
          commit('SET_USER', user);
        })
        .catch(err => {
          commit('CLEAR_USER');
          throw err;
        });
    },
    clearUser({ commit }) {
      return new Promise(resolve => {
        commit('CLEAR_USER');
        resolve();
        Router.push(`/admin/login`);
      });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    name(state) {
      if (state.user) {
        return state.user.name;
      }
      return null;
    },
  },
};

export default admin;
