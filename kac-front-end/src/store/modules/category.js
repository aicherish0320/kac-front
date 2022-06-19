import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    categories: [ALL_CATEGORY_ITEM]
  }),
  mutations: {
    setCategories(state, newCategories) {
      state.categories = [ALL_CATEGORY_ITEM, ...newCategories]
    }
  },
  actions: {
    async useCategoryData({ commit }) {
      const { categories } = await getCategory()
      commit('setCategories', categories)
    }
  }
}
