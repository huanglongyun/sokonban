import { defineStore } from "pinia";

export const mapStore = defineStore("map", {
  state: () => {
    return {
      map: [1, 2, 3],
    };
  },
});
