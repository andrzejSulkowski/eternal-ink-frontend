<template>
  <Transition name="slide">
    <div
      v-if="showWarning"
      class="
        mt-5 bg-red-500 text-white text-base font-semibold py-2 px-4 rounded-full shadow-lg 
        chip
      "
    >
      {{ warningMsg }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useWarningChip } from "@/composables/useWarningChip"; // Ensure path is correct

const { showWarning, warningMsg } = useWarningChip();
</script>

<style scoped>
.chip{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 300ms ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translate(-50%, -200%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translate(-50%, 0%);
}
</style>
