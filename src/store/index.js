import { createStore } from 'vuex'

const store = createStore({
  state:{
    token : localStorage.getItem('token'),
  },
  mutations: {},
  actions: {},
  modules: {}
})

export default store
