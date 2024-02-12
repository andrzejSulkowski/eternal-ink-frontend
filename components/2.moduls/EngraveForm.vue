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
      :loading="isLoading"
    >
      Engrave ⛏️
    </v-btn>
  </v-form>
</template>
<script setup lang="ts">
const { $api } = useNuxtApp();
const { message } = toRefs(useTransactionStore());

const emit = defineEmits<{
  (event: "submit", data:{address: string, fees: number}): void
}>();

const isLoading = ref(false);
async function engrave() {
  const validation = validateMessage(message.value);
  if (validation.isValid) {
    isLoading.value = true;
    const { address, fees } = await $api.requestEngraving(message.value, "btc");
    emit('submit', {address, fees}) 


    console.log("address: ", address);
    console.log("fees: ", fees);
    isLoading.value = false;
  }
}

function validateMessage(msg: string): { isValid: boolean; error?: string } {
  if (msg.length > 20) {
    // TODO: update to correct length accepted currently by the system
    return {
      isValid: false,
      error: "The message can be at most 20 characters long",
    };
  } else {
    return { isValid: true };
  }
}
</script>
