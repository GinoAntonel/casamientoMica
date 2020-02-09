<template>
  <v-app id = 'color0'>
    <v-content>
      <Toolbar/>
      <Parallax/>
      <Information/>
      <Location/>
      <Gallery/>
      <Contact/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './Toolbar'
import Information from './Information'
import Parallax from './Parallax'
import Gallery from './Gallery'
import Contact from './Contact'
import Location from './Location'

export default {
  name: 'Base',
  components: {
    Toolbar,
    Information,
    Contact,
    Parallax,
    Gallery,
    Location
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>