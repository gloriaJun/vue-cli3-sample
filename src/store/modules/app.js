export default {
  state: {
    sideDrawer: true,
    sideDrawerMini: false,
  },
  getters: {
    getSideDrawer(state) {
      return state.sideDrawer;
    },
    getSideDrawerMini(state) {
      return state.sideDrawerMini;
    },
  },
  mutations: {
    SET_SIDE_DRAWER(state, payload) {
      state.sideDrawer = payload;
    },
    SET_SIDE_DRAWER_MINI(state, payload) {
      state.sideDrawerMini = payload;
    },
  },
  actions: {
  },
};
