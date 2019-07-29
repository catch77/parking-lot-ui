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
      PlAPI.fetchAllPl().then(res => {
        commit('SET_PL_LIST', res);
      });
    },
    deletePl({ commit }, payload) {
      PlAPI.deletePl(payload).then(() => {
        commit('DELETE_PL', payload);
      });
    },
    updatePL({ commit }, payload) {
      PlAPI.updatePl(payload).then((res) => {
        commit('UPDATE_PL', res);
      });
    },
    addPL({ commit }, payload) {
      PlAPI.addPl(payload).then((res) => {
        commit('ADD_PL', res);
      });
    },
  },
};
export default plStore;
