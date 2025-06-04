<template>
  <USlideover
    side="top"
    title="Navigation"
    trailing-icon="material-symbols:keyboard-arrow-down-rounded"
  >
    <UTooltip text="Navigation" :content="{ side: 'left' }" :delay-duration="0">
      <UButton
        size="lg"
        icon="material-symbols:menu"
        color="neutral"
        variant="ghost"
      />
    </UTooltip>

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
