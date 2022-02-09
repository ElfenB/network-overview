<template>
  <a :href="data.url" id="link" target="_blank">
    <div id="body">
      <h2>{{ data.name }}</h2>
      <p v-if="data.room">{{ data.room }}</p>
      <h3>{{ data.description }}</h3>
      <p v-if="details">{{ details.version }}{{ details.sensors ? "s" : "" }}</p>
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

const details = ref()

async function getDetails(url, type) {
  if (type == "tasmota") {
    return await getDetailsTasmota(url)
  } else if (type == "mongoose") {
    return await getDetailsMongoose(url)
  }
  return null
}

async function getDetailsMongoose(url) {
  let only_ip = url.substring(url.indexOf("http://") + 7)

  const res = await axios.get("http://pi4.fritz.box:1880/mongoose_details/" + only_ip)
  return res.data
}

async function getDetailsTasmota(url) {
  let only_ip = url.substring(url.indexOf("http://") + 7)

  const res = await axios.get("http://pi4.fritz.box:1880/tasmota_details/" + only_ip)
  return res.data
}

onMounted(async () => {
  details.value = await getDetails(props.data.url, props.type)
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