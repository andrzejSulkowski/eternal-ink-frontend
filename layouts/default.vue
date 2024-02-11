<template>
  <main
    class="bg-transparent dark:bg-slate-900 w-full h-screen flex flex-col overflow-y-auto"
  >
    <Navbar class="z-10" />

    <div class="flex-grow relative px-14">
      <div class="circles-frame w-screen z-[0] absolute h-full">
        <div
          class="hidden z-10 bg-blue-300 absolute right-20 top-40 w-40 h-40 blur-3xl"
        ></div>
        <img
          src="/forms/blob1.svg"
          alt="Engraving"
          class="hidden w-full overflow-visible absolute fill-transparent right-20 top-[-50px] opacity-15"
        />
      </div>
      <div class="z-20 relative">
        <slot></slot>
      </div>
    </div>
    <Footer class="z-10"></Footer>
  </main>
</template>

<style scoped>
main {
  overflow: hidden;
}
</style>
