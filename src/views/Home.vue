<template>
  <div>
    <h1>Network overview</h1>
    <KachelBlock :data="kacheln" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import KachelBlock from '../components/KachelBlock.vue';
import { data } from "../../data/sample.js"

const kacheln = ref({})

kacheln.value = data
</script>

<style scoped>
h1 {
  text-align: left;
  margin: 0;
}
</style>