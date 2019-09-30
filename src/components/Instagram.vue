<template>
  <v-parallax :src="require('../assets/portadad3.jpg')" >
    <div class="img">
      <img :src="require('../assets/icon_instagram.png')"/>
      <h1 class="titlee">#MICAYTOMI2019</h1>
      <br/>
      <br/>
      <p class="textoI">¡¡Preparate para nuestro casamiento!! Ya podés entrar a Instagram y etiquetarnos con nuestro hashtag en tus fotos o videos.</p>
      <v-btn class="ma-2" id="btnn" outlined rounded color="white"
      target="_blank"
      href='https://www.instagram.com/explore/tags/micaytomi2019/'
      >VER FOTOS INSTAGRAM</v-btn>
    </div>
  </v-parallax>
</template>

<style scoped>
.textoI{
  color:white;
  text-align: center;
  font-family: Georgia;
}
</style>