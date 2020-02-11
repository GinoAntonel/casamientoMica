import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueRouter from "vue-router";
import Base from './components/Base.vue';
import Information from './components/Information.vue'
import Vue2MapboxGL from 'vue2mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const VueScrollTo = require('vue-scrollto');
Vue.use(Vue2MapboxGL);
Vue.use(VueScrollTo)
Vue.use(VueRouter)
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
