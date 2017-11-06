<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="show('hello')">say hello</button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data: function() {
    return {
      msg: '12345'
    }
  },
  methods:{
    show:function(msg){
      alert(msg)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
