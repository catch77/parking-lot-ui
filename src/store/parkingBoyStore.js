import * as userService from '../services/parkingBoyService';

const parkingboy = {
  namespaced: true,
  state: {
    parkingboy: {},
  },
  mutations: {
    SET_USER(state, user) {
      state.parkingboy = user;
    },
    CLEAR_USER(state) {
      state.parkingboy = null;
    },
    // SAVE_USER(state, payload){

    // }
  },
  actions: {
    getParkingboy({ commit, rootGetters }) {
      if (!rootGetters.isLogin) {
        commit('CLEAR_USER');
        return Promise.reject('Did not login');
      }
      return userService
        .fetchCurrentParkingboy()
        .then(user => {
          commit('SET_USER', user);
        })
        .catch(err => {
          commit('CLEAR_USER');
          throw err;
        });
    },
    clearParkingboy({ commit }) {
      return new Promise(resolve => {
        commit('CLEAR_USER');
        resolve();
      });
    },
  },
  getters: {
    getParkingboy(state) {
      return state.parkingboy;
    },
    getParkingboyName(state) {
      if (state.parkingboy) {
        return state.parkingboy.name;
      }
      return null;
    },
  },
};

export default parkingboy;
