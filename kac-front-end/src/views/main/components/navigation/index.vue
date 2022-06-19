<template>
  <MobileNavigationVue v-if="isMobileTerminal" />
  <PcNavigation v-else />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import MobileNavigationVue from './mobile/index.vue'
import PcNavigation from './pc/index.vue'
import { useStore } from 'vuex'

const store = useStore()
store.dispatch('category/useCategoryData')
</script>

<style lang="scss" scoped></style>
