import * as PlAPI from '../services/pl';

const plStore = {
  state: {
    plList: [],
  },
  mutations: {
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
    ADD_PL(state, payload) {
      state.plList.push(payload);
    },
  },
  getters: {
    getPlList: state => {
      return state.plList;
    },
    getPlListByName: state => selectName => {
      return state.plList.filter(plList => plList.name === selectName);
    },
  },
  actions: {
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
      return PlAPI.updatePl(payload).then((res) => {
        commit('UPDATE_PL', res);
      });
    },
    addPL({ commit }, payload) {
      return PlAPI.addPl(payload).then((res) => {
        commit('ADD_PL', res);
      });
    },
  },
};
export default plStore;
