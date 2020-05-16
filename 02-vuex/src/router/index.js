import Vue from 'vue'
import Router from 'vue-router'
const Heart = () => import('../components/Heart');


Vue.use(Router)

const routes = [
  {
    path:'/',
    component:Heart
  }
];


export default new Router({
  routes,
  mode: 'history'
})
