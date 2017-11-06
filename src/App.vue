<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-text="title"></h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return {
      title:"liun demo"
    }
  },
  data2 (){
    return {
      title:"liun demo"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
