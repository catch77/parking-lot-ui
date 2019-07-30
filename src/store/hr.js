import * as HrAPI from '../services/hrSerive';
const hrStore = {
  namespaced: true,
  state: {
    hrList: [],
    currentHrpage: 1,
    hrPageSize: 0,
    totalHrPageSize: 0,
  },
  mutations: {
    GET_HR_LIST: (state, payload) => {
      state.hrList = payload.content;
      state.currentHrpage=payload.number+1,
      state.hrPageSize=payload.pageable.pageSize,
      state.totalHrPageSize=payload.totalElements
      console.log(state)
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
      return state.totalHrPageSize;
    },
    getCurrentHrpage:state=>{
      return state.currentHrpage
    }
  },
  actions: {
    getHrList({ commit,state }, payload) {
      if (!payload) payload = state.currentHrpage;
      return HrAPI.fetchHrListByPage(payload).then(res => {
        commit('GET_HR_LIST', res);
      });
    },
    deleteHr({ dispatch }, payload) {
      return HrAPI.deleteHr(payload.id).then(() => {
        dispatch('getHrList',1);
      });
    },
    updateHr({ commit }, payload) {
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
