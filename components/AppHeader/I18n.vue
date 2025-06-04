<template>
  <UPopover mode="hover">
    <UTooltip text="Language" :content="{ side: 'left' }" :delay-duration="0">
      <UButton
        size="lg"
        icon="material-symbols:language"
        color="neutral"
        variant="ghost"
      />
    </UTooltip>

    <template #content>
      <USkeleton class="size-48" />
    </template>
  </UPopover>
</template>
