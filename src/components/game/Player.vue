<template>
  <div class="absolute" :style="position">
    <img :src="playerImg" />
  </div>
</template>

<script setup lang="ts">
import playerImg from "@/assets/keeper.png";
import { usePlayerStore, STEP } from "@/store/player";
import { useMove } from './player';

import { computed } from "vue";

const {position}=usePosition();
useMove();
function usePosition() {
  const { player } = usePlayerStore();
  let position = computed(() => {
    return {
      left: player.x * STEP + "px",
      top: player.y * STEP + "px",
    };
  });
  return {
    position,
  };
}

</script>

<style scoped></style>
