<template>
  <v-footer class="d-flex flex-column bg-white flex-grow-0">
    <div class="d-flex w-100 align-center px-4 text-slate-900">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>

    </div>

    <div class="px-4 py-2 text-slate-900 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>
<script setup lang="ts">

const icons = ref([
    'mdi-linkedin',
    'mdi-account-tie-outline'
]);
</script>

<style scoped lang="scss">

</style>