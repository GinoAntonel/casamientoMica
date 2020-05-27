<template>
  <v-container fluid id="plocation">
    <v-layout wrap justify-center>
      <v-flex xs12>
        <v-flex xs4>
          <div data-aos="zoom-out-right">
            <v-img :src="require('../assets/location.png')"></v-img>
          </div>
        </v-flex>
        <v-flex lg1 xs12>

        </v-flex>
        <v-flex lg12 xs12>
          <div data-aos="zoom-out-right">
            <l-map :options="{scrollWheelZoom:false}" :zoom="zoom" :center="center" style="height: 500px; width: 100%;">
              <l-tile-layer :url="url" :attribution="attribution" />
              <l-marker :lat-lng="[-31.378120, -64.270717]" :icon="myMarkerIcon" />
              <l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color" :text="polygon.text">
                <l-popup content="El balcon" />
              </l-polygon>
              <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color" />
            </l-map>
            <br/>
            <div class="text-center">
              <v-btn target="_blank" rounded outlined id="color0" dark href="https://www.google.com.ar/maps/place/31%C2%B022'41.4%22S+64%C2%B016'14.9%22W/@-31.378166,-64.273008,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x0:0x0!2zMzHCsDIyJzQxLjIiUyA2NMKwMTYnMTQuNiJX!3b1!8m2!3d-31.37812!4d-64.270717!3m5!1s0x0:0x0!7e2!8m2!3d-31.3781658!4d-64.2708136">Ir a la direccion</v-btn>
            </div>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import L from 'leaflet'
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
    const myMarkerIcon = L.icon({
         iconUrl: require('leaflet/dist/images/marker-icon.png'),
         shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
         iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png')
    });
    
    return {
      myMarkerIcon: myMarkerIcon,
        markers: [ 
          { 
            id: 'm1',
            position: [-31.378120, -64.270717],
            visible: true,
            icon: myMarkerIcon
          },
        ],
      zoom: 16,
      center: [-31.376251, -64.269615],
      polygon: {
        latlngs: [
          [-31.37342, -64.27193],
          [-31.37297, -64.27076],
          [-31.37786, -64.26862],
          [-31.37786, -64.26998]
        ],
        color: "#ff00ff",
        text: "El Prado",
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
  width: 90%;
  height: 300px;
  margin: 10px;
}
</style>