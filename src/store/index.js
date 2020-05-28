import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "",
    userAge: ""
  },
  mutations: {
    UPDATE_USER_DATA(state, payload) {
      const { userName, userAge } = payload.userDetails;
      state.userAge = userAge;
      state.userName = userName;
    }
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
