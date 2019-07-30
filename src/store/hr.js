import * as HrAPI from '../services/hrSerive';
const hrStore = {
  namespaced: true,
  state: {
    hrList: [],
    currentHrpage: '',
    hrPageSize: '',
    totalHrPageSize: '',
  },
  mutations: {
    GET_HR_LIST: (state, payload) => {
      state.hrList = payload;
    },
    DELETE_HR: (state, payload) => {
      state.hrList.forEach(function(item, index) {
        if (item.id === payload) {
          state.hrList.splice(index, 1);
        }
      });
    },
    UPDATE_HR(state, payload) {
      state.hrList.forEach(function(item, index) {
        if (item.id === payload.id) {
          state.hrList.splice(index, 1, payload);
        }
      });
    },
  },
  getters: {
    getHrList: state => {
      return state.hrList;
    },
    getHrPageSize: state => {
      return state.hrPageSize;
    },
    getTotalHrPageSize: state => {
      return state.totalPageSize;
    },
  },
  actions: {
    getHrList({ commit }, payload) {
      if (!payload) payload = state.currentHrpage;
      return HrAPI.fetchHrListByPage(payload).then(res => {
        commit('GET_HR_LIST', res);
      });
    },
    delete({ commit }, payload) {
      return HrAPI.deleteHr(payload).then(() => {
        commit('DELETE_HR');
      });
    },
    update({ commit }, payload) {
      return HrAPI.updateHr(payload).then(res => {
        commit('UPDATE_HR', res);
      });
    },
    addHr({ dispatch }, payload) {
      return HrAPI.addHr(payload).then(() => {
        return dispatch('getHrList');
      });
    },
  },
};
export default hrStore;
