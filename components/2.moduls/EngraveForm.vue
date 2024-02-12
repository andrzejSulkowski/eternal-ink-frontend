<template>
        <v-form @submit.prevent="engrave">
          <v-textarea
            variant="outlined"
            label="Your Message"
            placeholder="Type your message here..."
            rows="3"
            auto-grow
            class="mb-4 text-primary-text"
            v-model="message"
          ></v-textarea>
          <v-btn
            large
            color="primary"
            dark
            class="mx-2 font-weight-bold"
            type="submit"
          >
            Engrave ⛏️
          </v-btn>
        </v-form>
</template>
<script setup lang="ts">
const { $api } = useNuxtApp();
const { message } = toRefs(useTransactionStore());

async function engrave() {
    const {address, fees} = await $api.requestEngraving(message.value, 'btc');
   
    console.log("address: ", address);
    console.log("fees: ", fees);
}
</script>