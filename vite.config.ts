import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cesium from "vite-plugin-cesium";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "node:path";

export const pathResolve = (dir: string) => resolve(process.cwd(), ".", dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cesium(),
    AutoImport({
      dts: "types/auto-import.d.ts",
      imports: [
        "vue",
        "vue-router",
        "pinia",
        {
          "@vueuse/core": ["useVModels", "useVModel"],
          "lodash-es": ["cloneDeep", "findIndex", "unionBy", "throttle"],
        },
      ],
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
    }),
    Components({
      dts: "types/components.d.ts",
      deep: true,
      dirs: ["src/components", "src/views"],
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": pathResolve("src"),
      "-": pathResolve(""),
    },
  },
});
