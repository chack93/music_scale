<template>
  <div>scale: {{ $route.params.scale }}</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
