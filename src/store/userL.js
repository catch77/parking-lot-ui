import * as UlAPI from '../services/userListService';

const ulStore = {
  state: {
    userList: [],
    getPageSize: 0,
    customCount: 0,
    currentpage: 1
  },
  mutations: {
    FETCH_UL_BY_PAGE(state, payload) {
      state.currentpage = payload.number + 1
      state.userList = payload.content;
      state.totalCount = payload.totalElements
      state.getPageSize = payload.pageable.pageSize
    },
    SET_UL_LIST(state, payload) {
      state.userList = payload;
    },
  },
  getters: {
    getcustomCount: state => {
      return state.customCount
    },
    getgetPageSize: state => {
      return state.getPageSize
    },
    getUlList: state => {
      return state.userList;
    },
    getCurrentPage: state => {
      return state.getCurrentPage;
    },
  },
  actions: {
    fetchAllUlBypage({
      commit,
      state
    }, payload) {
      if(!payload) payload = state.currentpage
      return UlAPI.fetchAllUlBypage(payload).then(res => {
        commit('FETCH_UL_BY_PAGE', res);
      })
    },
    fetchAllUl({
      commit
    }) {
      return UlAPI.fetchAllUl().then(res => {
        commit('SET_UL_LIST', res);
      });
    },
  },
};
export default ulStore;
