<template>
  <div id="app">
    <el-container style="position:absolute;">
      <el-header><header-info></header-info></el-header>
      <el-container>
        <el-aside style="width:200px;"><left-menu></left-menu></el-aside>
        <el-main><router-view/></el-main>
      </el-container>
      <el-footer style="height:20px;"><footer-info></footer-info></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeftMenu from '@/components/LeftMenu'

export default {
  name: 'app',
  data: function(){
    return {}
  },
  mounted:function(){

  },
  components:{
    headerInfo:Header,
    footerInfo:Footer,
    leftMenu:LeftMenu
  }
}
</script>

<style scoped>
.el-container{
  height: 100%;
  width: 100%;
}
.el-header, .el-footer {
  background-color: #ddd;

}
.el-main{
  background: #eee;
}
</style>
