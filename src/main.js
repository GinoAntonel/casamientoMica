import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueRouter from "vue-router";
import Base from './components/Base.vue';
import Information from './components/Information.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '', component: Base },
    { path: '/information', component: Information },
  ],
  scrollBehavior: function (to) {    if (to.hash) {      return {        selector: to.hash      }    }  },})

new Vue({
  vuetify,
  router,
  created() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
