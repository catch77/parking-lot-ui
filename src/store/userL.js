import * as UlAPI from '../services/userListService';

const ulStore = {
  state: {
    userList: [],
    getPageSize: 0,
    customCount: 0,
    currentUserpage: 1
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
    getPageSize: state => {
      return state.getPageSize
    },
    getUlList: state => {
      return state.userList;
    },
    getCurrentUserPage: state => {
      return state.currentUserpage;
    },
  },
  actions: {
    fetchAllUlBypage({
      commit,
      state
    }, payload) {
      if(!payload) payload = state.currentpage
      return UlAPI.fetchUlBypage(payload).then(res => {
          console.log(res)
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
