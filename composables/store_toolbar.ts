import { defineStore } from "pinia";

export const useStoreToolbar = defineStore("toolbar", {
  state: () => ({
    drawerOpen: false,
    selectedKey: "A",
    items: [{ title: "nav.home", link: "/" }, { divider: true }],
  }),
  actions: {},
});
