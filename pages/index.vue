<template>
  <div>
    <landing-section />
    <how-it-works-section />
    <about-us />
    <questions-section />
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp();

onBeforeMount(async () => {
  try {
    await healthCheck();
  } catch (e) {
    console.warn(e);
  }
});

async function healthCheck() {
  console.log("checking health of backend...");

  const { message, status } = await $api.healthCheck();

  if (status === "success") {
    console.log("🚀 Server is up and running!");
    return true;
  } else {
    console.log("☠️ Server is down!");
    return false;
  }
}
</script>

<style scoped>
input {
  width: 100%;
}

.send-block {
  display: flex;
  justify-content: space-between;
}
</style>
