<template>
  <a :href="data.url" id="link" target="_blank">
    <div id="body">
      <h2>{{ data.name }}</h2>
      <h3>{{ data.beschreibung }}</h3>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>