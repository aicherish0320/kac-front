<template>
  <div
    class="relative"
    ref="containerTarget"
    :style="{ height: containerHeight + 'px' }"
  >
    <template v-if="columnWidth && data.length">
      <div
        v-for="(item, index) in data"
        :key="nodeKey ? item[nodeKey] : index"
        class="m-waterfall-item absolute duration-300"
        :style="{
          width: columnWidth + 'px',
          left: item._style?.left + 'px',
          top: item._style?.right + 'px'
        }"
      >
        <slot :item="item" :width="columnWidth" :index="index"></slot>
      </div>
    </template>
    <div v-else>加载中...</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  nodeKey: {
    type: String
  },
  column: {
    type: Number,
    default: 2
  },
  columnSpacing: {
    default: 20,
    type: Number
  },
  rowSpacing: {
    default: 20,
    type: Number
  },
  picturePreReading: {
    type: Boolean,
    default: true
  }
})

const containerHeight = ref(0)
const columnHeightObj = ref({})
const useColumnHeightObj = () => {
  columnHeightObj.value = {}
  for (let i = 0; i < props.column; i++) {
    columnHeightObj.value[i] = 0
  }
}

const containerTarget = ref(null)
</script>

<style lang="scss" scoped></style>
