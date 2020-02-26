import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueRouter from "vue-router";
import Base from './components/Base.vue';
import Information from './components/Information.vue'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)
Vue.use(VueRouter)
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.config.productionTip = false


const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '', component: Base },
    { path: '/information', component: Information, name: 'information' },
  ],
  pushWithAnchor: function (routeName, toHash) {
    const fromHash = router.history.current.hash
    fromHash !== toHash || !fromHash
      ? router.push({ name: routeName, hash: toHash })
      : router.push({ name: routeName, hash: fromHash }, undefined, () => { window.location.href = toHash })
  }

})


new Vue({
  vuetify,
  created() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
