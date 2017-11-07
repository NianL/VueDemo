<template>
  <div>Vue demo! This is header!</div>
</template>

<script>
export default {
  name: 'header',
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

