<template>
  <v-container fluid id="pcontact">
    <v-layout wrap justify-center>
      <v-flex xs12>
        <v-flex xs4>
          <div data-aos="zoom-out-right">
            <v-img :src="require('../assets/contact.png')"></v-img>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-flex xs12>
      <div data-aos="zoom-in" data-aos-duration="2000">
        <v-card class="mx-auto" max-width="500">
          <v-tabs fixed-tabs v-model="tab" background-color="#ff6464" dark>
            <v-tab>Envianos tus datos</v-tab>
            <v-tab>Nuestros datos</v-tab>
            <v-tab-item>
              <v-card flat id = "color3">
                  <v-btn rounded color="#db3056" dark>Enviar</v-btn>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat id = "color3">hola</v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>