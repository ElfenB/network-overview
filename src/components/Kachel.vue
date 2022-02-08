<template>
  <div id="body">
    <h2>{{ data.name }}</h2>
    <h3>{{ data.beschreibung }}</h3>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})

</script>

<style scoped>
#body {
  background-color: gray;
}
</style>