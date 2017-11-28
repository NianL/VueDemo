<template>
  <div class="product-detail">
    <el-button @click="goBack()">返回</el-button>
    <div>product id ： {{ $route.params.id }}</div>
  </div>
</template>

<script>

export default {
  name: 'product-detail',
  data: function(){
    return {
      msg: '详情页面'
    }
  },
  methods:{
    goBack:function(){
      window.history.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>