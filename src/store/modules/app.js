export default {
  state: {
    sidebarDrawer: true,
  },
  getters: {
    getSidebarDrawer(state) {
      return state.sidebarDrawer;
    },
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.sidebarDrawer = payload;
    },
  },
  actions: {
  },
};
