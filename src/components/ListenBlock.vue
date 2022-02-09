<template>
  <div>
    <ListHeading>
      <slot></slot>
    </ListHeading>
    <KachelBlock :data="data" />
  </div>
</template>

<script setup>
import KachelBlock from '../components/KachelBlock.vue';
import ListHeading from "../components/ListHeading.vue"

defineProps({
  data: Object
})

</script>

<style scoped>
</style>