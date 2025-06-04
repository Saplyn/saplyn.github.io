<template>
  <AppHeaderNavWide
    v-if="props.variant === 'Wide'"
    :navigations="navigations"
  />

  <AppHeaderNavLong
    v-if="props.variant === 'Long'"
    :navigations="navigations"
  />
</template>

<script setup lang="ts">
import { AppHeaderNavLong } from "#components";
import type { NavigationMenuItem } from "@nuxt/ui";

const props = defineProps<{
  variant: "Wide" | "Long";
}>();

const navigations = ref<NavigationMenuItem[]>([
  {
    label: "Homepage",
    to: "/",
    icon: "material-symbols:home-rounded",
  },
  {
    label: "About Me",
    to: "/about",
    icon: "material-symbols:pets",
  },
  {
    label: "Notebook",
    icon: "material-symbols:book-4",
    to: "https://saplyn.github.io/notebook/",
    description: "My personal knowledge base, written in English.",
    target: "_blank",
  },
  {
    label: "Projects",
    icon: "material-symbols:sdk",
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
        to: "https://lib.rs/crates/yew-lmth",
        description:
          "A macro crate for writing HTML-like syntax for Yew application, inspired by Sycamore and Dioxus.",
        target: "_blank",
      },
    ],
  },
]);
</script>
