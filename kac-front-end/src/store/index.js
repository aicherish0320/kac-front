import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'

const store = createStore({
  getters,
  modules: {
    category,
    theme
  },
  plugins: [
    createPersistedState({
      key: 'kac-front-end',
      paths: ['category', 'theme']
    })
  ]
})

export default store
