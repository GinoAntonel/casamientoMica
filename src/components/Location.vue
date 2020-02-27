<template>
  <v-container fluid id="plocation">
    <v-layout wrap justify-center>
      <v-flex xs12>
        <v-flex xs4>
          <div data-aos="zoom-out-right">
            <v-img :src="require('../assets/location.png')"></v-img>
          </div>
        </v-flex>
        <v-flex xs8>
          <div data-aos="zoom-out-right">
            <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
              <l-tile-layer :url="url" :attribution="attribution" />
              <l-marker :lat-lng="[-31.37845,-64.27061]" :icon="icon" />
              <l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color">
                <l-popup content="El Balcon" />
              </l-polygon>
              <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color" />
            </l-map>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPolygon, LPolyline } from "vue2-leaflet";

export default {
  name: "GeometryTest",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolygon,
    LPolyline
  },
  data() {
    return {
      zoom: 16,
      center: [-31.37855, -64.26939],
      polygon: {
        latlngs: [
          [-31.37342, -64.27193],
          [-31.37297, -64.27076],
          [-31.37786, -64.26862],
          [-31.37786, -64.26998]
        ],
        color: "#ff00ff"
      },
      polyline: {
        latlngs: [
          [-31.37794, -64.27295],
          [-31.37234, -64.27278],
          [-31.378, -64.27059],
          [-31.37794, -64.27295]
        ],
        color: "#ff00ff"
      },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 300px;
  margin: 10px;
}
</style>