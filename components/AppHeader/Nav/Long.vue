<template>
  <USlideover
    side="top"
    title="Navigation"
    trailing-icon="material-symbols:keyboard-arrow-down-rounded"
  >
    <UButton
      size="md"
      icon="material-symbols:menu"
      color="neutral"
      variant="ghost"
    />

    <template #body>
      <UNavigationMenu :items="navigations" orientation="vertical" />
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

defineProps<{
  navigations: NavigationMenuItem[];
}>();
</script>
