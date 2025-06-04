<template>
  <USlideover side="top" title="Navigation">
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
import { navigations } from "@/navigation";
</script>
