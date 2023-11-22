import { describe, test, expect, beforeEach } from "vitest";
import { usePlayerStore } from "@/store/player";
import { createPinia, setActivePinia } from "pinia";
describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("should player move to left", () => {
    const { player, movePlayerToLeft } = usePlayerStore();
    player.x = 1;
    player.y = 1;

    movePlayerToLeft();
    expect(player.x).toBe(0);
  });

  test("should player move to right", () => {
    const { player, movePlayerToRight } = usePlayerStore();
    player.x = 1;
    player.y = 1;

    movePlayerToRight();
    expect(player.x).toBe(2);
  });


  test("should player move to Up", () => {
    const { player, movePlayerToUp } = usePlayerStore();
    player.x = 1;
    player.y = 1;

    movePlayerToUp();
    expect(player.y).toBe(0);
  });


  test("should player move to down", () => {
    const { player, movePlayerToDown } = usePlayerStore();
    player.x = 1;
    player.y = 1;

    movePlayerToDown();
    expect(player.y).toBe(2);
  });
  
});
