<template>
  <header
    class="bg-default/75 backdrop-blur border-b-2 border-default sticky top-0 z-50 grid grid-cols-5 grid-rows-1 grow px-20"
  >
    <div class="flex items-center justify-start">
      Saplyn's Garden
    </div>

    <!-- LYN: Navigation -->
    <div class="flex items-center justify-center col-span-3">
      <UNavigationMenu :items="navigations" content-orientation="vertical" />
    </div>

    <!-- LYN: Tools -->
    <div class="flex items-center justify-end">
      <TopBarI18n />
    </div>
  </header>
</template>

<script setup lang="ts">
import { routes } from "@/router";
import type { NavigationMenuItem } from "@nuxt/ui";
import { ref } from "vue";
import type { RouteRecordRaw } from "vue-router";

// LYN: Navigation

const currentNavigation = ref();
const navigations = ref<NavigationMenuItem[]>([
  asNavigation(routeAt("/")!),
  asNavigation(routeAt("/about")!),
  {
    label: "Links",
    icon: "material-symbols:link-rounded",
    children: [
      {
        label: "Notebook",
        icon: "simple-icons:mdbook",
        to: "https://saplyn.github.io/notebook/",
        description: "My personal knowledge base, written in English.",
        target: "_blank",
      },
      {
        label: "GitHub",
        icon: "simple-icons:github",
        to: "https://github.com/Saplyn",
        description: "My GitHub profile",
        target: "_blank",
      },
    ],
  },
]);

function asNavigation(route: RouteRecordRaw): NavigationMenuItem {
  return {
    label: route.name?.toString(),
    to: route.path,
    icon: route.meta?.icon,
  };
}

function routeAt(path: string): RouteRecordRaw | undefined {
  return routes.find((route) => route.path == path);
}
</script>
