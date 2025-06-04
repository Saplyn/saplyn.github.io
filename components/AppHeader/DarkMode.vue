<template>
  <UPopover mode="hover">
    <UTooltip
      :text="`Color Mode (${colorMode.preference})`"
      :content="{ side: 'left' }"
      :delay-duration="0"
    >
      <UButton
        size="lg"
        :icon="colorModeIcon"
        color="neutral"
        variant="ghost"
      />
    </UTooltip>

    <template #content>
      <div class="flex flex-col">
        <UTooltip text="Light mode" :content="{ side: 'left' }">
          <UButton
            v-if="colorMode.preference != 'light'"
            icon="material-symbols:light-mode"
            size="lg"
            color="neutral"
            variant="ghost"
            @click="setColorMode('light')"
          />
        </UTooltip>

        <UTooltip text="Dark mode" :content="{ side: 'left' }">
          <UButton
            v-if="colorMode.preference != 'dark'"
            icon="material-symbols:dark-mode"
            size="lg"
            color="neutral"
            variant="ghost"
            @click="setColorMode('dark')"
          />
        </UTooltip>

        <UTooltip text="Follow system" :content="{ side: 'left' }">
          <UButton
            v-if="colorMode.preference != 'system'"
            icon="material-symbols:computer-outline"
            size="lg"
            color="neutral"
            variant="ghost"
            @click="setColorMode('system')"
          />
        </UTooltip>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const colorModeIcon = computed(() => {
  switch (colorMode.preference) {
    case "system":
      return "material-symbols:computer-outline";
    case "light":
      return "material-symbols:light-mode";
    case "dark":
      return "material-symbols:dark-mode";
    default:
      return "material-symbols:contrast";
  }
});

type ColorModePreference = "system" | "light" | "dark";

function setColorMode(pref: ColorModePreference) {
  colorMode.preference = pref;
}
</script>
