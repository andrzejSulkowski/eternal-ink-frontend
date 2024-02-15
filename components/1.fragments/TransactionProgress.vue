<template>
  <v-card class="max-w-md mx-auto my-8 shadow-xl">
    <v-card-title class="text-center text-blue-900 font-semibold">
      Transaction Status
    </v-card-title>
    <v-card-text class="text-center">
      <p :class="statusClass" class="font-medium">{{ statusMessage }}</p>
      <p v-if="txId">Transaction ID: {{ txId }}</p>
      <v-progress-circular
        v-if="isProcessing"
        class="mt-8"
        :size="40"
        :width="5"
        color="blue"
        indeterminate
      ></v-progress-circular>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { TransactionStatus } from '~/types/transactionStatus';

const props = defineProps({
  status: { type: String as PropType<TransactionStatus>, required: true },
  txId: { type: String , required: false, default: () => undefined },
});

const { status } = toRefs(props);

const isProcessing = computed(() => {
  return [
    TransactionStatus.WaitingForFunds,
    TransactionStatus.ConfirmedFunds,
    TransactionStatus.ConfirmingFunds,
    TransactionStatus.Engraving,
    TransactionStatus.ExternalUnconfirmed,
  ].includes(status.value);
});

const statusClass = computed(() => {
    switch (status.value) {
        case TransactionStatus.Engraved:
        case TransactionStatus.Finalized:
        case TransactionStatus.ExternalConfirmed:
            return 'text-green-500';
        case 'external unconfirmed':
            return 'text-orange-500';
        default:
            return 'text-gray-700';
    }
});

const statusMessage = computed(() => {
    switch (status.value) {
        case TransactionStatus.WaitingForFunds: return 'Waiting for funds';
        case TransactionStatus.ConfirmingFunds: return 'Confirming funds';
        case TransactionStatus.ConfirmedFunds: return 'Funds confirmed';
        case TransactionStatus.Engraving: return 'Engraving in progress';
        case TransactionStatus.Engraved: return 'Engraved successfully';
        case TransactionStatus.Finalized: return 'Transaction finalized';
        case TransactionStatus.ExternalUnconfirmed: return 'External transaction unconfirmed';
        case TransactionStatus.ExternalConfirmed: return 'External transaction confirmed';
        default: return 'Unknown status';
    }
});
</script>
