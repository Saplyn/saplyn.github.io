import {
  createRouter,
  createWebHistory,
  type RouteComponent,
  type RouteRecordNameGeneric,
  type RouteRecordRaw,
} from "vue-router";
import Homepage from "@/routes/Homepage.vue";
import AboutPage from "@/routes/AboutPage.vue";
import NotFoundPage from "@/routes/NotFoundPage.vue";

declare module "vue-router" {
  interface RouteMeta {
    id: string;
    icon: string;
  }
}

export const routes: RouteRecordRaw[] = [
  formRoute("home", "/", Homepage, "Homepage", "material-symbols:home-rounded"),
  formRoute("about", "/about", AboutPage, "About Me", "material-symbols:pets"),
  formRoute(
    "404",
    "/:pathMatch(.*)*",
    NotFoundPage,
    "Page Not Found",
    "material-symbols:raven",
  ),
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

function formRoute(
  id: string,
  path: string,
  component: RouteComponent,
  name: RouteRecordNameGeneric,
  icon: string,
): RouteRecordRaw {
  if (formRoute.usedIds == null) {
    formRoute.usedIds = new Set<string>();
  }
  if (formRoute.usedIds.has(id)) {
    throw new Error(`Duplicate route id detected: "${id}"`);
  }
  formRoute.usedIds.add(id);

  return {
    path,
    name,
    meta: { id, icon },
    component,
  };
}

namespace formRoute {
  export let usedIds: Set<string>;
}
