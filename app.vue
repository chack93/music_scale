<template>
  <v-app dark="true">
    <v-theme-provider :theme="theme">
      <v-layout class="rounded rounded-md">
        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar title="Application bar"></v-app-bar>

        <v-main
          class="d-flex align-center justify-center"
          style="min-height: 300px"
        >
          <NuxtPage />
        </v-main>
      </v-layout>
    </v-theme-provider>
  </v-app>
</template>

<script setup lang="ts">
const theme = useState("theme", () => "light");

onMounted(() => {
  const darkThemeMatcher = window.matchMedia("(prefers-color-scheme: dark)");
  theme.value = darkThemeMatcher.matches ? "dark" : "light";
  darkThemeMatcher.onchange = (e) => {
    console.log("xxxxted");
    theme.value = e.matches ? "dark" : "light";
  };
});
</script>
