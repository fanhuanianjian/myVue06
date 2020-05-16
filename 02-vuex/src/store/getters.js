export default {

  getCn(state){
    return state.nvs.filter(s=> s.age<=20)
  },
  getCnCount(state,getters){
    return getters.getCn.length
  },
  getById(state){
    return (id)=>{
      return state.nvs.filter(s=>s.id>id)
    }
  }

}
