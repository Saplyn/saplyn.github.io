<template>
  <footer
    class="flex border-t-2 border-default min-h-(--footer-height) max-h-(--footer-height) h-(--footer-height) items-center justify-center gap-2"
  >
    <UTooltip v-for="link in links" :text="link.tooltip" :delay-duration="0">
      <UButton
        :icon="link.icon"
        :to="link.to"
        size="md"
        color="neutral"
        variant="ghost"
        target="_blank"
      />
    </UTooltip>
  </footer>
</template>

<script setup lang="ts">
type Link = {
  icon: string;
  to: string;
  tooltip: string;
};
const links: Link[] = [
  {
    icon: "simple-icons:github",
    to: "https://github.com/Saplyn",
    tooltip: "GitHub",
  },
  {
    icon: "simple-icons:bilibili",
    to: "https://space.bilibili.com/1019879792",
    tooltip: "Bilibili",
  },
];
</script>
