<template>
  <div id="app">
    <el-container>
      <el-header><header-info></header-info></el-header>
      <el-container>
        <el-aside style="width:200px;"><left-menu></left-menu></el-aside>
        <el-main><router-view/></el-main>
      </el-container>
      <el-footer><footer-info></footer-info></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import LeftMenu from '@/components/common/LeftMenu'

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

<style>
body{ 
  margin: 0px; 
  padding:0px; 
}
.el-header, .el-footer {
  background-color: #ddd;

}
.el-main{
  background: #eee;
}
</style>
