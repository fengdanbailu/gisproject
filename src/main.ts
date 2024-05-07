import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import { setupApp } from "@/setup";

createApp(App).use(setupApp).mount("#app");
