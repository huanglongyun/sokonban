import { defineStore } from "pinia";
import { reactive } from "vue";

export const STEP = 32;
export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 1,
    y: 1,
  });

  function movePlayerToLeft() {
    player.x -= 1;
  }

  function movePlayerToRight() {
    player.x += 1;
  }
  function movePlayerToUp() {
    player.y -= 1;
  }
  function movePlayerToDown() {
    player.y += 1;
  }
  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  };
});
