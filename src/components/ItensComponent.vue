  <template>
    <v-item-group mandatory>
      <v-container>
        <v-row>
          <v-col
            v-for="(item, index) in visibleItems"
            :key="index"
            cols="12"
            md="4"
          >
            <v-item>
              <v-card
                dark
              >
                <v-img
                  v-if="item.images && item.images.length > 0"
                  :src="item.images[0]"
                  height="200px"
                  cover
                ></v-img>
                <v-img
                  v-else
                  src="../assets/image-not-found.png"
                  height="200px"
                  cover
                ></v-img>
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-actions>
                  <v-btn @click="toggleDetails(item)" color="orange-lighten-2" variant="text">Details
                    <v-icon :icon="item.expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" class="ml-4"></v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="item.expanded" >
                    <v-divider></v-divider>
                    <v-card-text style="max-height: 400px; overflow-y: auto;">
                      <div v-if="item.personal && item.personal.clan || item.personal.birthdate || item.personal.bloodType || item.personal.sex" class="mb-3">
                        <h3>Personal</h3>
                        <v-list lines="two"  :key="'personal'">
                          <v-list-item v-if="item.personal.clan" title="Clan" :subtitle="item.personal.clan"></v-list-item>
                          <v-list-item v-if="item.personal.birthdate" title="Birthdate" :subtitle="item.personal.birthdate"></v-list-item>
                          <v-list-item v-if="item.personal.bloodType" title="Blood Type" :subtitle="item.personal.bloodType"></v-list-item>
                          <v-list-item v-if="item.personal.sex" title="Sex" :subtitle="item.personal.sex"></v-list-item>
                        </v-list>
                        <v-divider class="border-opacity-25"></v-divider>
                      </div>

                      <div v-if="item.family" class="mb-3">
                        <h3>Family</h3>
                        <v-list lines="two"  :key="'family'">
                          <v-list-item
                            v-for="(value, key) in item.family"
                            :key="key"
                            :title="key"
                            :subtitle="value"
                          ></v-list-item>
                        </v-list>
                        <v-divider class="border-opacity-25"></v-divider>
                      </div>

                      <div v-if="item.jutsu" class="mb-3">
                        <h3>Jutsu(s)</h3>
                        <v-list lines="two"  :key="'jutsu'">
                          <v-list-item
                            v-for="(value, key) in item.jutsu"
                            :key="key"
                          >
                            - {{ value }}</v-list-item>
                        </v-list>
                        <v-divider class="border-opacity-25"></v-divider>
                      </div>

                      <div v-if="item.uniqueTraits" class="mb-3">
                        <h3>Unique Traits</h3>
                        <v-list lines="two"  :key="'family'">
                          <v-list-item
                            v-for="(value, key) in item.uniqueTraits"
                            :key="key"
                          >
                          - {{ value }}</v-list-item>
                        </v-list>
                        <v-divider class="border-opacity-25"></v-divider>
                      </div>

                      <div v-if="item.debut" class="mb-3">
                        <h3>Debut</h3>
                        <v-list lines="two"  :key="'debut'">
                          <v-list-item
                            v-for="(value, key) in item.debut"
                            :key="key"
                            :title="key"
                            :subtitle="value"
                          ></v-list-item>
                        </v-list>
                        <v-divider class="border-opacity-25"></v-divider>
                      </div>

                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      color="primary"
      style="position: fixed; bottom: 20px; right: 20px; z-index:20001;"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </template>

  <script>
  export default {
    props: {
      searchResults: Array,
    },
    data() {
      return {
        visibleItems: [],
        itemsPerPage: 10,
        page: 1,
        loading: false,
        fab: false,
        panel: [0, 1],
      };
    },
    methods: {
      toggleDetails(item) {
        item.expanded = !item.expanded;
      },
      toggleDebut(item){
        item.expanded_debut = !item.expanded_debut;
      },
      async loadMoreItems() {
        this.loading = true;
        const startIndex = (this.page - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.visibleItems.push(...this.searchResults.slice(startIndex, endIndex));
        this.page++;
      },
      onScroll (e) {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||   e.target.scrollTop || 0
        this.fab = top > 60
      },
      toTop () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
    mounted() {
      this.loadMoreItems();

      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollY + windowHeight >= documentHeight) {
          this.loadMoreItems();
        }

        this.showButton = scrollY > 100;
      });
    },
    watch: {
      searchResults() {
        // Resetar a lista de itens visíveis ao receber novos resultados da busca
        this.visibleItems = [];
        this.page = 1;
        this.loadMoreItems();
      },
    },
  };
  </script>

