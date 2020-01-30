<template>
  <v-app>
    <v-content>
      <Toolbar/>
      <Parallax/>
      <HelloWorld/>
      <Photos/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Parallax from './components/Parallax'
import Toolbar from './components/Toolbar'
import Photos from './components/Photos'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Parallax,
    Photos,
    Footer,
    Toolbar,
  },
  data: () => ({
    //
  }),
};
</script>
