  <template>
    <v-navigation-drawer class="grey-darken-4" theme="dark" floating permanent>
      <div class="d-flex justify-center align-center my-4"> <!-- Envolver a v-img em um div -->
        <img
          style="width: 200px;"
          src="../assets/naruto-138.svg"
          class="mb-4"
        >
      </div>
      <v-list >
        <v-list-item
          density="compact"
          title="Introduction"
          value="introduction"
          class="hover-v-list"
          :class="{ 'text-red': $route === '/', 'v-list-item--active': $route === '/' }"
          @click="navigateToRoute('/')"
        ></v-list-item>
        <v-list-item
          density="compact"
          title="Characters"
          value="characters"
          class="hover-v-list"
          :class="{ 'text-red': $route === '/characters', 'v-list-item--active': $route === '/characters' }"
          @click="navigateToRoute('/characters')"
        ></v-list-item>
        <v-list-item
          title="Akatsuki"
          value="gave"
          class="hover-v-list"
          :class="{ 'text-red': $route === '/akatsuki', 'v-list-item--active': $route === '/akatsuki' }"
          @click="navigateToRoute('/akatsuki')"
        ></v-list-item>
        <v-list-item
          title="Tailed Beasts"
          value="gave"
          class="hover-v-list"
          :class="{ 'text-red': $route === '/beasts', 'v-list-item--active': $route === '/beasts' }"
          @click="navigateToRoute('/beasts')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>

  <script>
  export default {
    computed: {
      $route() {
        return this.$router.currentRoute.value.path;
      },
    },
    methods: {
      navigateToRoute(route) {
        this.$router.push(route);
      },
    },
  };
  </script>

  <style>
  .hover-v-list:hover{
    transition: .4s;
    color: #AB0C0C;
  }

  </style>
