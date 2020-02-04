<template>
  <v-app id = 'color0'>
    <v-content>
      <Toolbar/>
      <Parallax/>
      <Information/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './Toolbar'
import Information from './Information'
import Parallax from './Parallax'


export default {
  name: 'Base',
  components: {
    Toolbar,
    Information,
    Parallax
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>