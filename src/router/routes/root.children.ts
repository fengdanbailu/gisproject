import type { RouteRecordRaw } from "vue-router";
import Cesium from "@/views/modules/cesium/basic.vue";
import Echarts from "@/views/modules/echarts/index.vue";
import Threejs from "@/views/modules/threejs/index.vue";

export const rootChildren: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Cesium,
    meta: {},
  },
  {
    path: "/cesium",
    name: "Cesium",
    component: Cesium,
    meta: {},
  },
  {
    path: "/echarts",
    name: "Echarts",
    component: Echarts,
    meta: {},
  },
  {
    path: "/threejs",
    name: "Threejs",
    component: Threejs,
    meta: {},
  },
];
