<template>
  <v-app>
    <v-content>
      <Toolbar/>
      <Parallax/>
      <HelloWorld/>
      <Photos/>
      <Footer/>
      <Test/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Parallax from './components/Parallax'
import Toolbar from './components/Toolbar'
import Photos from './components/Photos'
import Footer from './components/Footer'
import Test from './components/Test'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Parallax,
    Photos,
    Footer,
    Toolbar,
    Test
  },
  data: () => ({
    //
  }),
};
</script>
