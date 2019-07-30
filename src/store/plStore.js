import * as PlAPI from '../services/parkingLotService';

const plStore = {
  state: {
    plList: [],
    getPageSize: 0,
    totalCount: 0,
    currentpage: 1,
    allParkingLotList: [],
  },
  mutations: {
    FETCH_PL_BY_PAGE(state, payload) {
      state.currentpage = payload.number + 1;
      state.plList = payload.content;
      state.totalCount = payload.totalElements;
      state.getPageSize = payload.pageable.pageSize;
    },
    SET_PL_LIST(state, payload) {
      state.plList = payload;
    },
    DELETE_PL(state, payload) {
      state.plList.forEach(function(item, index) {
        if (item.id === payload) {
          state.plList.splice(index, 1);
        }
      });
    },
    UPDATE_PL(state, payload) {
      state.plList.forEach(function(item, index) {
        if (item.id === payload.id) {
          state.plList.splice(index, 1, payload);
        }
      });
    },
    UPDATE_ALL_PL(state, payload) {
      state.allParkingLotList = payload;
    },
  },
  getters: {
    getTotalCount: state => {
      return state.totalCount;
    },
    getgetPageSize: state => {
      return state.getPageSize;
    },
    getPlList: state => {
      return state.plList;
    },
    // getPlListByName: state => selectName => {
    //   return state.plList.filter(plList => plList.name === selectName);
    // },
    getCurrentPage: state => {
      return state.getCurrentPage;
    },
    allParkingLotList: state => {
      return state.allParkingLotList;
    },
  },
  actions: {
    // fetchAllPl({ commit }) {
    fetchAllPlBypage({ commit, state }, payload) {
      if (!payload) payload = state.currentpage;
      return PlAPI.fetchParklotByPage(payload).then(res => {
        commit('FETCH_PL_BY_PAGE', res);
      });
    },
    fetchAllPl({ commit }) {
      return PlAPI.fetchAllPl().then(res => {
        commit('SET_PL_LIST', res);
      });
    },
    deletePl({ commit }, payload) {
      return PlAPI.deletePl(payload).then(() => {
        commit('DELETE_PL', payload);
      });
    },
    updatePL({ commit }, payload) {
      return PlAPI.updatePl(payload).then(res => {
        commit('UPDATE_PL', res);
      });
    },
    // addPL({ commit }, payload) {
    //   return PlAPI.addPl(payload).then((res) => {
    //     commit('ADD_PL', res);
    //   });
    // },
    addPL({ dispatch }, payload) {
      return PlAPI.addPl(payload).then(() => {
        return dispatch('fetchAllPlBypage');
      });
    },
    getAllParkingLot({ commit }) {
      return PlAPI.fetchAllPl().then(list => {
        return commit('UPDATE_ALL_PL', list);
      });
    },
  },
};
export default plStore;
