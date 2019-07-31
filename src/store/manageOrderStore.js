import * as manageOrdersAPI from '../services/manageOrdersService';

const manageOrdersStore = {
  namespaced: true,
  state: {
    orderList: [],
    currentOrdersPage: 1,
    totalOrdersCount: 0,
    currentOrdersPagesize: 0,
  },
  mutations: {
    FETCH_ORDERS_BY_PAGE: (state, payload) => {
      state.orderList = payload.content;
      state.currentOrdersPage = payload.number + 1;
      state.currentOrdersPagesize = payload.pageable.pageSize;
      state.totalOrdersCount = payload.totalElements;
    },
  },
  getters: {
    getOrderList: state => {
      return state.orderList;
    },
    getOrderPageSize: state => {
      return state.currentOrdersPagesize;
    },
    getTotalOrdersPageSize: state => {
      return state.totalOrdersCount;
    },
    getCurrentOrderPage: state => {
      return state.currentOrdersPage;
    },
  },
  actions: {
    fetchOrdersByPage({ commit, state }, payload) {
      if (!payload) payload = state.currentOrdersPage;
      return manageOrdersAPI.fetchOrdersByPage(payload).then(res => {
          console.log(res)
        commit('FETCH_ORDERS_BY_PAGE', res);
      });
    },
  },
};
export default manageOrdersStore;
