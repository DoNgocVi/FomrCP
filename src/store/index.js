import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      data: {},
      isAgree: false,
      step: 1
    };
  },

  mutations: {
    setData(state, information) {
      state.data = { ...state.data, ...information };
    },
    checkAgree(state, payload) {
      state.isAgree = payload.isCheckAgree;
      state.step = payload.step
    },
  },

  actions: {
    setInfomation({ commit }, payload) {
      commit("setData", payload);
    },
    setCheckAgree({ commit }, payload) {
      commit("checkAgree", payload);
    },
  },
});
