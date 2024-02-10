<template>
    <main class="bg-transparent dark:bg-slate-900 w-full h-screen flex flex-col overflow-auto">
        <Navbar class="z-10"/>
        <div class="flex-grow relative px-14">
            <div class="hidden circles-frame w-screen z-[0] absolute h-full blur-3xl">
                <div class="z-10 bg-blue-300 absolute right-20 top-40 w-40 h-40 blur-3xl">

                </div>
            </div>
            <div class="z-20">
                <slot></slot>
            </div>

        </div>
        <Footer class="z-10"></Footer>
    </main>
</template>


<style scoped>
main{
    overflow: hidden;
}
</style>