<template>
	<div>
		<el-menu style="border-right:none;" :default-active="$route.name" :router="true" class="el-menu-vertical-demo">
			<template v-for='(item,index) in menuData'>
				<template v-if='item.children == null || item.children.length == 0'>
					<el-menu-item :index='item.url' @click='clickMenu(item)' :key="index">
                        <i :class='item.icon'></i><span slot='title'>{{item.name}}</span>
                    </el-menu-item>
				</template>
				<template v-else>
					<el-submenu :index='item.url' :key="index">
                        <template slot='title'>
                            <i :class='item.icon'></i><span>{{item.name}}</span>
                        </template>
                        <el-menu-item :index='chil.url' :key='index' v-for='(chil,index) in item.children'>
							<i :class='chil.icon'></i>
							<span>{{chil.name}}</span>
						</el-menu-item>
                    </el-submenu>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>

export default {
  data: function(){
    return {
		menuData:[
			{
				name: "数据管理",
				icon: "el-icon-menu",
				url: "tableDemo",
				children: [
					{ name: "增删改查", icon: null, url: "/product" },
				]
			},
			{
				name: "目录demo",
				icon: "el-icon-menu",
				url: "upload",
				children: [
					{ name: "目录1.1", icon: null, url: "/1.1" },
					{ name: "目录1.2", icon: null, url: "/1.2" }
				]
			},
			{
				name: "其他管理",
				icon: "el-icon-document",
				url: "else",
				children: null
			}
		]
    }
  },
  methods:{
	  
  }
}
</script>

