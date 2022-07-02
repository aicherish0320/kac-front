<template>
  <div class="h-full overflow-auto bg-white dark:bg-zinc-800 duration-500">
    <NavigationVue />
    <div class="max-w-screen-xl mx-auto relative m-1 xl-mt-4">
      <ListVue></ListVue>
    </div>
  </div>
</template>

<script setup>
import NavigationVue from './components/navigation/index.vue'
import ListVue from './components/list/index.vue'
</script>

<style lang="scss" scoped></style>
