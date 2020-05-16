import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from "./actions";
import modulesA from "./modules/modulesA";
// 1.安装插件
Vue.use(Vuex)
const state ={
  num: 10,
  nvs: [
    {
      id: '01',
      name: 'ax',
      age: 18
    },
    {
      id: '02',
      name: 'ax',
      age: 20
    },
    {
      id: '03',
      name: 'bl',
      age: 22
    },
    {
      id: '04',
      name: 'xm',
      age: 24
    }
  ]
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    a:modulesA
  }
})

// 3.导出store独享
export default store




