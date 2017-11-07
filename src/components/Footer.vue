<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  name: 'footer',
  data: function() {
    return {
      msg: 'by liun'
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
div{
  line-height: 20px;
  font-size: 12px;
  color: #666;
}
</style>