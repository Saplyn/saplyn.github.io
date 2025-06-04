<template>
  <div :class="$props.muted ? 'bg-muted' : ''">
    <slot>
      <p class="w-full flex items-center justify-center p-4">
        Empty Page Divition
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  muted?: boolean;
}>();
</script>
