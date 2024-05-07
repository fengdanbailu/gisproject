/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const vueComponnet: DefineComponent<{}, {}, any>;
  export default vueComponnet;
}
