<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  title: "Saplyn's Garden",
});
</script>

<style>
:root {
  --header-height: 60px;
  --footer-height: 70px;
}
</style>
