<template>
  <v-app>
    <v-content>
      <Toolbar/>
      <Parallax/>
      <Informacion/>
      <HelloWorld/>
      <Photos/>
      <br/>
      <br/>
      <Regalos/>
      <br/>
      <Asistencia/>
      <Instagram/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Parallax from './components/Parallax'
import Photos from './components/Photos'
import Carrousel from './components/Carrousel'
import Regalos from './components/Regalos'
import Asistencia from './components/Asistencia'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import Toolbar from './components/Toolbar'
import Informacion from './components/Informacion'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Parallax,
    Photos,
    Carrousel,
    Regalos,
    Asistencia,
    Instagram,
    Footer,
    Toolbar,
    Informacion
  },
  data: () => ({
    //
  }),
};
</script>
