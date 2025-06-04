<template>
  <UNavigationMenu :items="navigations" />
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

defineProps<{
  navigations: NavigationMenuItem[];
}>();
</script>
