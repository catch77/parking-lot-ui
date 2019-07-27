/**
 * Created by morenyang on 2019-07-27.
 */

import authHelper from '../utils/authHelper';

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
  actions: {},
  getters: {
    loginState(state) {
      return state.token && state.token.access_token;
    },
    token(state, getters) {
      if (getters.loginState) {
        return state.token.access_token;
      }
      return null;
    },
  },
};

export default auth;
