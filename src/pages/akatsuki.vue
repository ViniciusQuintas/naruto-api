<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeaderComponent />
  <FormComponent :search="API_AKATSUKI_ENDPOINT" @result-search="handleSearchResult" />
  <ItensComponent :searchResults="searchResults" />
</template>

<script>
import { API_AKATSUKI_ENDPOINT } from "@/constants/api.js";

export default {
  data() {
    return {
      searchResults: [],
    };
  },
  computed: {
    API_AKATSUKI_ENDPOINT() {
      return API_AKATSUKI_ENDPOINT;
    },
  },
  methods: {
    handleSearchResult(results) {
      this.searchResults = results;
    },
  },
};
</script>
