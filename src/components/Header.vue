<template>
  <div><img src="../assets/logo.png">{{msg}}</div>
</template>

<script>
export default {
  name: 'header',
  data: function() {
    return {
      msg: 'vuejs 学习demo'
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
div img{
  width:40px;
}
div{
  line-height: 60px;
  font-size: 14px;
}
</style>