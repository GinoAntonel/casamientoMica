<template>
  <v-container fluid id="pprocess">
    <v-layout wrap justify-center >
      <v-flex xs12>
        <v-flex xs4>
        <div data-aos="zoom-out-right">
          <v-img
          :src="require('../assets/process2.png')"
          ></v-img>
        </div>
        </v-flex>
      </v-flex>
      <v-flex lg3 xs12>
        <v-img @click="showMultiple(index=0)" class="size" :src="require('../assets/duplex1.jpg')"/>
      </v-flex>
      
      <v-flex lg3 xs12>
        <img @click="showMultiple(index=1)" class="size" :src="require('../assets/duplex2.jpg')"/>
      </v-flex>

      <v-flex lg3 xs12>
        <img @click="showMultiple(index=2)" class="size" :src="require('../assets/duplex3.jpg')"/>
      </v-flex>
      <v-flex lg3 xs12 >
        <v-img @click="showMultiple(index=3)" class="size" :src="require('../assets/duplex4.jpg')"/>
      </v-flex>
      
      <v-flex lg3 xs12>
        <img @click="showMultiple(index=4)" class="size" :src="require('../assets/duplex5.jpg')"/>
      </v-flex>

      <v-flex lg3 xs12>
        <img @click="showMultiple(index=5)" class="size" :src="require('../assets/duplex6.jpg')"/>
      </v-flex>

      <v-flex lg3 xs12 >
        <v-img @click="showMultiple(index=6)" class="size" :src="require('../assets/duplex7.jpg')"/>
      </v-flex>
      
      <v-flex lg3 xs12>
        <img @click="showMultiple(index=7)" class="size" :src="require('../assets/duplex8.jpg')"/>
      </v-flex>

      <VueEasyLightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></VueEasyLightbox>
    </v-layout>
  </v-container>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      imgs: 'https://picsum.photos/510/300?random',  // Img Url , string or Array
      visible: false,
    }
  },
  methods: {
    showSingle() {
      this.imgs = 'https://picsum.photos/510/300?random'
      this.show()
    },
    showMultiple(index) {
      this.imgs = [
        require('../assets/duplex1.jpg'), 
        require('../assets/duplex2.jpg'), 
        require('../assets/duplex3.jpg'),
        require('../assets/duplex4.jpg'),
        require('../assets/duplex5.jpg'),
        require('../assets/duplex6.jpg'),
        require('../assets/duplex7.jpg'),
        require('../assets/duplex8.jpg'),
        ]
      this.index = index  // index of imgList
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.size{
  max-width: 370px;
}
</style>