<template>
  <h1>
    {{ $t("nav.scale") }}: {{ storeToolbar.selectedKey }}
    {{ $t(`nav.scale.${$route.params.scale}`) }}
  </h1>
  <v-card :title="$t('heading.music-sheet')"
    ><v-card-item
      ><MusicSheet :keyNote="selectedKey" :scale="selectedScale" /></v-card-item
  ></v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const storeToolbar = useStoreToolbar();
const route = useRoute();
let { selectedKey } = storeToRefs(storeToolbar);

const selectedScale = computed(() => {
  return typeof route.params.scale === "string"
    ? route.params.scale
    : route.params.scale[0];
});
</script>
