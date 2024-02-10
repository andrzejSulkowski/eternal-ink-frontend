<template>
   <v-container class="fill-heigh" fluid>
      <v-row class="py-20" align="center" justify="center">
        <v-col cols="12" sm="8" md="6" class="text-center">
          <h1 class="display-2 mb-3 text-3xl font-bold text-slate-700">Eternalize Your Words on the <span class="btc">Bitcoin</span> Blockchain</h1>
          <p class="subtitle-1 mb-5 text-xl text-gray-400 mt-4">Secure, permanent, and unforgettable—engrave your messages on the Bitcoin Blockchain.</p>
          <v-btn large color="primary" class="mx-2" @click="engrave">Engrave Now</v-btn>
          <v-btn large color="secondary" class="mx-2" @click="retrieve">Retrieve Message</v-btn>
        </v-col>
      </v-row>
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
            <v-card-text>Start by crafting the message you wish to immortalize on the Bitcoin Blockchain.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="mb-5">
          <v-card class="pa-5" outlined>
            <v-card-title>Engrave Your Message</v-card-title>
            <v-card-text>Use our platform to engrave your message onto the blockchain, ensuring its permanence.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="mb-5">
          <v-card class="pa-5" outlined>
            <v-card-title>Retrieve and Share</v-card-title>
            <v-card-text>Easily retrieve and share your engraved message or discover messages left by others.</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- About Us Section -->
    <v-container class="my-12" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" class="text-center">
          <h2 class="text-h4 mb-4">About Us</h2>
          <p>
            At Blockchain Engravings, we're pioneering the use of the Bitcoin Blockchain for something truly unique—giving individuals the ability to engrave messages that last forever. Our dedication to innovation and privacy ensures every message engraved is a testament to our commitment to excellence.
          </p>
        </v-col>
      </v-row>
    </v-container>


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
                        Your message benefits from the inherent security of the Bitcoin Blockchain, making it virtually immutable and forever preserved.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Question 2
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Answer 2
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Question 3
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Answer 3
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Question 4
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Answer 4
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
    

    <v-container class="my-12" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" class="text-center">
          <h2 class="text-h4 mb-4">How it Works?</h2>
          <div>
            <!-- Here it would like to create a flow chart 
            1) Write your message
            2) Pay the engraving mining fee
            3) You message will be engraved to the blockchain
            4) You will receive a transaction id and a link to the transaction
            -->
          </div>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Contact Section -->
    <!-- Use v-form with v-text-field and v-btn for submission -->



    <div class="landing-container">
    <!-- Hero Section -->
    <section class="hero-section text-center py-20 bg-cover bg-[url('/path/to/your/background/image.jpg')]">
      <h1 class="text-3xl font-bold text-slate-700">Eternalize Your Words on the <span class="btc">Bitcoin</span> Blockchain</h1>
      <p class="text-xl text-gray-400 mt-4">Secure, permanent, and unforgettable—engrave your messages on the Bitcoin Blockchain.</p>
      <div class="mt-10">
        <button class="cta-btn engrave">Engrave Now</button>
        <button class="cta-btn retrieve">Retrieve Message</button>
      </div>
    </section>
    
    <!-- How It Works Section -->
    <section class="how-it-works-section py-20">
      <h2 class="text-3xl font-bold text-center">How It Works</h2>
      <div class="steps-container mt-8">
        <!-- Step 1 -->
        <div class="step">
          <h3 class="step-title">Create Your Message</h3>
          <p class="step-description">Start by crafting the message you wish to immortalize on the Bitcoin Blockchain.</p>
        </div>
        <!-- Step 2 -->
        <div class="step">
          <h3 class="step-title">Engrave Your Message</h3>
          <p class="step-description">Use our platform to engrave your message onto the blockchain, ensuring its permanence.</p>
        </div>
        <!-- Step 3 -->
        <div class="step">
          <h3 class="step-title">Retrieve and Share</h3>
          <p class="step-description">Easily retrieve and share your engraved message or discover messages left by others.</p>
        </div>
      </div>
    </section>
    
    <!-- About Us Section -->
    <section class="about-us-section py-20 bg-slate-100">
      <h2 class="text-3xl font-bold text-center">About Us</h2>
      <p class="text-center mt-4 max-w-4xl mx-auto">
        At Blockchain Engravings, we're pioneering the use of the Bitcoin Blockchain for something truly unique—giving individuals the ability to engrave messages that last forever. Our dedication to innovation and privacy ensures every message engraved is a testament to our commitment to excellence.
      </p>
    </section>
    
    <!-- FAQ Section -->
    <section class="faq-section py-20">
      <h2 class="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div class="faq-container mt-8">
        <!-- FAQ 1 -->
        <div class="faq">
          <h3 class="faq-question">How secure is my engraved message?</h3>
          <p class="faq-answer">Your message benefits from the inherent security of the Bitcoin Blockchain, making it virtually immutable and forever preserved.</p>
        </div>
        <!-- Add more FAQs as needed -->
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="contact-section py-20 bg-slate-100">
      <h2 class="text-3xl font-bold text-center">Get In Touch</h2>
      <p class="text-center mt-4">Have questions or need assistance? Contact us through our support channel.</p>
      <!-- Contact form or contact information -->
    </section>
  </div>
  </template>


<script setup lang="ts">
function engrave(){
    console.log('Engrave button clicked');
}
function retrieve(){
    console.log('Retrieve button clicked');
}
</script>
  
  <style scoped lang="scss">
  .landing-container {
    font-family: 'Arial', sans-serif;
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
    background-color: #4CAF50; /* Green */
  }
  .cta-btn.retrieve {
    background-color: #008CBA; /* Blue */
  }
  /* Add more styles for other sections as needed */
  .btc {
    color: $bitcoin-orange;
    text-decoration: underline;
  }
  </style>
  