<template>
  <v-app id = 'color0'>
    <v-content>
      <Toolbar/>
      <Parallax/>
      <Information/>
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
import Test from './components/Test'
import Information from './components/Information'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Parallax,
    Photos,
    Footer,
    Toolbar,
    Test,
    Information
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  #color0 {
    background-color: #851d41ff;
  }
  #color1{
    background-color: #db3056;
  }
  #color2{
    background-color: #ff6464;
  }
  #color3{
    background-color: #ffb99a;
  }
  #textCenter{
    text-align: center;
  }
</style>