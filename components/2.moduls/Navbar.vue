<template>
  <header class="bg-white shadow">
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"
    >
      <a href="#" class="flex items-center">
        <img
          src="/logo.png"
          alt="TailwindCSS Logo Placeholder"
          class="mr-6 h-6 sm:h-8"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >EngraveMe</span
        >
      </a>
      <nav class="flex lg:space-x-16 sm:space-x-8 text-sm">
        <a
          href="#"
          class="text-gray-800 hover:text-gray-600 transition-colors font-medium"
          >Docs</a
        >
        <a
          href="#"
          class="text-gray-800 hover:text-gray-600 transition-colors font-medium"
          >Components</a
        >
        <a
          href="#"
          class="text-gray-800 hover:text-gray-600 transition-colors font-medium"
          >Blog</a
        >
        <a
          href="#"
          class="text-gray-800 hover:text-gray-600 transition-colors font-medium"
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
