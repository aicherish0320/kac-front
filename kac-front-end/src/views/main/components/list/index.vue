<template>
  <div>
    <Waterfall
      :data="pexelsList"
      nodeKey="id"
      :column="5"
      :picturePreReading="false"
    >
      <template v-slot="{ item }">
        <ItemVue :data="item"> </ItemVue>
      </template>
    </Waterfall>
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
