<template>
  <div class="h-screen">
    <HeaderVue class="h-header"></HeaderVue>
    <MainVue class="h-main"></MainVue>
    <FloatingVue></FloatingVue>
  </div>
</template>

<script setup>
import HeaderVue from './components/header/Index.vue'
import MainVue from './components/Main.vue'
import FloatingVue from './components/Floating.vue'
</script>

<style lang="scss" scoped></style>
