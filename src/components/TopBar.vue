<template>
  <header
    class="bg-default/75 backdrop-blur border-b-2 border-default sticky top-0 z-50 grid grid-cols-5 grid-rows-1 grow px-20"
  >
    <!-- LYN: Logo -->
    <div class="flex items-center justify-start">
      <TopBarLogo />
    </div>

    <!-- LYN: Navigation -->
    <div class="flex items-center justify-center col-span-3">
      <TopBarNav />
    </div>

    <!-- LYN: Tools -->
    <div class="flex items-center justify-end">
      <TopBarI18n />
    </div>
  </header>
</template>
