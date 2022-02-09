<template>
  <div>
    <header>
      <h1>Network overview</h1>
    </header>
    <div id="content-block">
      <KachelBlock :data="kacheln" />
    </div>
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
  border-bottom: 1px solid var(--header-contrast);
}
h1 {
  text-align: left;
  margin: 0;
}
#content-block {
  margin: 0.5em;
}
</style>