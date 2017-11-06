<template>
  <div>footer</div>
</template>

<script>
export default {
  name: 'footer',
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
