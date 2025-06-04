<template>
  <UNavigationMenu
    :items="navigations"
    trailing-icon="material-symbols:keyboard-arrow-down-rounded"
  />
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

defineProps<{
  navigations: NavigationMenuItem[];
}>();
</script>
