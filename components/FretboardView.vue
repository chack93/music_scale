<template>
  <div ref="output" class="bg-grey-lighten-5"></div>
</template>

<script setup lang="ts">
import {
  Accidental,
  Formatter,
  Renderer,
  Stave,
  StaveNote,
  Voice,
} from "vexflow";
import { helperKeyList } from "~/composables/helper_scale";

const props = defineProps<{
  keyNote?: string;
  scale?: string;
}>();
const output = ref<HTMLDivElement | null>(null);
let mainTag: HTMLElement | null;
let resizeObserver: ResizeObserver;
let renderer: Renderer;
let renderWidth = 100;

watch(() => props.keyNote, renderScale);
watch(() => props.scale, renderScale);

onMounted(() => {
  renderer = new Renderer(output!.value!, Renderer.Backends.SVG);

  mainTag = document.querySelector("main")!;
  resizeObserver = new ResizeObserver(resizeWindowHandler);
  resizeObserver.observe(mainTag);
  resizeWindowHandler();
  renderScale();
});

onUnmounted(() => {
  resizeObserver.unobserve(mainTag!);
});

function resizeWindowHandler() {
  const paddingLeft = parseInt(window.getComputedStyle(mainTag!).paddingLeft);
  const w = (mainTag?.clientWidth ?? 500) - paddingLeft;
  const h = mainTag?.clientHeight ?? 500;
  renderer.resize(w * 0.9, h * 0.15);
  renderWidth = w * 0.9;
  renderScale();
}

function renderScale() {
  try {
    renderer.getContext().clear();
    const selectedScale = helperScaleMap()[props.scale ?? ""];
    if (!selectedScale) {
      console.warn(
        `renderScale - abort render, unknown scale, scale: ${props.scale ?? ""}`
      );
      return;
    }

    const keyNoteDeltaIdx = helperKeyList.indexOf(props.keyNote ?? "");

    const noteList = selectedScale.interval.map((el) => {
      const noteIdx = (keyNoteDeltaIdx + el) % helperKeyList.length;
      const key = helperKeyList[noteIdx];
      const pitch = "4";
      const note = new StaveNote({ keys: [`${key}/${pitch}`], duration: "w" });
      if (key.includes("#")) {
        note.addModifier(new Accidental("#"));
      }
      return note;
    });
    const voice = new Voice({ num_beats: noteList.length * 4, beat_value: 4 });
    voice.addTickables(noteList);
    new Formatter().joinVoices([voice]).format([voice], renderWidth - 50);
    const stave = new Stave(10, 20, renderWidth - 20);
    stave.addClef("treble");
    stave.setContext(renderer.getContext()).draw();
    voice.draw(renderer.getContext(), stave);
  } catch (err) {
    console.error(`renderScale - failed to render scale, err: ${err}`);
  }
}
</script>
