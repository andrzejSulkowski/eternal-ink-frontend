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
              >1BoatSLRHtKNngkdXEeobR76b53LETtpyT</span
            >
          </div>
        </v-list-item>
        <v-list-item>
          <div class="flex justify-between">
            <span class="text-gray-600">Required Fees:</span>
            <span class="text-gray-900 font-medium">0.0005 BTC</span>
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
