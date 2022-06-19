<template>
  <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div>
      <slot name="reference"></slot>
    </div>
    <transition name="slide">
      <div
        v-show="isViable"
        class="absolute p-1 z-20 bg-white border rounded-md"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isViable = ref(false)

const onMouseEnter = () => {
  isViable.value = true
}
const onMouseLeave = () => {
  isViable.value = false
}
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
