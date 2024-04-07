<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeaderComponent />
  <FormComponent :search="API_TAILED_BEASTS_ENDPOINT" @result-search="handleSearchResult" />
  <ItensComponent :searchResults="searchResults" />
</template>

<script>
import { API_TAILED_BEASTS_ENDPOINT } from "@/constants/api.js";

export default {
  data() {
    return {
      searchResults: [],
    };
  },
  computed: {
    API_TAILED_BEASTS_ENDPOINT() {
      return API_TAILED_BEASTS_ENDPOINT;
    },
  },
  methods: {
    handleSearchResult(results) {
      this.searchResults = results;
    },
  },
};
</script>
