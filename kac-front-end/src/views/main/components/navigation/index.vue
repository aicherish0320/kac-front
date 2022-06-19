<template>
  <MobileNavigationVue v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import MobileNavigationVue from './mobile/index.vue'
import PcNavigation from './pc/index.vue'
import { useStore } from 'vuex'

const store = useStore()
store.dispatch('category/useCategoryData')

// const getCategoryData = async () => {
//   const { categories } = await getCategory()
//   categoryData.value = categories
//   categoryData.value.unshift(ALL_CATEGORY_ITEM)
// }
// getCategoryData()
</script>

<style lang="scss" scoped></style>
