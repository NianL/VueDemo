<template>
  <div class="product">
  	<div style="margin-bottom:10px;">
		<el-button @click="dialogFormVisible = true">添加产品</el-button>
	</div>
	<el-table :data="productList" style="width: 100%" v-for="">
		<el-table-column prop="name" label="产品名称"></el-table-column>
		<el-table-column prop="category" label="产品类别"></el-table-column>
		<el-table-column prop="createTime" label="创建时间"></el-table-column>
    </el-table>

    <el-dialog title="添加产品" :visible.sync="dialogFormVisible" :close-on-click-modal="false" width="600px">
	  <div>
	  	<el-form :model="productFromInfo">
		    <el-form-item label="产品名称" :label-width="formLabelWidth">
		      <el-input v-model="productFromInfo.name" placeholder="请输入产品名称" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="产品分类" :label-width="formLabelWidth">
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
  watch:{
  	dialogFormVisible:function(){
  		this.productFromInfo = {}
  	}
  },
  methods:{
  	addProduct:function () {
  		var data = {
  			name:this.productFromInfo.name,
  			category:this.productFromInfo.category,
  			createTime:(new Date()).toLocaleString()
  		}
  		this.productList.push(data)
  		this.dialogFormVisible = false
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
