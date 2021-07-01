import { createStore } from "vuex";

export default createStore({
  state: {
    isConnected: false,
  },
  mutations: {
    setIsConnected(state, newVar){
      state.isConnected = newVar;
    }
  },
  actions: {},
  modules: {},
});
