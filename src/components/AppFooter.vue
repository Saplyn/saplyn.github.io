<template>
  <footer
    class="flex border-t-2 border-default min-h-(--footer-height) max-h-(--footer-height) h-(--footer-height) items-center justify-center gap-2"
  >
    <!-- LYN: GitHub Profile -->
    <UTooltip text="My GitHub Profile" :delay-duration="0">
      <UButton
        icon="i-simple-icons:github"
        size="md"
        color="neutral"
        variant="ghost"
        to="https://github.com/Saplyn"
        target="_blank"
      />
    </UTooltip>
  </footer>
</template>
