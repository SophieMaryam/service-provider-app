import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "",
    userAge: "",
    skills: {},
    displayClients: false,
    image: "",
  },
  mutations: {
    UPDATE_USER_DATA(state, payload) {
      const { userName, userAge } = payload.userDetails;
      state.userAge = userAge;
      state.userName = userName;
      state.displayClients = true;
    },
    UPDATE_USER_SKILLS(state, payload) {
      state.skills = payload;
    },
    UPLOAD_IMAGE(state, payload) {
      state.image = payload;
    }
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    })
  ]
});
