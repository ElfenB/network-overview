<template>
  <div>
    <header>
      <h1>Network overview</h1>
    </header>
    <div id="content-block">
      <ListenBlock :data="dashboard_devices">Dashboards</ListenBlock>
      <ListenBlock :data="system_devices">Systeme</ListenBlock>
      <ListenBlock :data="tasmota_devices">Tasmota Geräte</ListenBlock>
      <ListenBlock :data="mongoose_devices">Mongoose Geräte</ListenBlock>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import _ from "lodash"

// Data config files
import dashboards from "../../data/dashboards.json"
import ListenBlock from "../components/ListenBlock.vue";
import systems from "../../data/systems.json"
import tasmota from "../../data/tasmota.json"
import mongoose from "../../data/mongoose.json"

const dashboard_devices = ref(_.sortBy(dashboards, "name", "description"))
const system_devices = ref(_.sortBy(systems, "name", "description"))
const tasmota_devices = ref(_.sortBy(tasmota, "name", "description"))
const mongoose_devices = ref(_.sortBy(mongoose, "name", "description"))

// Sort alphabetical
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