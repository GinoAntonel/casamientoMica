<template>
  <v-app>
    <Base/>
  </v-app>
</template>

<script>
import Base from './components/Base'

export default {
  name: "App",
  components: {
    Base
  },
  data: () => ({
    //
  }),
  mounted() {
    setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
  methods: {
    scrollFix: function(hashbang) {
      location.hash = hashbang;
    }
  }
};
</script>

<style>
#color0 {
  background-color: #851d41ff;
}
#color1 {
  background-color: #db3056;
}
#color2 {
  background-color: #ff6464;
}
#color3 {
  background-color: #ffb99a;
}
#textCenter {
  text-align: center;
}
</style>