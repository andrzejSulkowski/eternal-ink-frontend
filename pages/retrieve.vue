<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-4" outlined>
          <v-form @submit.prevent="fetchTransactionData">
            <v-text-field
              v-model="txId"
              label="Transaction ID"
              outlined
              dense
              class="mb-4"
              :rules="[rules.required]"
            ></v-text-field>
            <v-btn type="submit" color="primary" block>Retrieve</v-btn>
          </v-form>
          <div v-if="transactionData" class="mt-4">
            <div class="text-sm text-gray-500">
              Status: <span>{{ transactionData.status }}</span>
            </div>
            <div v-if="transactionData.op_return" class="mt-2">
              <div class="text-sm text-gray-500">Engraved Message:</div>
              <div class="text-sm">{{ transactionData.op_return }}</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { IRequestTxResponse } from "~/types/engraving";

const { $api } = useNuxtApp();
const txId = ref("");
const transactionData = ref<IRequestTxResponse>();

const rules = {
  required: (value: any) => !!value || "Required.",
};

const fetchTransactionData = async () => {
    if(rules.required(txId.value) !== true){
      return;
    }
  // Example: Fetch transaction data from your backend
  // Replace with your actual API call
  const response = await $api.fetchTx(
   txId.value 
  );

  transactionData.value = response;
};

/*
const enum TransactionStatus {
  WaitingForFunds = "waiting for funds",
  ConfirmingFunds = "confirming funds",
  ConfirmedFunds = "confirmed funds",
  Engraving = "engraving",
  Engraved = "engraved",
  Finalized = "finalized", //DONE
  ExternalUnconfirmed = "external unconfirmed",
  ExternalConfirmed = "external confirmed", //DONE
}
*/
</script>
