export default {
  state: {
    n2: 857
  },
  getters: {
    countNum(state, getters, rootState) {
      console.log(state);
      console.log(getters);
      console.log(rootState);
      return state.n2 * state.n2
    }
  },
  mutations: {
    addN2(state) {
      console.log(state);
      state.n2 += state.n2
    }

  },
  actions: {
    ac({state,getters,rootState}) {

    }
  }
}
