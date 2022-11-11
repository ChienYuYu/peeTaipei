import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    inputDistRoad: '',
    toiletData: [],
    eachPageData: [],
    totalPageNum: 0,
    currentPageNum: 0,
  },
  getters: {
    filterData(state) {
      return state.toiletData.filter((item) => item.公廁地址.match(state.inputDistRoad));
    },
    showData(state) {
      return state.eachPageData[state.currentPageNum];
    },
  },
  mutations: {
    gettoilet(state, data) {
      state.toiletData = data;
    },
    // countPage(state) { // 01
    //   state.eachPageData = [];
    //   state.totalPageNum = Math.ceil(state.toiletData.length / 30);
    //   for (let i = 0; i < state.totalPageNum; i += 1) {
    //     const tempArr = state.toiletData.slice(i * 30, i * 30 + 30);
    //     state.eachPageData.push(tempArr);
    //   }
    // },
    countPage(state) { // 02
      state.eachPageData = []; // 先清空 不然會一直累積
      state.totalPageNum = Math.ceil(this.getters.filterData.length / 30);
      for (let i = 0; i < state.totalPageNum; i += 1) {
        const tempArr = this.getters.filterData.slice(i * 30, i * 30 + 30);
        state.eachPageData.push(tempArr);
      }
      state.currentPageNum = 0; // 當前頁面跳回第一頁
    },
    switchPage(state, pn) {
      if (pn === 'previous' && state.currentPageNum !== 0) {
        state.currentPageNum -= 1;
      }
      if (pn === 'next' && state.currentPageNum + 1 !== state.totalPageNum) {
        state.currentPageNum += 1;
      }
    },
    inputDistRoad(state, input) {
      state.inputDistRoad = input;
    },
  },
  actions: {
    getApi(context) {
      const url = 'data/64e392a0fcb63fa9fb1f596bcb86e96b_export.json';
      axios.get(url)
        .then((res) => {
          console.log(res);
          context.commit('gettoilet', res.data);
          context.commit('countPage');
        });
    },
  },
  modules: {
  },
});
