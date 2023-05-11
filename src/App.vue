<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { PixiEngine } from './systems/engine';
import * as PIXI from 'pixi.js';

const canvas: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(async () => {
    const CANVAS = canvas.value;
    if (CANVAS !== null) {
        await PixiEngine.init({ width: 800, height: 600, backgroundColor: 0x2980b9, view: <PIXI.ICanvas>CANVAS });
    }
});
</script>

<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
