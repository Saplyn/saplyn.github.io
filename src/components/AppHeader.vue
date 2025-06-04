<template>
  <header
    class="bg-default/75 backdrop-blur border-b-2 border-default sticky top-0 min-h-(--header-height) max-h-(--header-height) h-(--header-height)"
  >
    <!-- LYN: Wide Header -->
    <div class="hidden lg:grid grid-cols-5 h-full grid-rows-1 grow px-20">
      <div class="flex items-center justify-start">
        <AppHeaderLogo />
      </div>

      <div class="flex items-center justify-center col-span-3">
        <AppHeaderWideNav />
      </div>

      <div class="flex items-center justify-end">
        <AppHeaderI18n />
      </div>
    </div>

    <!-- LYN: Thin Header -->
    <div
      class="lg:hidden h-full grid-rows-1 flex justify-between items-center px-4"
    >
      <AppHeaderLogo />

      <div>
        <AppHeaderI18n />
        <AppHeaderLongNav />
      </div>
    </div>
  </header>
</template>
