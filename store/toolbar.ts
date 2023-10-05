import {defineStore} from "pinia";

export const useToolbar = defineStore("toolbar", {
  state: () => ({foo: "bar"}),
  actions: {
    setFoo(val: string) {
      this.foo = val
    }
  }
})
