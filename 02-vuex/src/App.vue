<template>
  <div id="app">

    <h1>module 测试</h1>
    <h1>{{$store.state.a.n2}}</h1>

    <h1>{{$store.getters.countNum}}</h1>

    <button @click="addN2">+</button>
    <button @click="addN3">+</button>


    <hr>
    <h1>我是组件1</h1>
    <h1>{{$store.state.num}}</h1>
    <button @click="btnAdd">+</button>
    <button @click="btnSub">-</button>
    <button @click="btnXg">修改对象</button>
    <button @click="btnAddByYb">异步+</button>
    <hr>
    <hr>
    <router-view></router-view>

  </div>
</template>

<script>
  import {add} from './store/mutation-type'

export default {
  name: 'App',
  methods:{
    btnAdd(){
      this.$store.commit(add,2)
    },
    //payload第一种方式
    // btnSub(){
    //   this.$store.commit('sub',{count:5})
    // },
    //payload第二种方式
    btnSub(){
      this.$store.commit({
        type:'sub',
        count:4
      })
    },
    btnXg(){
      this.$store.commit('xg')
    },
    btnAddByYb(){
      this.$store.dispatch(add).then(res=>{
        console.log('成功 执行完毕');
      })
    },
    addN2(){
      this.$store.commit('addN2')
    },
    addN3(){
      this.$store.dispatch('ac')
    }
  }
}
</script>

<style>
</style>
