<template>
  <v-flex xs12>
  <v-carousel height="750">
    <v-carousel-item
    class="img-fluid"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"

      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </v-flex>
</template>

<script>
//:src="require('../assets/duplex1.jpg')"
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/duplex1.jpg'),
          },
          {
            src: require('../assets/duplex2.jpg'),
          },
          {
            src: require('../assets/duplex7.jpg'),
          },
          {
            src: require('../assets/duplex8.jpg'),
          },
        ],
      }
    },
  }
</script>
