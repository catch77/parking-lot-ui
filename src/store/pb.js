const testData = [
  {
    id: '1',
    name: '小一',
    gender: '男',
    address: '广东省珠海市',
    joinTime: '2019-08-07',
  },
  {
    id: '2',
    name: '小二',
    gender: '男',
    address: '广东省珠海市',
    joinTime: '2019-02-07',
  },
  {
    id: '3',
    name: '小三',
    gender: '女',
    address: '广东省珠海市',
    joinTime: '2019-01-07',
  },
  {
    id: '4',
    name: '小四',
    gender: '女',
    address: '广东省珠海市',
    joinTime: '2019-03-07',
  },
  {
    id: '5',
    name: '小五',
    gender: '女',
    address: '广东省珠海市',
    joinTime: '2019-04-07',
  },
  {
    id: '6',
    name: '小六',
    gender: '女',
    address: '广东省珠海市',
    joinTime: '2019-05-07',
  },
];

const pbStore = {
  state: {
    pbList: [],
  },
  mutations: {
    getBackPbList(state) {
      ///getMapping
      state.pbList = testData;
    },
    deletePb(state, payload) {
      //deleteMapping
      state.pbList.forEach(function(item, index) {
        if (item.id === payload) {
          state.pbList.splice(index, 1);
        }
      });
    },
    updatePB(state, payload) {
      //putMapping
      state.pbList.forEach(function(item, index) {
        if (item.id === payload.id) {
          state.pbList.splice(index, 1, payload);
        }
      });
    },
    addPB(state, payload) {
      //postMapping
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
    getBackPbList({ commit }) {
      commit('getBackPbList');
    },
    deletePb({ commit }, payload) {
      commit('deletePb', payload);
    },
    updatePB({ commit }, payload) {
      commit('updatePB', payload);
    },
    addPB({ commit }, payload) {
      commit('addPB', payload);
    },
  },
};
export default pbStore;
