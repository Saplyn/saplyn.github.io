<template>
  <UApp>
    <UNavigationMenu
      :items="navigations"
      content-orientation="vertical"
      class="bg-default/75 backdrop-blur border-b-2 border-default justify-center sticky top-0 z-50"
    />

    <RouterView />
  </UApp>
</template>

<script setup lang="ts">
import { navigations } from "./router";
</script>
