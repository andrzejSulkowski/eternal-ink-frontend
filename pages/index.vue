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


async function testFetchTx(){
  const data = await $api.fetchTx("dde21714eb5fb1f4785201a353c347582a84d6ee4f67a0431a417cd4e41a96d6");
  console.log("test result: ", data)

  // const data = await useAPIFetch('/api/healthchecker').data.value;
  // console.log("test health check: ", data)
}
async function engravingStatusStream(){
  console.log("listening engraving status stream");

  const eventSource = $api.subscribeStatus("tb1qwaznwcxhl2vhdnd0f26qwphxmr2u0qudz05xgq" as BitcoinAddress);

  let counter = 0;
  eventSource.onmessage = function(event) {
    console.log("event: ", event)
    counter++;
    if(counter > 3){
      eventSource.close();
    }
  }
}

//engravingStatusStream();

function testSse() {
  console.log("listening to sse!");
  try {
    const evtSource = new EventSource(`http://localhost:3001/api/stream-test`);
    evtSource.onmessage = (event) => {
      console.log("event: ", event);
      if (event.data === "close") {
        console.warn("closing connection to stream!");
        evtSource?.close();
      }
    };
    evtSource.onerror = (event) => {
      console.log("event: ", event);
      evtSource?.close();
    };
  } catch (e) {
    console.error("CATCH HIT");
  }
}
testSse();


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
