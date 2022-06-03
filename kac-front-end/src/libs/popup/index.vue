<template>
  <div>
    <teleport to="body">
      <transition>
        <!-- 蒙版 -->
        <div
          v-if="isVisible"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
          @click="isVisible = false"
        ></div>
      </transition>
      <transition name="popup-down-up">
        <!-- 内容 -->
        <div
          v-if="modelValue"
          v-bind="$attrs"
          class="w-screen bg-white z-50 fixed bottom-0"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { useScrollLock, useVModel } from '@vueuse/core'
import { watch } from 'vue'

const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean
  }
})
defineEmits(['update:modelValue'])
// 是一个响应式数据，当 isVisible 值发生变化时，会自动触发 emit 修改 modelValue
const isVisible = useVModel(props)

// 锁定滚动
const isLocked = useScrollLock(document.body)
watch(
  isVisible,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
// 准备进入，离开完成
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.3s;
}
// 准备进入，离开完成
.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
