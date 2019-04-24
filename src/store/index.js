import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: state,
  mutations: mutations
})

export default store
