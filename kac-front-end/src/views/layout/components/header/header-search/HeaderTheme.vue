<template>
  <Popover>
    <template #reference>
      <SvgIcon
        name="theme-light"
        class="w-4 h-4 p-1 cursor-pointer duration-200 outline-none hover:bg-zinc-100/60"
        fillClass=" fill-zinc-900"
      ></SvgIcon>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
        v-for="item in themeArr"
        :key="item.id"
      >
        <SvgIcon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900"
        ></SvgIcon>
        <span class="text-zinc-900 text-sm">{{ item.name }}</span>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants/index.js'
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
</script>

<style lang="scss" scoped></style>
