import * as PbAPI from '../services/pb';

const pbStore = {
  state: {
    pbList: [],
  },
  mutations: {
    SET_PB_LIST(state, payload) {
      state.pbList = payload;
    },
    DELETE_PB(state, payload) {
      state.pbList.forEach(function(item, index) {
        if (item.id === payload) {
          state.pbList.splice(index, 1);
        }
      });
    },
    UPDATE_PB(state, payload) {
      state.pbList.forEach(function(item, index) {
        if (item.id === payload.id) {
          state.pbList.splice(index, 1, payload);
        }
      });
    },
    ADD_PB(state, payload) {
      state.pbList.push(payload);
    },
  },
  getters: {
    getPbList: state => {
      return state.pbList;
    },
    getPbListByName: state => selectName => {
      return state.pbList.filter(pbList => pbList.name === selectName);
    },
  },
  actions: {
    fetchAllPb({ commit }) {
      PbAPI.fetchAllPb().then(res => {
        commit('SET_PB_LIST', res);
      });
    },
    deletePb({ commit }, payload) {
      PbAPI.deletePb(payload).then(() => {
        commit('DELETE_PB', payload);
      });
    },
    updatePB({ commit }, payload) {
      PbAPI.updatePb(payload).then(res => {
        commit('UPDATE_PB', res);
      });
    },
    addPB({ commit }, payload) {
      PbAPI.addPb(payload).then(res => {
        commit('ADD_PB', res);
      });
    },
  },
};
export default pbStore;
