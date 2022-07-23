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
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { getAllImg, getImgElements, onCompleteImgs } from './utils'

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
const containerWidth = ref(0)
const containerLeft = ref(0)
const useContainerWidth = () => {
  const { paddingLeft, paddingRight } = getComputedStyle(
    containerTarget.value,
    null
  )
  containerLeft.value = parseFloat(paddingLeft)

  containerWidth.value =
    containerTarget.value.offsetWidth -
    parseFloat(paddingLeft) -
    parseFloat(paddingRight)
}

const columnWidth = ref(0)
const columnSpacingTotal = computed(() => {
  return (props.column - 1) * props.columnSpacing
})
const useColumnWidth = () => {
  useContainerWidth()
  columnWidth.value =
    (containerWidth.value - columnSpacingTotal.value) / props.column
}

onMounted(() => {
  useColumnWidth()
})

let itemHeights = []
// 监听图片加载完成（需要图片预加载）
const waitImgComplete = () => {
  itemHeights = []
  let itemElements = [...document.getElementsByClassName('m-waterfall-item')]
  const imgElements = getImgElements(itemElements)
  const allImgs = getAllImg(imgElements)

  onCompleteImgs(allImgs).then(() => {
    itemElements.forEach((el) => {
      itemHeights.push(el.offsetHeight)
    })
    useItemLocation()
  })
}
const useItemHeight = () => {
  itemHeights = []
  let itemElements = [...document.getElementsByClassName('m-waterfall-item')]
  itemElements.forEach((el) => {
    itemHeights.push(el.offsetHeight)
  })
  useItemLocation()
}
const useItemLocation = () => {
  console.log('itemHeights >>> ', itemHeights)
}

watch(
  () => props.data,
  (newVal) => {
    nextTick(() => {
      if (props.picturePreReading) {
        waitImgComplete()
      } else {
        useItemHeight()
      }
    })
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style lang="scss" scoped></style>
