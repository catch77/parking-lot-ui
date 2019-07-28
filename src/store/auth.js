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
    login({ commit }, { username, password }) {
      let token;
      return authService
        .login({ username, password })
        .then(_token => {
          token = _token;
          return token;
        })
        .then(() => authService.fetchPrincipal())
        .then(principal => {
          commit('SET_TOKEN', token);
          commit('SET_PRINCIPAL', principal);
          return principal;
        });
    },
  },
  getters: {
    loginState(state) {
      return !!state.token;
    },
    token(state) {
      return state.token || null;
    },
  },
};

export default auth;
