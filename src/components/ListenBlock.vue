<template>
  <div>
    <ListHeading>
      <slot></slot>
    </ListHeading>
    <KachelBlock :data="data" :type="type" />
  </div>
</template>

<script setup>
import KachelBlock from '../components/KachelBlock.vue';
import ListHeading from "../components/ListHeading.vue"

defineProps({
  data: Object,
  type: String
})

</script>

<style scoped>
</style>