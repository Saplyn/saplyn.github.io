<template>
  <main class="flex flex-col items-center justify-center">
    <UIcon :name="$route.meta.icon" class="size-16 text-dimmed" />
    <p class="text-5xl mt-2">{{ $route.name }}</p>
    <UButton
      label="Back to Homepage"
      size="xl"
      class="my-6"
      @click="$router.push('/')"
    />
  </main>
</template>
