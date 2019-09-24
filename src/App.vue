<template>
  <v-app>
    <v-content>
      <Parallax/>
      <Fecha/>
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
import Timer from './components/Timer'
import Photos from './components/Photos'
import Carrousel from './components/Carrousel'
import Regalos from './components/Regalos'
import Asistencia from './components/Asistencia'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import Fecha from './components/Fecha'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Parallax,
    Timer,
    Photos,
    Carrousel,
    Regalos,
    Asistencia,
    Instagram,
    Footer,
    Fecha,
  },
  data: () => ({
    //
  }),
};
</script>
