<template>
  {{ keyNote }}
  {{ scale }}
  <div ref="output"></div>
</template>

<script setup lang="ts">
import { Renderer, Vex } from "vexflow";

const { keyNote, scale } = defineProps(["keyNote", "scale"]);
const output = ref<HTMLDivElement | null>(null);
const { Factory, EasyScore, System } = Vex.Flow;
let mainTag: HTMLElement | null;
let resizeObserver: ResizeObserver;
let renderer: Renderer;

onMounted(() => {
  renderer = new Renderer(output!.value!, Renderer.Backends.SVG);

  mainTag = document.querySelector("main")!;
  resizeObserver = new ResizeObserver(resizeWindowHandler);
  resizeObserver.observe(mainTag);
  resizeWindowHandler();
});

onUnmounted(() => {
  resizeObserver.unobserve(mainTag!);
});

function resizeWindowHandler() {
  const paddingLeft = parseInt(window.getComputedStyle(mainTag!).paddingLeft);
  const w = (mainTag?.clientWidth ?? 500) - paddingLeft;
  const h = mainTag?.clientHeight ?? 500;
  renderer.resize(w * 0.9, h * 0.25);
}
</script>
