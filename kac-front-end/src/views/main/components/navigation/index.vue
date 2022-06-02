<template>
  <MobileNavigationVue v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import MobileNavigationVue from './mobile/index.vue'
import PcNavigation from './pc/index.vue'
</script>

<style lang="scss" scoped></style>
