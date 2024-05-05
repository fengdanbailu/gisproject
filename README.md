# 启动

```
pnpm i
pnpm run dev
```

# 目标： GIS 展示图表练习

```
计划把常见的二维、三维图插件应用到这个项目中，作为边学习边使用的例子，目前计划看以下内容：
cesium
    1. 申请token，启动demo
    2. 隐藏相关默认元素
    3. 坐标转化、相机、飞行动画的使用
    4. 实体中加点、标注和文字


echarts
heighchart
```

# 项目创建过程

```
pnpm create vite gisproject
cd gisproject
pnpm install
pnpm i cesium vite-plugin-cesium 并设置到vite.config.js中

```

# 常见问题

```
问： 启动后，在 chrome 中看不到 cesium 的地球？

答：
原因一，没有加入 token，免费申请一个即可。
原因二，版本不兼容，需要切换到低版本, 或者换个浏览器（比如 chrome beta版本呢，360急速浏览器等）
```

# 参考链接：

```
注册token：https://ion.cesium.com/signup/

参考博客: https://blog.csdn.net/qq_40640910/article/details/135768890

官网例子：https://cesium.com/learn/

bili的学习视频：https://www.bilibili.com/video/BV1BM4m1Q7id?p=4&vd_source=ca953f6461aa8c9e42982ba8180f3c3a
```
