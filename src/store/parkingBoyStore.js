import * as userService from '../services/parkingBoyService';

const parkingboy = {
  namespaced: true,
  state: {
    parkingboy: {},
    parkOrders: [],
    currentParkOrder: {},
  },
  mutations: {
    SET_USER(state, user) {
      state.parkingboy = user;
    },
    CLEAR_USER(state) {
      state.parkOrders = null;
    },
    SET_PARKORDERS(state, orders) {
        state.parkOrders = orders;
    },
    SET_CURRENTORDER(state, order) {
        state.currentParkOrder = order;
    },
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
    setParkingBoyOrders({ commit }) {
        userService.fetchParkingboyOrders()
        .then(res =>{
            commit('SET_PARKORDERS', res);
        })
        .catch(err => {
            throw err;
          });
    },
    setCurrentParkOrder({ commit }, order){
        commit('SET_CURRENTORDER', order)
    },
    changeParkingboyStatus({ commit }, id){
        userService.fetchParkingboyByParkingboyId(id)
        .then(
            
        )
        .catch(err => {
            throw err;
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
    getParkingboyId(state) {
        if (state.parkingboy) {
          return state.parkingboy.id;
        }
        return null;
    },
    getParkOrders(state) {
        return state.parkOrders;
    },
    getCurrentParkOrder(state) {
        return state.currentParkOrder;
    },
  },
};

export default parkingboy;
