<template>
  <UApp>
    <AppHeader />

    <main
      class="flex flex-col items-center justify-center min-h-[calc(100vh-var(--footer-height)-var(--header-height))]"
    >
      <UIcon name="material-symbols:raven" class="size-16 text-dimmed" />
      <p class="text-5xl mt-2">
        Oops.. {{ error?.message ?? "Unknown error occurred" }}
      </p>
      <UButton
        label="Back to Homepage"
        size="xl"
        class="my-6"
        @click="$router.push('/')"
      />
    </main>

    <AppFooter />
  </UApp>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});
</script>
