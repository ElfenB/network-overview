<template>
  <div id="raster">
    <Kachel
      v-for="kachel in data"
      :type="type"
      class="kacheln"
      :data="kachel"
    />
  </div>
</template>

<script setup>
import Kachel from './Kachel.vue';

const props = defineProps({
  data: Object,
  type: String
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
  box-shadow: 3px 3px 7px -1px var(--shadow-color);
  margin: 0.5em;
  border-radius: 1.8em;
  background-color: var(--kacheln-farbe);
  border: 1px solid var(--kacheln-border);
  transition: transform 200ms ease-in-out;
}
.kacheln:hover {
  transform: scale(1.05);
}
</style>