<template>
  <div>
    <landing-page/>

  </div>
</template>

<script setup lang="ts">
onBeforeMount(async () => {
  await health_check()
});

async function health_check() {
  const { message, status } = await $fetch<{
    message: string;
    status: "success";
  }>("http://localhost:3001/api/healthchecker");
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
