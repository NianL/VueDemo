<template>
  <div class="product">
  	<div style="margin-bottom:10px;">
		<el-button type="primary" @click="dialogFormVisible = true">添加产品</el-button>
	</div>
	<el-table :data="productList" style="width: 100%" v-for="">
		<el-table-column type="index" width="50"></el-table-column>
		<el-table-column prop="name" label="产品名称"></el-table-column>
		<el-table-column prop="category" label="产品类别"></el-table-column>
		<el-table-column prop="createTime" label="创建时间"></el-table-column>
		<el-table-column label="操作" width="150">
	      <template slot-scope="scope">
	        <el-button @click="deleteProduct(scope.$index)" type="text" size="small">删除</el-button>
	        <el-button @click="editProduct(scope.$index)" type="text" size="small">编辑</el-button>
	      </template>
	    </el-table-column>
    </el-table>

    <el-dialog title="添加产品" :visible.sync="dialogFormVisible" :close-on-click-modal="false" width="600px">
	  <div>
	  	<el-form :model="productFromInfo" label-width="120px">
		    <el-form-item label="产品名称">
		      <el-input v-model="productFromInfo.name" placeholder="请输入产品名称" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="产品分类">
		      <el-select v-model="productFromInfo.category" placeholder="请选择分类">
		        <el-option label="分类1" value="category_1"></el-option>
		        <el-option label="分类2" value="category_2"></el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
	  </div>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible = false">取 消</el-button>
	    <el-button type="primary" @click="addProduct">确 定</el-button>
	  </div>
	</el-dialog>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'product',
  data: function(){
    return {
		dialogFormVisible:false,
		productFromInfo:{},
		productData:[],
		formLabelWidth:"120px",
		productList:[]
    }
  },
  mounted:function(){
  	this.getProductList()

  },
  watch:{
  	dialogFormVisible:function(){
  		this.productFromInfo = {}
  	}
  },
  methods:{
  	getProductList:function(){

  		// axios.get("/testdata/productData.json").then(_ => {
  		// 	console.log(_)
  		// })
  	},
  	addProduct:function () {
  		var data = {
  			name:this.productFromInfo.name,
  			category:this.productFromInfo.category,
  			createTime:(new Date()).toLocaleString()
  		}
  		this.productList.push(data)
  		this.dialogFormVisible = false
  		console.log(JSON.stringify(this.productList))
  	},
  	deleteProduct:function(index){
  		console.log("delete:" + index)
  	},
  	editProduct:function(index){
  		console.log("edit:" + index)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
