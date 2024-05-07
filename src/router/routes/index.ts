import type { RouteRecordRaw } from "vue-router";
import Root from "@/views/system/root.vue";
import Login from "@/views/system/login.vue";
import { rootChildren } from "./root.children";

const rootRoute: RouteRecordRaw = {
  path: "/",
  name: "Root",
  component: Root,
  meta: {
    title: "Root",
  },
  children: rootChildren,
};

const loginRoute: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: Login,
  meta: {
    title: "登录",
  },
};

export const routes: RouteRecordRaw[] = [rootRoute, loginRoute];
