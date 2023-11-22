import { usePlayerStore } from "@/store/player";
import {  onUnmounted } from "vue";
export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  } = usePlayerStore();

//   onMounted(() => {
    window.addEventListener("keyup", handleKey);
//   });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKey);
  });

  function handleKey(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
      case "ArrowUp":
        movePlayerToUp();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
    }
  }
}
