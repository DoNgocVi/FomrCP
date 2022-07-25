import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      data: null,
    };
  },
  mutations: {
    setData(state, information) {
      state.data = information;
    },
  },

  actions: {
    setInfomation({ commit }, payload) {
      commit("setData", payload);
    },
  },
});
