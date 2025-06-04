<template>
  <UPopover mode="hover">
    <UButton
      size="md"
      icon="material-symbols:language"
      color="neutral"
      variant="ghost"
    />
    <template #content>
      <USkeleton class="size-48" />
    </template>
  </UPopover>
</template>
