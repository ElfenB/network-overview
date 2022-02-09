<template>
  <div id="raster">
    <Kachel v-for="kachel in data" class="kacheln" :data="kachel" />
  </div>
</template>

<script setup>
import Kachel from './Kachel.vue';

defineProps({
  data: Object
})
</script>

<style scoped>
#raster {
  display: flex;
  flex-wrap: wrap;
}
.kacheln {
  flex: 0 0 auto;
  width: 10em;
  height: 10em;
  /* border: 1px solid black; */
  box-shadow: 2px 2px 6px 1px var(--shadow-color);
  margin: .5em;
  border-radius: 1.8em;
  background-color: var(--kacheln-farbe);
}
.kacheln:hover {
  transform: scale(1.1);
  transition: transform 200ms;
}
</style>