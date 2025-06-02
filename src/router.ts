import {
  createMemoryHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
import Homepage from "./routes/Homepage.vue";
import AboutPage from "./routes/AboutPage.vue";
import type { NavigationMenuItem } from "@nuxt/ui";

// LYN: Routes

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
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

function routeAt(path: string): RouteRecordRaw | undefined {
  return routes.find((route) => route.path == path);
}

// LYN: Navigations

export const navigations: NavigationMenuItem[] = [
  asNavigation(routeAt("/")!),
  asNavigation(routeAt("/about")!),
  {
    label: "Links",
    icon: "material-symbols:link-rounded",
    children: [
      {
        label: "GitHub",
        icon: "i-simple-icons:github",
        to: "https://github.com/Saplyn",
        target: "_blank",
      },
    ],
  },
];

function asNavigation(route: RouteRecordRaw): NavigationMenuItem {
  return {
    label: route.name?.toString(),
    to: route.path,
    icon: route.meta?.icon,
  };
}
