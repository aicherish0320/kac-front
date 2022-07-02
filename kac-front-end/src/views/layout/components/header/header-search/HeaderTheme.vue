<template>
  <Popover>
    <template #reference>
      <SvgIcon
        :name="svgIconName"
        class="w-4 h-4 p-1 cursor-pointer duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
        fillClass="fill-zinc-900 dark:fill-zinc-300"
      ></SvgIcon>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:bg-zinc-800"
        v-for="item in themeArr"
        :key="item.id"
        @click="onItemClick(item)"
      >
        <SvgIcon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></SvgIcon>
        <span class="text-zinc-900 text-sm dark:text-zinc-300">{{
          item.name
        }}</span>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants/index.js'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const themeArr = [
  {
    idL: '0',
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '极简白'
  },
  {
    idL: '1',
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '极夜黑'
  },
  {
    idL: '2',
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统'
  }
]

/*
  1. 监听主题的切换
  2. 根据行为保存当前需要展示的主题到 vuex 中
  3. 根据 vuex 中保存的当前主题，展示 header-theme 下的显示图标
  4. 根据 vuex 中保存的当前主题，修改 html 的 class
*/

const onItemClick = (themeItem) => {
  store.commit('theme/changeThemeType', themeItem.type)
}

const svgIconName = computed(() => {
  const findTheme = themeArr.find(
    (item) => item.type === store.getters.themeType
  )
  return findTheme?.icon
})
</script>

<style lang="scss" scoped></style>
