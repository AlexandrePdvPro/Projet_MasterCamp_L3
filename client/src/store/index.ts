import { createStore } from "vuex";

export default createStore({
  state: {
    isConnected: false,
    user:{
      admin: false,
      user_id: '',
      identité: ''
    }
  },
  mutations: {
    setIsConnected(state, newVar) {
      state.isConnected = newVar;
    },
    setUser(state, user){
      state.user.admin = user.admin;
      state.user.user_id = user.user_id;
      state.user.identité = user.identité;
    }
  },
  actions: {},
  modules: {},
});
