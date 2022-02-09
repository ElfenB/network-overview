<template>
  <div>
    <header>
      <h1>Network overview</h1>
    </header>
    <KachelBlock :data="kacheln" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import _ from "lodash"

import KachelBlock from '../components/KachelBlock.vue';
import { data } from "../../data/sample.js"

const kacheln = ref({})

// Sort alphabetical
kacheln.value = _.sortBy(data, "name", "beschreibung")
</script>

<style scoped>
header {
  background-color: var(--header-color);
  padding: 1em;
}
h1 {
  text-align: left;
  margin: 0;
}
</style>