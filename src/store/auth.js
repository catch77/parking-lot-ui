/**
 * Created by morenyang on 2019-07-27.
 */

import authHelper from '../utils/authHelper';
import * as authService from '../services/authService';

const auth = {
  state: {
    token: authHelper.getAuthState(),
    principal: null,
  },
  mutations: {
    SET_TOKEN(state, tokenData) {
      authHelper.setToken(tokenData);
      state.token = authHelper.getAuthState();
    },
    CLEAR_TOKEN(state) {
      authHelper.clearToken();
      state.token = authHelper.getAuthState();
      state.principal = null;
    },
    SET_PRINCIPAL(state, principal) {
      state.principal = principal;
    },
  },
  actions: {
    login({ commit, dispatch }, { username, password }) {
      return authService
        .login({ username, password })
        .then(_token => {
          authHelper.setToken(_token);
          commit('SET_TOKEN', _token);
          return authHelper.getAuthState();
        })
        .then(() => {
          dispatch('fetchPrincipal');
        });
    },
    fetchPrincipal({ commit }) {
      return authService
        .fetchPrincipal()
        .then(principal => {
          commit('SET_PRINCIPAL', principal);
          return principal;
        })
        .catch(err => {
          commit('CLEAR_TOKEN');
          throw err;
        });
    },
    logout({ commit, dispatch }) {
      return new Promise(resolve => {
        commit('CLEAR_TOKEN');
        dispatch('admin/clearUser');
        resolve();
      });
    },
  },
  getters: {
    isLogin(state) {
      return !!state.token;
    },
    token(state) {
      return state.token || null;
    },
    username(state, getters) {
      if (getters.isLogin && state.principal) {
        return state.principal.username;
      }
    },
    roles(state, getters) {
      if (getters.isLogin && state.principal) {
        return state.principal.roles;
      }
      return [];
    },
  },
};

export default auth;
