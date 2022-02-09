<template>
  <div id="outer">
    <h2>
      <slot id="content"></slot>
    </h2>
  </div>
</template>

<script setup>

</script>

<style scoped>
#outer {
  text-align: left;
  font-family: Comfortaa;
  font-variation-settings: "wght" 200;
}
h2 {
  margin: 1em 0 0.4em 0;
}
</style>