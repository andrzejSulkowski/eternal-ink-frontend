<template>
  <v-container class="flex justify-center items-center h-full flex-col">
    <v-row class="mt-14 display-2 text-3xl font-bold text-slate-700">
      <v-col>
        <h1>Engrave</h1>
      </v-col>
    </v-row>
    <v-row class="w-full">
      <v-col>
        <v-btn @click="toggleOverlay">Toggle overlay</v-btn>

        <engrave-form
          v-if="state === STATE.REQUEST"
          @submit="({ address, fees }) => null"
        />
        <request-funds
          v-else-if="state === STATE.WAITING_FOR_FUNDS && address && fees"
          :address="address"
          :fees="fees"
        />
        <transaction-progress
          v-else-if="state === STATE.PROCESSING || state === STATE.FINAL"
          :status="txStatus"
          :tx-id="txId"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useWarningChip } from "~/composables/useWarningChip";
import type { IEngravingStatusStream } from "~/types/engraving";
import { TransactionStatus } from "~/types/transactionStatus";
import { fromStr as addressFromStr } from "~/utils/types/bitcoinAddress";
import { fromStr as txFromStr } from "~/utils/types/bitcoinTx";
const { $api } = useNuxtApp();
const { setWarning, showWarning } = useWarningChip();

enum STATE {
  REQUEST = "request",
  WAITING_FOR_FUNDS = "waiting for funds",
  PROCESSING = "processing",
  FINAL = "final",
}
const state = ref<STATE>(STATE.REQUEST);
let txStatus: TransactionStatus = TransactionStatus.WaitingForFunds;

let evtSource: EventSource | undefined = undefined;
const fees = ref<number>();

const address = ref<BitcoinAddress>();
const txId = ref<TransactionId>();
const errorMsg = ref<string[]>(['Test Error']);

function toggleOverlay(){
  setWarning('This is a test warning');
  console.log('showWarning: ', showWarning.value);
}

// function subscribeToTxStatus(addr: BitcoinAddress, fee: number) {
//   address.value = addr;
//   fees.value = fee;
//   state.value = STATE.WAITING_FOR_FUNDS;
//   setupSse(address.value);
// }

const route = useRoute();
onMounted(() => {
  if (route.params.id) {
    let bitcoinAddress: undefined | BitcoinAddress = undefined;

    if (typeof route.params.id === "string")
      bitcoinAddress = addressFromStr(route.params.id);

    if (bitcoinAddress !== undefined) {
      address.value = bitcoinAddress;

    } else if (typeof route.params.id === "string" && validateTxId(route.params.id)) {
      txId.value = txFromStr(route.params.id);
    } else {
      // handle case where route.params.id is not a string (like undefined)
      //TODO
    }
  }
});

async function setupSse(address: BitcoinAddress) {
  evtSource = $api.subscribeStatus(address);

  evtSource.onmessage = (event: MessageEvent<string>) => {
    const data: { data: IEngravingStatusStream } = JSON.parse(event.data);
    let status = data.data.status;
    txId.value = data.data.txId ? txFromStr(data.data.txId) : undefined;

    console.log("event: ", event);
    console.log("parsed data: ", data);
    txStatus = status;
    switch (txStatus) {
      case TransactionStatus.WaitingForFunds:
        console.log("waiting for funds");
        break;
      case TransactionStatus.ConfirmingFunds:
        console.log("confirming funds");
        state.value = STATE.PROCESSING;
        break;
      case TransactionStatus.ConfirmedFunds:
        console.log("confirmed funds");
        state.value = STATE.PROCESSING;
        break;
      case TransactionStatus.Engraving:
        console.log("engraving");
        state.value = STATE.PROCESSING;
        break;
      case TransactionStatus.Engraved:
        console.log("engraved");
        state.value = STATE.FINAL;
        break;
      case TransactionStatus.Finalized:
        console.log("finalized");
        state.value = STATE.FINAL;
        evtSource?.close();
        break;

      case TransactionStatus.ExternalUnconfirmed:
        console.log("external unconfirmed");
        break;
      case TransactionStatus.ExternalConfirmed:
        console.log("external confirmed");
        break;

      default:
        console.error("unknown event");
        break;
    }
  };
}

/// TESTING FUNCTIONS BELOW

function validateTxId(value: string) {
  if (value.length !== 64) {
    return "Transaction ID must be 64 characters long";
  }
  return true;
}
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

<style scoped lang="scss"></style>
