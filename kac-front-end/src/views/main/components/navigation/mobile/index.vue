<template>
  <div class="bg-white dark:bg-zinc-900 sticky top-0 left-0 z- duration-500">
    <ul
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
      ref="ulTarget"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 dark:bg-zinc-800 rounded-lg duration-200"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 z-20 shadow-l-white dark:shadow-l-zinc"
        @click="onShowPopup"
      >
        <SvgIcon class="w-1.5 h-1.5" name="hamburger"></SvgIcon>
      </li>
      <li
        v-for="(item, index) in $store.getters.categories"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{ 'text-zinc-100': currentCategoryIndex === index }"
        :ref="setItemRef"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <Popup v-model="isVisible">
    <Menu @onItemClick="onItemClick"></Menu>
  </Popup>
</template>

<script setup>
import { useScroll } from '@vueuse/core'
import { onBeforeUpdate, ref, watch } from 'vue'
import Menu from '@/views/main/components/menu/index.vue'

const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '50px'
})

// 选中 item 下表
const currentCategoryIndex = ref(0)
// 获取所有的 item 元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
// 数据改变之后，DOM 变化前
onBeforeUpdate(() => {
  itemRefs = []
})
// 获取 ul 元素
const ulTarget = ref(null)
// useScroll 获取响应式的 scroll 滚动的距离
const { x: ulScrollLeft } = useScroll(ulTarget)

// watch
watch(currentCategoryIndex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect()

  sliderStyle.value = {
    // 划款的位置 = ul 横向滚动的位置 + 当前元素 left - ul 的 padding
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  }
})

// item 点击事件
const onItemClick = (index) => {
  currentCategoryIndex.value = index
  isVisible.value = false
}
// 控制 popup 展示
const isVisible = ref(false)
const onShowPopup = () => {
  isVisible.value = true
}
</script>

<style lang="scss" scoped></style>
