import * as PbAPI from '../services/pb';

const pbStore = {
  state: {
    pbList: [],
    getPageSize: 0,
    totalCount: 0,
    currentpage: 1
  },
  mutations: {
    FETCH_PB_BY_PAGE(state, payload) {
      state.currentpage = payload.number + 1
      state.pbList = payload.content;
      state.totalCount = payload.totalElements
      state.getPageSize = payload.pageable.pageSize
    },
    SET_PB_LIST(state, payload) {
      state.pbList = payload;
    },
    DELETE_PB(state, payload) {
      state.pbList.forEach(function (item, index) {
        if (item.id === payload) {
          state.pbList.splice(index, 1);
        }
      });
    },
    UPDATE_PB(state, payload) {
      state.pbList.forEach(function (item, index) {
        if (item.id === payload.id) {
          state.pbList.splice(index, 1, payload);
        }
      });
    },
  },
  getters: {
    getTotalCount: state => {
      return state.totalCount
    },
    getgetPageSize: state => {
      return state.getPageSize
    },
    getPbList: state => {
      return state.pbList;
    },
    getCurrentPage: state => {
      return state.getCurrentPage;
    },
  },
  actions: {
    fetchAllPbBypage({
      commit,
      state
    }, payload) {
      if(!payload) payload = state.currentpage
      return PbAPI.fetchPbBypage(payload).then(res => {
        commit('FETCH_PB_BY_PAGE', res);
      })
    },
    fetchAllPb({
      commit
    }) {
      return PbAPI.fetchAllPb().then(res => {
        commit('SET_PB_LIST', res);
      });
    },
    deletePb({
      commit
    }, payload) {
      return PbAPI.deletePb(payload).then(() => {
        commit('DELETE_PB', payload);
      });
    },
    updatePB({
      commit
    }, payload) {
      return PbAPI.updatePb(payload).then(res => {
        commit('UPDATE_PB', res);
      });
    },
    addPB({
      dispatch,
    }, payload) {
      return PbAPI.addPb(payload).then(() => {
        return dispatch('fetchAllPbBypage')
      });
    },
  },
};
export default pbStore;
