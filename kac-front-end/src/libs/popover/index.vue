<template>
  <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div ref="referenceTarget">
      <slot name="reference"></slot>
    </div>
    <transition name="slide">
      <div
        v-show="isVisible"
        ref="contentTarget"
        class="absolute p-1 z-20 dark:bg-zinc-900 bg-white border dark:border-zinc-700 rounded-md"
        :style="contentStyle"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
// 左上 右上 左下 右下
const PROP_TOP_LEFT = 'top-left'
const PROP_TOP_RIGHT = 'top-right'
const PROP_BOTTOM_LEFT = 'bottom-left'
const PROP_BOTTOM_RIGHT = 'bottom-right'

const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT
]
</script>

<script setup>
/**
 * 1. 指定所有可选位置的常量，并生成 enum
 * 2. 通过 prop 控制指定位置
 * 3. 获取元素的 DOM，创建读取元素尺寸的方法
 * 4. 生成气泡的样式对象，用来控制每个位置对应的样式
 * 5. 根据 prop，计算样式对象
 */

import { nextTick, ref, watch } from 'vue'

const props = defineProps({
  placement: {
    type: String,
    default: PROP_BOTTOM_LEFT,
    validator(val) {
      const result = placementEnum.includes(val)
      if (!result) {
        throw new Error(
          `你的 placement 必须是 ${placementEnum.join('、')}中的一个`
        )
      }
      return result
    }
  }
})

const isVisible = ref(false)

const onMouseEnter = () => {
  isVisible.value = true
}
const onMouseLeave = () => {
  isVisible.value = false
}

const referenceTarget = ref(null)
const contentTarget = ref(null)

const useElementSize = (target) => {
  if (!target) {
    return {}
  }

  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
}

const contentStyle = ref({
  top: 0,
  left: 0
})

watch(isVisible, async (val) => {
  if (!val) return
  await nextTick()
  switch (props.placement) {
    case PROP_TOP_LEFT:
      contentStyle.value.top = 0
      contentStyle.value.left =
        -useElementSize(contentTarget.value).width + 'px'
      break
    case PROP_TOP_RIGHT:
      contentStyle.value.top = 0
      referenceTarget.value.left =
        useElementSize(referenceTarget.value).width + 'px'
      break
    case PROP_BOTTOM_LEFT:
      contentStyle.value.top =
        useElementSize(referenceTarget.value).height + 'px'
      contentStyle.value.left =
        -useElementSize(contentTarget.value).width + 'px'
      break
    case PROP_BOTTOM_RIGHT:
      contentStyle.value.top =
        useElementSize(referenceTarget.value).height + 'px'
      contentStyle.value.left =
        useElementSize(referenceTarget.value).width + 'px'
      break
    default:
      break
  }
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-enter-leave {
  opacity: 0;
  transform: translateX(20px);
}
</style>
