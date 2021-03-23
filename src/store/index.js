import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Импортируем модуль

import module from './module'
import notify from './notify'
import loading from './loading'


export default new Vuex.Store({

  modules: {
    module, notify, loading  
  },

  state: {
  },
  mutations: {
  },

  actions: {
  },
 
})
