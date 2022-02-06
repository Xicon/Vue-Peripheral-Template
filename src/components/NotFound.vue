<script setup lang="ts">
import notfound from '/images/notFound.svg'
</script>

<template>
  <h1>NotFound</h1>

  <div class="container">
    <img :src="notfound" alt="NotFound" />
  </div>

</template>

<style scoped lang="scss">
h1 {
  text-align: center;
}

.container {
  width: 100vw;
  height: 90vh;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>