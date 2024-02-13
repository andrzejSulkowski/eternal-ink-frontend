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
    console.log(message)
    return true;
  } else {
    console.log("☠️ Server is down!");
    return false;
  }
}


async function test(){
  // const data = await $fetch('/api/healthchecker')
  // console.log("test health check: ", data)

  const data = await useAPIFetch('/api/healthchecker').data.value;
  console.log("test health check: ", data)
}

//test()
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
