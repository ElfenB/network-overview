<template>
  <a :href="data.url" id="link" target="_blank">
    <div id="body">
      <h2>{{ data.name }}</h2>
      <h3>{{ data.beschreibung }}</h3>
      <img v-if="data.image" :src="data.image" :alt="data.name">
    </div>
  </a>
</template>

<script setup>
defineProps({
  data: Object
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
h2 {
  color: var(--primary-font-color);
}
h3 {
  color: var(--secondary-font-color);
}
</style>