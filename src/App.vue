<script setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN;

onMounted(() => {
  const viewr = new Cesium.Viewer("cesiumContainer");
});
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
