<template>
  <h1>
    {{ $t("nav.scale") }}: {{ storeToolbar.selectedKey }}
    {{ $t(`nav.scale.${$route.params.scale}`) }}
  </h1>
  <v-card :title="$t('heading.music-sheet')"
    ><MusicSheet :keyNote="selectedKey" :scale="$route.params.scale"
  /></v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const storeToolbar = useStoreToolbar();
let { selectedKey } = storeToRefs(storeToolbar);
</script>
