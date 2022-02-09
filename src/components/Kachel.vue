<template>
  <a :href="data.url" id="link" target="_blank">
    <div id="body">
      <h2>{{ data.name }}</h2>
      <p v-if="data.room">{{ data.room }}</p>
      <h3>{{ data.description }}</h3>
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
h2, h3 {
  margin: 0;
}
h2 {
  color: var(--primary-font-color);
}
h3 {
  color: var(--secondary-font-color);
}
p {
  margin: 0;
}
</style>