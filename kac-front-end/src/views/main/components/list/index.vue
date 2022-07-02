<template>
  <div>
    <ItemVue v-for="item in pexelsList" :key="item.id" :data="item"> </ItemVue>
  </div>
</template>

<script setup>
import { getPexelsList } from '@/api/pexels'
import ItemVue from './Item.vue'
import { ref } from 'vue'
const query = {
  page: 1,
  size: 20
}

const pexelsList = ref([])

const getPexelsData = async () => {
  const ret = await getPexelsList(query)
  pexelsList.value = ret.list
}

getPexelsData()
</script>

<style lang="scss" scoped></style>
