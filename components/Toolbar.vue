<template>
  <v-navigation-drawer
    v-model="store.drawerOpen"
    :permanent="mdAndUp"
    :temporary="!mdAndUp"
  >
    <v-list
      ><NuxtLink
        v-for="item in store.items"
        :key="item"
        :to="localePath(`${item.link}`)"
        style="text-decoration: none; color: inherit"
      >
        <v-divider v-if="item.divider"></v-divider>
        <v-list-item
          v-if="item.divider && item.title"
          :title="$t(item.title)"
        ></v-list-item>
        <v-list-item
          v-if="!item.divider"
          :active="item.link == route.path"
          :title="$t(item.title)"
          prepend-icon="mdi-circle-medium"
        ></v-list-item></NuxtLink
    ></v-list>
  </v-navigation-drawer>

  <v-app-bar
    ><v-app-bar-nav-icon
      variant="text"
      @click.stop="store.drawerOpen = !store.drawerOpen"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>{{ $t("nav.appname") }}</v-toolbar-title>
    <v-spacer />
    <!--<v-btn variant="text" icon="mdi-dots-vertical"></v-btn>-->
  </v-app-bar>
  <template> </template>
</template>

<script setup>
import { useDisplay } from "vuetify";

const store = useStoreToolbar();
const route = useRoute();
const localePath = useLocalePath();
const { mdAndUp } = useDisplay();

onMounted(() => {
  if (mdAndUp) {
    store.drawerOpen = true;
  }
  const navItemsMap = helperScaleList
    .map((el) => {
      return {
        ...el,
        title: `nav.scale.${el.name}`,
        link: `/scale/${el.name}`,
      };
    })
    .reduce((acc, el) => {
      const groupKey = `${el.mode}-${el.group ?? ""}`;
      return { ...acc, [groupKey]: [...(acc[groupKey] ?? []), el] };
    }, {});
  const navItems = Object.keys(navItemsMap)
    .map((el) => {
      let title = "";
      switch (navItemsMap[el][0].mode) {
        case 5:
          title = "nav.modes.pentatonic";
          break;
        case 6:
          title = "nav.modes.hexatonic";
          break;
        case 7:
          title = "nav.modes.heptatonic";
          if (navItemsMap[el][0].group == "diatonic") {
            title = "nav.groups.diatatonic";
          }
          break;
        case 8:
          title = "nav.modes.octatonic";
          break;
        case 12:
          title = "nav.modes.chromatic";
          break;
      }
      return [{ divider: true, title }, ...navItemsMap[el]];
    })
    .flat();
  console.log(navItems);
  store.items = [...store.items, ...navItems];
  /*
  name: string;
  mode: number;
  group?: string;
  interval: number[];
   */
  console.log(helperScaleList);
});
//{ title: "nav.scale.major", link: "/scale/major" },
//{ title: "nav.scale.minor", link: "/scale/minor" },
// const switchLocalePath = useSwitchLocalePath();
// -> use in <NuxtLink :to="switchLocalePath("de")"
</script>
