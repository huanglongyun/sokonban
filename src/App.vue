<script setup lang="ts">
import { mapStore } from '../src/store/game';
const {map}=mapStore()
</script>

<template>
  <div class="bg-red-500">
  sokonban {{ map }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
