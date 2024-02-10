<template>
  <v-container class="fill-height bg-background" fluid>
    <v-row justify="center" align="center" class="text-center">
      <v-col cols="12" sm="10" md="8">
        <h1 class="display-2 mb-3 text-primary-text">
          Eternalize Your Words on the
          <span class="text-bitcoin">Bitcoin</span> Blockchain
        </h1>
        <p class="mb-6 text-primary-text">
          Secure, permanent, and unforgettable—engrave your messages on the
          Bitcoin Blockchain with just a few clicks.
        </p>
        <v-form @submit.prevent="() => null">
          <v-textarea
            outlined
            label="Your Message"
            placeholder="Type your message here..."
            rows="3"
            auto-grow
            class="mb-4 text-primary-text bg-accent-grey"
          ></v-textarea>
          <v-btn type="submit" large dark> Engrave Now </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="fill-height" fluid>
    <client-only>
      <v-row class="py-20" align="center" justify="center">
        <v-col cols="12" sm="10" md="8" class="text-center">
          <transition name="fade" mode="out-in">
            <h1
              key="hero-heading"
              class="display-2 mb-5 text-3xl font-bold text-slate-700"
            >
              Eternalize Your Words on the
              <span class="btc">Bitcoin</span> Blockchain
            </h1>
          </transition>
          <p class="subtitle-1 mb-10 text-xl text-gray-400 mt-4">
            Secure, permanent, and unforgettable—engrave your messages on the
            Bitcoin Blockchain
          </p>
          <v-btn large color="primary" dark class="mx-2" @click="engrave">
            Engrave ⛏️
          </v-btn>
          <v-btn large color="secondary" dark class="mx-2" @click="retrieve">
            Retrieve 🔍
          </v-btn>
        </v-col>
      </v-row>
    </client-only>
  </v-container>

  <!-- How It Works Section -->
  <v-container class="my-12">
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="text-h4 text-center mb-6">How It Works</h2>
      </v-col>
      <v-col cols="12" md="4" class="mb-5">
        <v-card class="pa-5" outlined>
          <v-card-title>Create Your Message</v-card-title>
          <v-card-text
            >Start by crafting the message you wish to immortalize on the
            Bitcoin Blockchain.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="mb-5">
        <v-card class="pa-5" outlined>
          <v-card-title>Engrave Your Message</v-card-title>
          <v-card-text
            >Use our platform to engrave your message onto the blockchain,
            ensuring its permanence.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="mb-5">
        <v-card class="pa-5" outlined>
          <v-card-title>Retrieve and Share</v-card-title>
          <v-card-text
            >Easily retrieve and share your engraved message or discover
            messages left by others.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- About Us Section -->
  <v-container class="my-12 bg-slate-100 rounded-xl" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" class="text-center">
        <h2 class="text-h4 mb-4">About Us</h2>
        <p>
          At Blockchain Engravings, we're pioneering the use of the Bitcoin
          Blockchain for something truly unique—giving individuals the ability
          to engrave messages that last forever. Our dedication to innovation
          and privacy ensures every message engraved is a testament to our
          commitment to excellence.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <client-only>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" class="text-center">
          <h2 class="text-h4 mb-4">Frequently Asked Questions</h2>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>
                How secure is my engraved message?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Your message benefits from the inherent security of the Bitcoin
                Blockchain, making it virtually immutable and forever preserved.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title> Question 2 </v-expansion-panel-title>
              <v-expansion-panel-text> Answer 2 </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title> Question 3 </v-expansion-panel-title>
              <v-expansion-panel-text> Answer 3 </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title> Question 4 </v-expansion-panel-title>
              <v-expansion-panel-text> Answer 4 </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </client-only>

  <v-divider></v-divider>

  <v-container class="my-12" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" class="text-center">
        <h2 class="text-h4 mb-4">How it Works?</h2>
        <div class="d-flex flex-column align-center">
          <v-chip color="primary" class="my-2">1. Write your message</v-chip>
          <v-icon>mdi-arrow-down</v-icon>
          <v-chip color="primary" class="my-2"
            >2. Pay the engraving mining fee</v-chip
          >
          <v-icon>mdi-arrow-down</v-icon>
          <v-chip color="primary" class="my-2"
            >3. Your message will be engraved to the blockchain</v-chip
          >
          <v-icon>mdi-arrow-down</v-icon>
          <v-chip color="primary" class="my-2"
            >4. You will receive a transaction id and a link to the
            transaction</v-chip
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
function engrave() {
  console.log("Engrave button clicked");
}
function retrieve() {
  console.log("Retrieve button clicked");
}
</script>

<style scoped lang="scss">
.landing-container {
  font-family: "Arial", sans-serif;
}
.hero-section {
  /* Customize with your own styles */
}
.cta-btn {
  /* Customize with your own styles */
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
}
.cta-btn.engrave {
  background-color: #4caf50; /* Green */
}
.cta-btn.retrieve {
  background-color: #008cba; /* Blue */
}
/* Add more styles for other sections as needed */
.btc {
  text-decoration: underline;
}
</style>
