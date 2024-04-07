<template>
    <v-text-field
      :label="route_label"
      :loading="loading"
      append-inner-icon="mdi-magnify"
      variant="solo-filled"
      clearable
      @click:append-inner="searchData"
      @click:clear="clearSearch"
      class="mt-6"
      v-model="search_value"
      style="width: 85%; max-width: 700px; margin: 0 auto;"
    ></v-text-field>
</template>
<script>
import apiClient from '@/services/axios.js';
  export default {
    props: {
      search: String,
    },
    data: () => ({
      loading: false,
      search_value: ''
    }),
    created(){
      this.searchData();
    },
    computed: {
      route_label() {
        return `Search ${this.$router.currentRoute.value.path.slice(1)}`;
      },
      $route() {
        return this.$router.currentRoute.value.path;
      },
    },
    methods: {
      async searchData () {
        try {
          this.loading = true
          const response = await apiClient.get(this.search);

          if (this.$route === '/characters') {
            this.characters = response.data.characters
          } else if (this.$route === '/akatsuki') {
            this.characters = response.data.akatsuki
          } else if (this.$route === '/beasts') {
            this.characters = response.data.tailedBeasts
          }

          const searchTerm = this.search_value.toLowerCase();
          const filteredCharacters = this.characters.filter(character =>
            character.name.toLowerCase().includes(searchTerm)
          );

          this.$emit('result-search', filteredCharacters);
        } catch (error) {
          console.error('Erro ao obter personagens:', error);
        }

        setTimeout(() => {
          this.loading = false
        }, 500)
      },
      clearSearch() {
        this.search_value = ''; // Limpa o campo de busca
        this.searchData(); // Chama a função searchData para passar os dados vazios para o componente pai
      }
    },
    mounted() {
      this.searchData();
  },
  }
</script>
