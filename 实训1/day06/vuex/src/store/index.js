import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    n: 1
  },
  getters: {
    mony(state) {
      return '￥' + state.n
    }
  },
  mutations: {
    jiajia(state, obj) {
      state.n += obj
      // console.log(1);
    }
  },
  actions: {
    // jiajia(state, obj) {
    //   state.n += obj
    // }
  },
  modules: {
  }
})
