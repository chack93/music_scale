<template>
  <v-navigation-drawer v-model="store.drawer" temporary>
    <v-list
      ><NuxtLink
        v-for="item in store.items"
        :key="item"
        :to="localePath(`${item.link}`)"
        style="text-decoration: none; color: inherit"
        ><v-list-item
          :active="item.link == route.path"
          :title="$t(item.title)"
        ></v-list-item></NuxtLink
    ></v-list>
  </v-navigation-drawer>

  <v-app-bar
    ><v-app-bar-nav-icon
      variant="text"
      @click.stop="store.drawer = !store.drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Something</v-toolbar-title>
    <v-spacer />
    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>
  <template> </template>
</template>

<script setup>
const store = useStoreToolbar();
const route = useRoute();
const localePath = useLocalePath();
// const switchLocalePath = useSwitchLocalePath();
// -> use in <NuxtLink :to="switchLocalePath("de")"
</script>
