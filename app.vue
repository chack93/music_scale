<template>
  <v-app dark="true">
    <v-defaults-provider :defaults="{ global: globalDefaults }">
      <v-theme-provider :theme="theme">
        <v-layout class="rounded rounded-md">
          <Toolbar />
          <v-main
            class="d-flex align-center justify-center"
            style="min-height: 300px"
          >
            <NuxtPage />
          </v-main>
        </v-layout>
      </v-theme-provider>
    </v-defaults-provider>
  </v-app>
</template>

<script setup lang="js">
import { useDisplay } from "vuetify";

const display = useDisplay();
const theme = useState("theme", () => "light");
const globalDefaults = useState("globalDefaults", () => ({
  density: "compact",
}));

onMounted(() => {
  const darkThemeMatcher = window.matchMedia("(prefers-color-scheme: dark)");
  theme.value = darkThemeMatcher.matches ? "dark" : "light";
  darkThemeMatcher.onchange = (e) => {
    theme.value = e.matches ? "dark" : "light";
  };
  if (display.platform.touch) {
    globalDefaults.value = { density: "default" };
  }
});
</script>
