import * as HrAPI from '../services/hrSerive'
const hrStore = {
  namespaced: true,
  state: {
    hrList: [],
    currentHrpage: '',
    hrPageSize: '',
    totalHrPageSize: ''
  },
  mutations: {
    GET_HR_LIST: (store, payload) => {
      store.hrList = payload
    }
  },
  getters: {
    getHrList: state => {
      return state.hrList
    },
    getHrPageSize: state => {
      return state.hrPageSize
    },
    getTotalHrPageSize: state => {
      return state.totalPageSize
    },
   
  },
  actions: {
    getHrList({
      commit
    }, payload) {
      return HrAPI.fetchHrListByPage(payload).then((res) => {
        commit('GET_HR_LIST', res)
      })

    }
  }
};
export default pbStore;
