<template>
  <v-container grid-list-md text-xs-center>
    <br/>
    <v-layout row wrap>
      <v-flex lg6 xs12>
        <v-flex class="img" lg12 xs12 >
          <img
          small
          :src="require('../assets/icon_ceremonia.png')" width="150px"/>
        </v-flex>
        <v-flex class="titleee" lg12 xs12>
          <h1>IGLESIA</h1>
        </v-flex>
        <v-flex class="infoo" lg12 xs12>
          La ceremonia se realizará el d de Noviembre de 2019 a las 16:30 horas en el Convento San Alfonso. 
          Ingresá al link debajo para recibir las indicaciones para llegar. 
        </v-flex>
        <v-flex class="img" lg12 xs12>
          <v-btn class="ma-2" outlined rounded color="green"
          target="_blank"
          href='https://www.google.com.ar/maps/place/Convento+San+Alfonso/@-31.3048408,-64.2977287,17z/data=!3m1!4b1!4m5!3m4!1s0x94329d06c7decc7f:0x6e0f738ff3e315db!8m2!3d-31.3048408!4d-64.2955347'
          >Llegar a la Ceremonia</v-btn>
        </v-flex>
      </v-flex>

      <v-flex lg6 xs12>
        <v-flex class="img" >
          <img
          small
          :src="require('../assets/icon_fiesta.png')" width="150px"/>
        </v-flex>
        <v-flex class="titleee">
          <h1>FIESTA</h1>
        </v-flex>
        <v-flex class="infoo">
          Te esperamos después de la ceremonia en Estancia Victoria. 
          En el link de abajo podés encontrar las indicaciones para llegar, te esperamos
        </v-flex>
        <v-flex class="img">
          <v-btn class="ma-2" rounded outlined color="green"
          target="_blank"
          href='https://www.google.com.ar/maps/place/Estancia+Victoria/@-31.2676309,-64.3335198,17z/data=!3m1!4b1!4m5!3m4!1s0x943282a956aeb473:0x5b82fc9c9d94de6b!8m2!3d-31.2676309!4d-64.3313258'
          >Llegar a la Fiesta</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
    <br/>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style >
.img{
  text-align: center;
}
.titleee{
  text-align: center;
  font-size: 0.75rem !important;
  color: lightslategray;
}
.infoo{
  text-align: center;
  font-family: Georgia;
  color:gray;
}
</style>