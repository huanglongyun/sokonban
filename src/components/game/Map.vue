<template>
  <div>
    <div v-for="(row, i) in map" class="flex">
      <div v-for="(col, j) in row">
        <img src="../../assets/wall.png" v-if="col === MapTile.WALL" />
        <img src="../../assets/floor.png" v-if="col === MapTile.FLOOR" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mapStore, MapTile } from "@/store/game";
const { map } = mapStore();
</script>

<style scoped></style>
