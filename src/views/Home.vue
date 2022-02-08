<template>
  <div>
    <h1>Network overview</h1>
    <div id="raster">
      <Kachel v-for="kachel in kacheln" class="kacheln" :data="kachel" />
    </div>
  </div>
</template>

<script setup>
import Kachel from '../components/Kachel.vue';
import { ref } from "vue"

import { data } from "@/../../data.js"

const kacheln = ref({})

kacheln.value = data

</script>

<style scoped>
#raster {
  display: flex;
  flex-wrap: wrap;
}
.kacheln {
  flex: 0 0 auto;
  width: 8em;
  height: 8em;
  border: 1px solid black;
}
h1 {
  text-align: left;
  margin: 0;
}
</style>