<template>
	<div>
		<el-menu style="border-right:none;"
		default-active="0"
		:router="true"
		class="el-menu-vertical-demo">
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span>产品管理</span>
				</template>
				<el-menu-item index="category">分类管理</el-menu-item>
				<el-menu-item index="product">信息管理</el-menu-item>
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

			<el-menu-item index="/">
				<span slot="title">回到首页</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>

export default {
  data: function(){
    return {
      
    }
  }
}
</script>

