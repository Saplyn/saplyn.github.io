<template>
  <UNavigationMenu :items="navigations" content-orientation="vertical" />
</template>

<script setup lang="ts">
import { routes } from "@/router";
import type { NavigationMenuItem } from "@nuxt/ui";
import { ref } from "vue";
import type { RouteRecordRaw } from "vue-router";

const navigations = ref<NavigationMenuItem[]>([
  asNavigation(routeWithId("home")!),
  asNavigation(routeWithId("about")!),
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

function routeWithId(id: string): RouteRecordRaw | undefined {
  return routes.find((route) => route.meta?.id === id);
}
</script>
