<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeaderComponent />
  <FormComponent :search="API_CHARACTERS_ENDPOINT" @result-search="handleSearchResult" />
  <ItensComponent :searchResults="searchResults" />
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
  },
};
</script>
