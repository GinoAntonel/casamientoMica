<template>
  <v-app id = 'color0'>
    <v-content>
      <Toolbar/>
      <Parallax/>
      <Information/>
      <Gallery/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './Toolbar'
import Information from './Information'
import Parallax from './Parallax'
import Gallery from './Gallery' 

export default {
  name: 'Base',
  components: {
    Toolbar,
    Information,
    Parallax,
    Gallery
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>