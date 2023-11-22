// 测试键盘事件 一般可以不测，只测试数据就行
import { createPinia, setActivePinia } from "pinia";
import { test, expect, beforeEach } from "vitest";
import { useMove } from "../player";
import { usePlayerStore } from "@/store/player";
beforeEach(() => {
  setActivePinia(createPinia());
});
test("should move to left when press ArrowLeft", () => {
  const { player } = usePlayerStore();
  player.x = 1;
  useMove();
  window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowLeft" }));
  expect(player.x).toBe(0);
});
test("should move to left when press ArrowRight", () => {
  const { player } = usePlayerStore();
  player.x = 1;
  useMove();
  window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowRight" }));
  expect(player.x).toBe(2);
});

test("should move to left when press ArrowUp", () => {
  const { player } = usePlayerStore();
  player.y = 1;
  useMove();
  window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowUp" }));
  expect(player.y).toBe(0);
});
test("should move to left when press ArrowDown", () => {
  const { player } = usePlayerStore();
  player.y = 1;
  useMove();
  window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowDown" }));
  expect(player.y).toBe(2);
});
