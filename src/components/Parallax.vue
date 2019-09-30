<template>
  <v-parallax :src="require('../assets/portada-mobile-c.jpg')"
    width='800' height='812' :speed-factor="1">
    <v-row
    align="center"
    justify="center"
    >
      <img :src="require('../assets/foto.png')" width="350px"/>
    </v-row>
  </v-parallax>
</template>