<template>
  <div>
	<el-menu style="border-right:none;"
	  default-active="0"
	  class="el-menu-vertical-demo">
	  <el-submenu index="1">
	  	<template slot="title">
	      <i class="el-icon-menu"></i>
	      <span>产品管理</span>
	    </template>
	    <router-link to="/category"><el-menu-item index="1-1">分类管理</el-menu-item></router-link>
	    <router-link to="/product"><el-menu-item index="1-2">信息管理</el-menu-item></router-link>
	  </el-submenu>

	  <el-submenu index="2">
	  	<template slot="title">
	      <i class="el-icon-document"></i>
	      <span>目录demo2</span>
	    </template>
	    <el-menu-item-group>
	      <template slot="title">目录2</template>
		  <el-menu-item index="2-1">2.1</el-menu-item>
		  <el-menu-item index="2-2">2.2</el-menu-item>
		</el-menu-item-group>
	  </el-submenu>

	  <router-link to="/home">
	  	<el-menu-item index="3">
	      <span slot="title">回到首页</span>
		</el-menu-item>
	  </router-link>
	</el-menu>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: function(){
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu a{
	text-decoration: none;
}
</style>
