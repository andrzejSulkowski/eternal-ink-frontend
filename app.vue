<template>
  <div>
    <v-app>
      <NuxtLayout name="default">
        <warning-chip/>
        <NuxtPage />
      </NuxtLayout>
    </v-app>
  </div>
</template>

<script setup lang="ts">
import { useWarningChip } from '~/composables/useWarningChip';
const { warningMsg, showWarning } = useWarningChip();

watch(showWarning, (newVal) => {
  console.log('showWarning inside app.vue: ', newVal);
}, {immediate: true});

</script>

<style lang="scss">
.v-application {
  background-color: transparent;
  --v-theme-on-background: transparent;
  --v-theme-background: transparent;
}

</style>
