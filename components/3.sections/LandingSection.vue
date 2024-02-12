<template>
  <v-container class="fill-height bg-background" fluid>
    <v-row justify="center" align="center" class="text-center py-14">
      <v-col cols="12" sm="10" md="8">
        <h1
          key="hero-heading"
          class="display-2 mb-5 text-3xl font-bold text-slate-700"
        >
          Eternalize Your Words on the
          <span class="btc">Bitcoin</span> Blockchain
        </h1>
        <p class="subtitle-1 mb-10 text-xl text-gray-400 mt-4">
          Secure, permanent, and unforgettable—engrave your messages on the
          Bitcoin Blockchain
        </p>
        <v-form @submit.prevent="() => null">
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
            @click="$router.push('/engrave')"
            type="submit"
          >
            Engrave ⛏️
          </v-btn>
          <v-btn
            large
            color="primary"
            variant="outlined"
            dark
            class="mx-2 font-weight-bold"
            @click="$router.push('/retrieve')"
          >
            Retrieve 🔍
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const router = useRouter();

const { message } = toRefs(useTransactionStore());
</script>
