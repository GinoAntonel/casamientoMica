<template>
  <v-container fluid id="pinformation">
    <v-layout wrap justify-center>
      <v-flex xs12>
        <v-flex xs4>
        <div data-aos="zoom-out-right">
          <v-img
          :src="require('../assets/information2.png')"
          ></v-img>
        </div>
        </v-flex>
      </v-flex>
      
      <v-flex lg3 xs12>

        <div data-aos="fade-right" data-aos-duration="2000">
          <v-card class="mx-auto" max-width="370">
            <v-app-bar id="color2" dense dark>
              <v-toolbar-title id="textCenter">Ambientes</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-app-bar>

            <v-card-title id="color3">
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Cocina
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Cochera
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Patio
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Living
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Comedor
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Terraza
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Galeria
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Patio de Luz
              </v-chip>
            </v-card-title>
          </v-card>
        </div>
      </v-flex>
      <v-flex lg3 xs12>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <v-card class="mx-auto" max-width="370">
            <v-app-bar id="color2" dense dark>
              <v-toolbar-title id="textCenter">Servicios</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-app-bar>

            <v-card-title id="color3">
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Internet
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Gas
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Agua
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Luz
              </v-chip>
            </v-card-title>
          </v-card>
        </div>
      </v-flex>
      <v-flex lg3 xs12>
        <div data-aos="fade-left" data-aos-duration="2000">
          <v-card class="mx-auto" max-width="370">
            <v-app-bar id="color2" dense dark>
              <v-toolbar-title id="textCenter">Caracteristicas</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-app-bar>

            <v-card-title id="color3">
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Superficie total: 300mts2
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Superficie cubierta: 55.8mts2
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                2 Dormitorios
              </v-chip>
              <v-chip class="ma-1" id="color1" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                2 Plantas
              </v-chip>
            </v-card-title>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>

<script>
export default {

};
</script>