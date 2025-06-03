<template>
  <UNavigationMenu :items="navigations" />
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
    label: "Notebook",
    icon: "simple-icons:mdbook",
    to: "https://saplyn.github.io/notebook/",
    description: "My personal knowledge base, written in English.",
    target: "_blank",
  },
  {
    label: "Projects",
    icon: "ri:git-repository-fill",
    children: [
      {
        label: "Vibe Kit",
        icon: "material-symbols:radio",
        to: "https://github.com/Saplyn/vibe",
        description:
          "Collaborative music performance controlling tool using OSC over TCP(FUDI)",
        target: "_blank",
      },

      {
        label: "Yew LMTH",
        icon: "material-symbols:data-object",
        to: "https://github.com/Saplyn/yew-lmth",
        description:
          "A macro crate for writing HTML-like syntax for Yew application, inspired by Sycamore and Dioxus.",
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
