<template>
  <v-container grid-list-md>
      <v-card>
        <v-toolbar
          color="red darken-2"
          dark
          flat
        >

          <v-toolbar-title>Informacion Detallada</v-toolbar-title>

          <v-spacer></v-spacer>

          <template v-slot:extension>
            <v-tabs
              v-model="currentItem"
              background-color="transparent"
              fixed-tabs
              slider-color="white"
            >
              <v-tab
                v-for="item in items"
                :key="item"
                :href="'#tab-' + item"
              >
                {{ item }}
              </v-tab>

              <v-menu
                v-if="more.length"
                bottom
                left
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    text
                    class="align-self-center mr-4"
                    v-on="on"
                  >
                    more
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>

                <v-list class="grey lighten-3">
                  <v-list-item
                    v-for="item in more"
                    :key="item"
                    @click="addItem(item)"
                  >
                    {{ item }}
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="currentItem">
          <v-tab-item
            v-for="item in items.concat(more)"
            :key="item"
            :value="'tab-' + item"
          >
            <v-card flat>
              <v-card-text>
                <div v-if="item == 'Web'">
                  <v-container grid-list-md text-xs-center>
                  <v-layout row wrap>
                    <v-flex xs12 lg2>
                      <v-card max-width="100px" max-height="350px">
                        <v-img :src="require('../assets/cochera2.png')" height="100px" width="100px"/>

                        <v-card-title class="textoA">
                        </v-card-title>

                        <v-card-subtitle class="textoA" style="color: black">
                          Cochera
                        </v-card-subtitle>
                      </v-card>
                    </v-flex>
                  </v-layout>
                  </v-container>
                </div>
                
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      show: false,
      currentItem: 'tab-Web',
      items: [
        'Web', 'Shopping', 'Videos', 'Images',
      ],
      more: [
        'News', 'Maps', 'Books', 'Flights', 'Apps',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }),

    methods: {
      addItem (item) {
        const removed = this.items.splice(0, 1)
        this.items.push(
          ...this.more.splice(this.more.indexOf(item), 1)
        )
        this.more.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      },
    },
  }
</script>

<style>
.textoA {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
}
</style>