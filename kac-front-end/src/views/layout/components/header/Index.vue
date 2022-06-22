<template>
  <div
    class="w-full bg-white dark:bg-zinc-800 border-b border-b-zinc-200 px-2 py-1"
  >
    <div class="flex items-center">
      <img
        class="h-4 cursor-pointer mr-2"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        alt="Logo"
        @click="onToHome"
      />
      <HeaderSearch class="mr-1"></HeaderSearch>
      <HeaderThemeVue class="mr-1"></HeaderThemeVue>
      <HeaderMyVue></HeaderMyVue>
    </div>
  </div>
</template>

<script setup>
import HeaderSearch from './header-search/index.vue'
import HeaderThemeVue from './header-search/HeaderTheme.vue'
import HeaderMyVue from './header-search/HeaderMy.vue'
import { useRouter } from 'vue-router'

const onToHome = () => {
  const router = useRouter()
  router.push('/')
}
</script>

<style lang="scss" scoped></style>
