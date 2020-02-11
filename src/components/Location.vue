<template>
  <v-container fluid id="plocation">
    <v-layout wrap justify-center>
      <v-flex xs12>
        <v-flex xs4>
          <div data-aos="zoom-out-right">
            <v-img :src="require('../assets/location.png')"></v-img>
          </div>
        </v-flex>
        <v-flex xs12 >
          <div data-aos="zoom-out-right">
            <v-mapbox
              access-token="pk.eyJ1IjoiZmFjdWJhcmFmYW5pIiwiYSI6ImNrNmg5OGw5MDAwcHMzZ253Nm4ybjh2c2sifQ.Ho9wbVfbEjr8_CZcK_QYLA"
              map-style="mapbox://styles/mapbox/streets-v11"
              :center="[-64.27024,-31.37853]"
              :zoom="15"
              :pitch="0"
              :bearing="-132"
              :min-zoom="5"
              id="map"
              ref="map"
            ></v-mapbox>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
</script>

<style scoped>
#map {
  width: 100%;
  height: 300px;
}
</style>