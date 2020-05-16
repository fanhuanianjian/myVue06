<template>
  <div>
    <h1>我是组件2</h1>
    <h1>我的心啊 * {{$store.state.num}} </h1>
    <h1>{{$store.state.nvs}}</h1>
    <h1>{{$store.getters.getCn}}</h1>
    <h1>{{$store.getters.getCnCount}}</h1>
    <h1>{{$store.getters.getById(2)}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Heart"
  }
</script>

<style scoped>

</style>
