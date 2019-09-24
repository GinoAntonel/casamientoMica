<template>
  <v-container fluid>
    <h1 class="titlee">NUESTRA HISTORIA...</h1>
    <br/>
    <v-row>
      <v-col cols="6" sm="3">
        <v-img
          :src="require('../assets/1.jpeg')"
          height='330'
        ></v-img>
      </v-col>

      <v-col cols="6" sm="3">
        <v-img :src="require('../assets/2.jpeg')"
        height='330'>
          <div class="fill-height bottom-gradient"></div>
        </v-img>
      </v-col>

      <v-col cols="6" sm="3">
        <v-img :src="require('../assets/3c.jpeg')"
        height='330'>
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-col>

      <v-col cols="6" sm="3">
        <v-img :src="require('../assets/4b.jpeg')"
        height='330'>
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.imgg{
  max-width: 150px;
  max-height: 150px
}
</style>