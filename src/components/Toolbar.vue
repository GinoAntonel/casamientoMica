<template>
  <div>
    <v-card
      color="grey lighten-4"
      flat
      tile
      
    >
    <v-toolbar id="color2">
      <v-toolbar-title>Duplex </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-divider inset vertical></v-divider>
        <v-btn text v-scroll-to="'#pinformation'">Informacion</v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn text v-scroll-to="'#plocation'">Ubicacion</v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn text v-scroll-to="'#pprocess'">Imagenes</v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn text v-scroll-to="'#pcontact'">Contacto</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    </v-card>
  </div>
</template>
