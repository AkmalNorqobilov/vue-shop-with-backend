import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseBackendUrl:'http://localhost:3000',
    token:localStorage.getItem('token')
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
