<template>
  <div>
    <div>
      <select>
        <option value="btc">btc</option>
      </select>
      <div class="send-block">
        <input
          type="text"
          class="border border-orange-700"
          placeholder="my text"
          v-model="text"
        />
        <button @click="engraveMsg(text)">Send</button> <br />
      </div>
      <div class="mb-10">
        <br />
        <h1 class="text-xs">
          Address to send your BTC to: <span>{{ address }}</span>
        </h1>
        <h1 class="text-xs">
          Amount: <span>{{ fees }} Satoshi</span>
        </h1>
      </div>

      <div class="send-block">
        <input
          type="text"
          class="border border-orange-700"
          placeholder="my text"
          v-model="txId"
        />
        <button @click="fetchTx">Fetch</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
onBeforeMount(async () => {
  if (await health_check()) {
    //testSse();
  }
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

const text = ref<string>("");
let evtSource: EventSource | undefined = undefined;
const address = ref<string>();
const fees = ref<number>();
async function engraveMsg(message: string) {
  const { data, error } = await useFetch<ResponseEngraveMessage>(
    "http://localhost:3001/api/request-engraving",
    {
      method: "POST",
      body: JSON.stringify({
        chain: "btc",
        message: message,
      }),
      onResponseError: (error) => {
        console.error(error);
      },
    }
  );
  if (data.value) {
    address.value = data.value.address;
    fees.value = data.value.fees;

    setupSse(address.value);
  } else {
    console.error("could not get address and fees!");
  }
}

// TODO: Here we need to maintain the keys from server to client which. This can make problems as the server can change the keys and the client will not know about it. (TransactionStatus Into<String> method in server)
enum SSE_EVENTS {
  ERROR = "Error occurred",

  WaitingForFunds = "waiting for funds",
  ConfirmingFunds = "confirming funds",
  ConfirmedFunds = "confirmed funds",
  Engraving = "engraving",
  Engraved = "engraved",
  Finalized = "finalized",

  ExternalUnconfirmed = "external unconfirmed",
  ExternalConfirmed = "external confirmed",
}
function setupSse(address: string) {
  evtSource = new EventSource(`http://localhost:3001/api/tx-stream/${address}`);
  evtSource.onmessage = (event: MessageEvent<SSE_EVENTS>) => {
    console.log("event: ", event);
    switch (event.data) {
      case SSE_EVENTS.ERROR:
        console.error("Error occurred");
        break;
      case SSE_EVENTS.WaitingForFunds:
        console.log("waiting for funds");
        break;
      case SSE_EVENTS.ConfirmingFunds:
        console.log("confirming funds");
        break;
      case SSE_EVENTS.ConfirmedFunds:
        console.log("confirmed funds");
        break;
      case SSE_EVENTS.Engraving:
        console.log("engraving");
        break;
      case SSE_EVENTS.Engraved:
        console.log("engraved");
        break;
      case SSE_EVENTS.Finalized:
        console.log("finalized");
        evtSource?.close();
        break;

      case SSE_EVENTS.ExternalUnconfirmed:
        console.log("external unconfirmed");
        break;
      case SSE_EVENTS.ExternalConfirmed:
        console.log("external confirmed");
        break;
        
      default:
        console.error("unknown event");
        break;
    }
  };
}

function testSse() {
  console.log("listening to sse!");
  try {
    evtSource = new EventSource(`http://localhost:3001/api/stream-test`);
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

const txId = ref<string>(
  "d12cc196a322b5a8f47ea60dc2d056f88eab940cdabb77e3b18a7fe40116c73b"
);

/**
 * Which Errors can Logically occur when trying to to fetch a transaction?
 * 1) The transaction does not exist
 * 2) The transaction ID is not Valid
 * 3) Internal Server Error
 */

async function fetchTx() {
  const { data, error } = await useFetch(
    "http://localhost:3001/api/tx/" + txId.value
  );
  console.log("data: ", data.value);
  console.log("error: ", error.value);
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

button {
  background-color: #f6ad55;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
</style>
