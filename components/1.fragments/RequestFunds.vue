<template>
  <v-card class="max-w-md mx-auto my-8 shadow-lg">
    <v-card-title class="text-center text-blue-900 font-semibold">
      Payment Instructions
    </v-card-title>
    <v-card-text>
      <div class="my-4">
        <p class="text-sm text-gray-700">
          To proceed with your transaction, please send the required fees to the
          Bitcoin address below. Make sure to transfer the exact amount
          specified.
        </p>
      </div>
      <v-list dense>
        <v-list-item>
          <div class="flex justify-between">
            <span class="text-gray-600">Bitcoin Address:</span>
            <span class="text-gray-900 font-medium"
              >{{ address }}</span
            >
          </div>
        </v-list-item>
        <v-list-item>
          <div class="flex justify-between">
            <span class="text-gray-600">Required Fees:</span>
            <span class="text-gray-900 font-medium">{{ getSatoshiInBtc }} BTC</span>
          </div>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn color="primary" dark class="mt-4" :loading="true">
        Processing...
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  address: {type: String as any as PropType<BitcoinAddress>, required: true},
  fees: {type: Number, required: true},
})

const getSatoshiInBtc = computed(() => satoshiToBitcoin(props.fees))

</script>