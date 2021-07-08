import { createStore } from "vuex";

export default createStore({
  state: {
    isConnected: true,
  },
  mutations: {
    setIsConnected(state, newVar) {
      state.isConnected = newVar;
    },
  },
  actions: {},
  modules: {},
});
