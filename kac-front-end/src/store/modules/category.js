import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM, CATEGORY_NOMAR_DATA } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    categories: CATEGORY_NOMAR_DATA
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
