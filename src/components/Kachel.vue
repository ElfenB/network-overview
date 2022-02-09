<template>
  <a :href="data.url" id="link" target="_blank">
    <div id="body">
      <h2>{{ data.name }}</h2>
      <p v-if="data.room">{{ data.room }}</p>
      <h3>{{ data.description }}</h3>
      <p v-if="version != ''">{{ version }}</p>
    </div>
  </a>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios"

const props = defineProps({
  data: Object,
  type: String
})

const version = ref("")

async function getVersion(url, type) {
  if (type == "tasmota") {
    return await getVersionTasmota(url)
  }
  return null
}

async function getVersionTasmota(url) {
  let only_ip = url.substring(url.indexOf("http://") + 7)

  const res = await axios.get("http://pi4.fritz.box:1880/tasmota_version/" + only_ip)
  console.log(res.data.version);
  return String(res.data.version)
}

onMounted(async () => {
  version.value = await getVersion(props.data.url, props.type)
})
</script>

<style scoped>
#link {
  text-decoration: none;
  font-size: small;
}
#body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2,
h3 {
  margin: 0;
}
h2 {
  color: var(--primary-font-color);
  font-size: medium;
}
h3 {
  color: var(--secondary-font-color);
}
p {
  margin: 0;
}
</style>