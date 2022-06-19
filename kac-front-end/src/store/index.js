import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import category from './modules/category'

const store = createStore({
  getters,
  modules: {
    category
  },
  plugins: [
    createPersistedState({
      key: 'kac-front-end',
      paths: ['category']
    })
  ]
})

export default store
