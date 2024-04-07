<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeaderComponent />
  <v-container>
      <v-row>
        <h2 class="text-h3 mt-10 mb-4" style="margin: 0 auto; font-weight: bold;">Welcome to the Naruto API!</h2>
        <v-col cols="12">
          <v-card class="mt-4" style="max-width: 800px; margin: 0 auto; border-radius: 5px;">
            <v-card-text >
              <h2 class="headline mb-4 text-h4">Explore the World of Naruto Characters</h2>
              <p class="my-3 text-body-1">
                In this "Naruto API" project, fans and enthusiasts are offered the opportunity to explore this fascinating universe in depth. Users can discover detailed information about main characters such as Naruto Uzumaki, Sasuke Uchiha, Sakura Haruno, and many others. Furthermore, they can meet the criminal organization Akatsuki, made up of powerful renegade ninjas with mysterious and dangerous objectives.
              </p>
              <p class="my-3 text-body-1">
                Not least, API also offers data on the Tailed Beasts, legendary entities of immense power and importance in Naruto mythology. Users can learn about the origins and unique characteristics of these creatures, such as the Nine-Tails (Kurama), the Nine-Tailed Fox, and other Tailed Beasts that play significant roles in the narrative.
              </p>
              <p class="my-3 text-body-1">
                With the "Naruto API", we want to provide not only detailed information, but also an immersive and educational experience for everyone interested in the world of Naruto, whether you are a long-time fan or someone discovering this universe for the first time. Explore, learn and have fun on this ninja journey!.
              </p>
            </v-card-text>
          </v-card>
          <v-btn @click="navigateToRoute('/characters')" size="large" class="mt-8 text-red" style="margin: 0 auto; display: block; background-color: #432725;">
            Get Started
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { API_CHARACTERS_ENDPOINT } from "@/constants/api.js";

export default {
  data() {
    return {
      searchResults: [],
    };
  },
  computed: {
    API_CHARACTERS_ENDPOINT() {
      return API_CHARACTERS_ENDPOINT;
    },
  },
  methods: {
    handleSearchResult(results) {
      this.searchResults = results;
    },
    navigateToRoute(route) {
        this.$router.push(route);
      },
  },
};
</script>
