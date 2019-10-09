import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config/index'
import mutations from './mutations'
import actions from './actions'
import state from './state'
import getters from './getters'
import user from './module/user'
Vue.use(Vuex)
console.log(config.ok)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  }
})
