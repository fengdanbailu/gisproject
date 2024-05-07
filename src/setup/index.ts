import type { App } from "vue";
import { setupRouter } from "./router";
import { setupPinia } from "./pinia";

export const setupApp = (app: App) => {
  setupRouter(app);
  setupPinia(app);
};
