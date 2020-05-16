import {add} from "./mutation-type";

export default {
  [add](state, number) {
    state.num += number
  },
  sub(state, payload) {
    state.num -= payload.count
  },
  xg(state) {
    //无法进行异步操作
    // setTimeout(()=>{
    //   state.num = 1551100
    // },2000)

    //可以相应
    //state.nvs[0].age = 29
    //无法相应
    //delete state.nvs[0].age
    //Vue.delete(state.nvs[0],'age')

  }
}
