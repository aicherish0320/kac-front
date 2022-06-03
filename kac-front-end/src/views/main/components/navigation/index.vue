<template>
  <MobileNavigationVue v-if="isMobileTerminal" :data="categoryData" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import MobileNavigationVue from './mobile/index.vue'
import PcNavigation from './pc/index.vue'

import { getCategory } from '@/api/category'
import { ref } from '@vue/reactivity'

const categoryData = ref([])

const getCategoryData = async () => {
  const { categories } = await getCategory()
  categoryData.value = categories
}
getCategoryData()
</script>

<style lang="scss" scoped></style>
