import { defineStore } from "pinia";

export const useStoreToolbar = defineStore("toolbar", {
  state: () => ({
    drawer: false,
    items: [
      { title: "nav.home", link: "/" },
      { title: "nav.scale.major", link: "/scale/major" },
      { title: "nav.scale.minor", link: "/scale/minor" },
    ],
  }),
  actions: {},
});
