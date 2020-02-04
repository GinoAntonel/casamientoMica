<template>
  <div>
    <v-toolbar id="color2">
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-divider inset vertical></v-divider>
        
          <router-link to="/information#pinformation" @click.native="scrollFix('/information#pinformation')">
            <v-btn text>
              INFO
            </v-btn>
          </router-link>
        
        <v-divider inset vertical></v-divider>
        <v-btn text>Link 2</v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>