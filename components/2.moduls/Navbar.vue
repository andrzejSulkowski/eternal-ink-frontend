<template>
  <header class="bg-white shadow">
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"
    >
      <a href="/" class="flex items-center">
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
          href="/"
          class="text-primary-text hover:text-gray-400 transition-colors font-medium cursor-pointer"
          >Home</a
        >
        <a
          href="/engrave"
          class="text-primary-text hover:text-gray-400 transition-colors font-medium cursor-pointer"
          >Engrave</a
        >
        <a
          href="/retrieve"
          class="text-primary-text hover:text-gray-400 transition-colors font-medium cursor-pointer"
          >Retrieve</a
        >
        <!-- <a
          href="#"
          :on-click="scrollToFAQ('/')"
          class="text-primary-text hover:text-gray-400 transition-colors font-medium cursor-pointer"
          >FAQ</a
        > -->
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
// TODO: add css class for navbar anchor elements (for example against drag is now working)
import { useTheme } from 'vuetify/lib/framework.mjs';

const theme = useTheme();
function toggleTheme(){
  console.log("toggle theme")
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  document.querySelector('html')!.classList.toggle('dark')
}

const route = useRoute();
const router = useRouter();
function scrollToFAQ(desiredRoute: string){
  if(route.fullPath !== desiredRoute){
    router.push(desiredRoute);
  }
  const el = document.getElementById('question-section');
  if(el){
    el.scrollIntoView({behavior: "smooth"});
  }else {
    console.warn("Element (id: 'question-section') not found");
  }
}

</script>
