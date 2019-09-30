<template>
  <v-container fluid>
    <br/>
    <v-layout wrap>
      <v-flex lg3 xs12 class="ig">
        <v-img
          aspect-ratio="1"
          :src="require('../assets/portadac.jpg')"
          height='330'
        ></v-img>
      </v-flex>
      <v-flex lg3 xs12 class="ig">
        <v-img 
          aspect-ratio="1"
          :src="require('../assets/2.jpg')"
          height='330'>
          <div class="fill-height bottom-gradient"></div>
        </v-img>
      </v-flex>
      <v-flex lg3 xs12 class="ig">
        <v-img 
          aspect-ratio="1"
          :src="require('../assets/3c.jpeg')"
          height='330'>
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-flex>
      <v-flex lg3 xs12 class="ig">
        <v-img 
          aspect-ratio="1"
          :src="require('../assets/4b.jpeg')"
          height='330'>
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.imgg{
  max-width: 150px;
  max-height: 150px
}
.ig{
  padding: 10px!important;
}
</style>