import Vue from 'vue'
import VueRouter from "vue-router";
import Base from '../components/Base.vue';
import Information from '../components/Information.vue'

Vue.use(VueRouter)



const router = new VueRouter({
    mode: "history",
    routes: [
      { path: '', component: Base },
      { path: '/information', component: Information },
    ],
    scrollBehavior: function (to) {    if (to.hash) {      return {        selector: to.hash      }    }  },})
  