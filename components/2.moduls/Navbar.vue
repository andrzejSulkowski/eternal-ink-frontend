<template>
  <header class="bg-white shadow">
    <div
      class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center"
    >
      <a href="#" class="flex items-center">
        <img
          src="/logo.png"
          alt="TailwindCSS Logo Placeholder"
          class="mr-6 h-10 sm:h-12"
        />
        <span
          class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white"
          >EngraveMe</span
        >
      </a>
      <nav class="flex lg:space-x-16 sm:space-x-8">
        <a
          href="#"
          class="text-gray-800 hover:text-gray-600 transition-colors text-base font-medium"
          >Docs</a
        >
        <a
          href="#"
          class="text-gray-800 hover:text-gray-600 transition-colors text-base font-medium"
          >Components</a
        >
        <a
          href="#"
          class="text-gray-800 hover:text-gray-600 transition-colors text-base font-medium"
          >Blog</a
        >
        <a
          href="#"
          class="text-gray-800 hover:text-gray-600 transition-colors text-base font-medium"
          >FAQ</a
        >
      </nav>
      <div class="flex items-center">

        <v-btn
        class="mx-4"
        icon="mdi-theme-light-dark"
        variant="plain"
        size="default"
        @click="toggleTheme"
      />
      <v-btn
        class="mx-4"
        icon="mdi-github"
        variant="plain"
        size="default"
      />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

const theme = useTheme();
function toggleTheme(){
  console.log("toggle theme")
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  document.querySelector('html')!.classList.toggle('dark')
}

</script>
