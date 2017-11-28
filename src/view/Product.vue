<template>
  <div class="product">
  	<div style="margin-bottom:10px;">
		<el-button type="primary" @click="showAddDialog()">添加产品</el-button>
    <el-input v-model="txtSearchKey" placeholder="请输入查询产品名称" style="width:240px;"></el-input>
    <el-button @click="submitSearch()">查询</el-button>
	</div>
	<el-table :data="productList" style="width: 100%;">
		<el-table-column type="index" width="50"></el-table-column>
		<el-table-column prop="name" label="产品名称"></el-table-column>
		<el-table-column prop="category" label="产品类别"></el-table-column>
		<el-table-column prop="createTime" label="创建时间"></el-table-column>
		<el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-button @click="deleteProduct(scope.$index)" type="text" size="small">删除</el-button>
        <el-button @click="showUpdateDialog(scope.$index)" type="text" size="small">编辑</el-button>
        <el-button @click="detailShow(scope.$index)" type="text" size="small">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog :title="operate.title" :visible.sync="dialogFormVisible" :close-on-click-modal="false" width="500px">
	  <div>
	  	<el-form :model="productFromInfo" ref="productFromInfo" label-width="120px" :rules="rules">
		    <el-form-item label="产品名称" prop="name">
		      <el-input v-model="productFromInfo.name" placeholder="请输入产品名称" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="产品分类" prop="category">
		      <el-select v-model="productFromInfo.category" placeholder="请选择分类">
		        <el-option label="分类1" value="分类1"></el-option>
		        <el-option label="分类2" value="分类2"></el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
	  </div>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible = false">取 消</el-button>
	    <el-button type="primary" @click="submitProduct('productFromInfo')">确 定</el-button>
      <el-button @click="resetForm('productFromInfo')" v-show="false">重置</el-button>
	  </div>
	</el-dialog>
  </div>
</template>

<script>
export default {
  name: 'product',
  data(){
    return {
      operate:{type:"add",title:"",index:-1},
      dataKey:"product",
  		dialogFormVisible:false,
  		productFromInfo:{
        name:'',
        category:''
      },
      rules:{
        name: [
          { required: true, message: '请输入产品名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'change' }
        ],
        category: [
          { required: true, message: '请选择产品分类', trigger: 'change' }
        ]
      },
  		productData:[],
  		formLabelWidth:"120px",
  		productList:[],
      txtSearchKey:""
    }
  },
  mounted(){
  	this.getData(this.dataKey)
  },
  watch:{
    productList(val){
      this.setData(this.dataKey, JSON.stringify(val))
    }
  },
  methods:{
    setData(key,val){
      window.localStorage.setItem(key,val)
    },
  	getData(key){
      var val = window.localStorage[key]
      if (val) this.productList = JSON.parse(val)
    },
    submitSearch(){
      if (this.txtSearchKey == "") {
        this.$message({
          type: 'error',
          message: '查询参数不能为空'
        }); 
      }
      else{
        console.log("查询数据关键词：" + this.txtSearchKey)
      }
      
    },
    showAddDialog() {
      this.operate = {type:"add",title:"添加产品",index:-1}
      this.dialogFormVisible = true
      setTimeout(() => {
        this.resetForm('productFromInfo')
      },10)
    },
    showUpdateDialog(index) {
      this.operate = {type:"edit",title:"修改产品",index:index}
      this.dialogFormVisible = true
      setTimeout(() => {
        this.resetForm('productFromInfo')
        this.productFromInfo.name = this.productList[index].name
        this.productFromInfo.category = this.productList[index].category
      },10)
    },
    resetForm(formName){
      this.$refs[formName].resetFields()
    },
  	submitProduct(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = {
            name:this.productFromInfo.name,
            category:this.productFromInfo.category,
            createTime:(new Date()).toLocaleString()
          }
          if (this.operate.index == -1) {
            this.productList.push(data)
            this.$message({
              type: 'success',
              message: '产品添加成功'
            })
          }else {
            this.productList[this.operate.index] = data
            this.$set(this.productList, this.operate.index, this.productList[this.operate.index]);
            this.$message({
              type: 'success',
              message: '产品修改成功'
            })
          }
          this.dialogFormVisible = false
        } else {
          return false;
        }
      });
  	},
  	deleteProduct(index){
      var _index = index
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.productList.splice(_index,1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    detailShow(index){
      this.$router.push({ path: "/product/" + index})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
