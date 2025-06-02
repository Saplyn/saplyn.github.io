import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Homepage from "@/routes/Homepage.vue";
import AboutPage from "@/routes/AboutPage.vue";
import NotFoundPage from "@/routes/NotFoundPage.vue";

declare module "vue-router" {
  interface RouteMeta {
    icon?: string;
  }
}

export const routes: RouteRecordRaw[] = [
  {
    name: "Homepage",
    path: "/",
    meta: {
      icon: "material-symbols:home-rounded",
    },
    component: Homepage,
  },
  {
    path: "/about",
    name: "About Me",
    meta: {
      icon: "material-symbols:pets",
    },
    component: AboutPage,
  },
  { path: "/:pathMatch(.*)*", name: "404 Not Found", component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
