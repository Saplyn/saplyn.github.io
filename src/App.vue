<template>
  <UApp>
    <AppHeader />
    <RouterView
      class="min-h-[calc(100vh-var(--footer-height)-var(--header-height))]"
    />
    <AppFooter />
  </UApp>
</template>

<style>
:root {
  --header-height: 60px;
  --footer-height: 70px;
}
</style>
