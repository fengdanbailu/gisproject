<script setup lang="ts">
import { onMounted } from "vue";
import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN;

let viewer = null;
onMounted(async () => {
  viewer = new Cesium.Viewer("cesiumContainer", {
    timeline: false, // 隐藏时间轴
    animation: false, // 隐藏动画控件
    geocoder: false, // 隐藏搜索
    homeButton: false, // 隐藏回到首页
    sceneModePicker: false, // 隐藏图层选择
    baseLayerPicker: false, // 隐藏地形选择
    navigationHelpButton: false, // 隐藏帮助
    fullscreenButton: false, // 隐藏全屏
  });
  // 自定义图形，地形层次和水波效果
  // const esri = new Cesium.ArcGisMapServerImageryProvider({
  //   url: "https://services.arcgisonline.com/ArcGIS/rest/services/world_Imagery/MapServer",
  //   enablePickFeatures: false,
  // });
  // const viewr = new Cesium.Viewer("cesiumContainer", {
  //   ImageryProvider: esri,
  //   terrainProvider: await Cesium.createWorldTerrainAsync({
  //     requestWaterMask: true,
  //   }),
  // });
  // test1();
  test2();
  // test3();
  // test4();
  // entity1();
  entity2();
});

const entity2 = () => {
  const billboard = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(117.14, 39.093, 5),
    billboard: {
      image: "/src/assets/location.png",
      scale: 0.2,
      color: Cesium.Color.YELLOW,
    },
  });
  const label = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(117.14, 39.095, 5),
    label: {
      text: "小黄鸭",
      fillColor: Cesium.Color.GREENYELLOW,
      font: "16px",
      backgroundColor: new Cesium.Color(255, 255, 0), // backgroundColor不生效
    },
  });
};

const entity1 = () => {
  const point = new Cesium.Entity({
    position: Cesium.Cartesian3.fromDegrees(117.1517, 39.0715),
    point: {
      pixelSize: 10,
      color: Cesium.Color.RED,
    },
  });
  viewer.entities.add(point);

  const point2 = viewer.entities.add({
    id: "point2",
    position: Cesium.Cartesian3.fromDegrees(117.16, 39.08),
    point: {
      pixelSize: 10,
      color: Cesium.Color.ORANGE,
    },
  });

  // viewer.zoomTo(point);
  // viewer.zoomTo(point2);
};

const test4 = () => {
  const position = new Cesium.Cartesian3.fromDegrees(117.16, 39.07);
  viewer.camera.lookAt(
    position,
    new Cesium.HeadingPitchRange(
      Cesium.Math.toRadians(0),
      Cesium.Math.toRadians(-60),
      4000
    )
  );
};

const test3 = () => {
  // 可以设置飞行时长
  const position = new Cesium.Cartesian3.fromDegrees(117.16, 39.07, 4000);
  viewer.camera.flyTo({
    destination: position,
    duration: 3,
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-75),
      roll: Cesium.Math.toRadians(0),
    },
  });
};

const test2 = () => {
  const position = new Cesium.Cartesian3.fromDegrees(117.16, 39.07, 4000);
  viewer.camera.setView({
    destination: position,
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-75),
      roll: Cesium.Math.toRadians(0),
    },
  });
};

const test1 = () => {
  // 精度维度高度，转化为笛卡尔坐标系
  const cartesian1 = Cesium.Cartesian3.fromDegrees(117, 38, 20);
  const cartesian2 = Cesium.Cartesian3.fromDegrees(117, 38, 120);
  console.log(cartesian1);
  console.log(cartesian2);

  // 笛卡尔转弧度坐标
  let value1 = convertValue(cartesian1);
  let value2 = convertValue(cartesian2);
  console.log(value1);
  console.log(value2);
};

const convertValue = (init) => {
  const value = Cesium.Cartographic.fromCartesian(init);
  return {
    ...value,
    latitude: Cesium.Math.toDegrees(value.latitude),
    longitude: Cesium.Math.toDegrees(value.longitude),
  };
};
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
