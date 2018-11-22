<template>
  <div id="app">
      <!-- 上 --> 
        <el-button type="primary">新增</el-button>
        <el-button type="success" @click="submitForm('ruleForm')" >保存</el-button>
        <el-button type="warning">查询</el-button>
         
        <el-tabs type="border-card">
          <el-tab-pane label="基本信息">
             <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-form-inline" style="padding-left:5px;">
                <el-form-item label="报告编号" prop="reportCode">
                  <el-input v-model="ruleForm.reportCode"></el-input>
                </el-form-item>
                <!-- <el-form-item label="发生日期">
                  <el-input v-model="ruleForm.reportDate"></el-input>
                </el-form-item> -->
                <el-form-item label="部  门" prop="deptId">
                  <el-input v-model="ruleForm.deptId "></el-input>
                </el-form-item>
                <el-form-item label="操作人"  prop="operator">
                  <el-input v-model="ruleForm.operator"></el-input>
                </el-form-item>
                

                <el-form-item label="报告类别" prop="reportType">
                  <template slot-scope="scope"> 
                  <el-select v-model="ruleForm.reportType" placeholder="请选择" class="sbr" style="padding-right:25px;" >
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                 </template>
                </el-form-item>

                <el-form-item label="责任人" prop="chargePerson">
                  <el-input v-model="ruleForm.chargePerson"></el-input>
                </el-form-item>
                <el-form-item label="损失费用" prop="failureCost">
                  <el-input v-model="ruleForm.failureCost "></el-input>
                </el-form-item>
                <el-form-item label="报告序号" prop="reportSortId">
                  <el-input v-model="ruleForm.reportSortId"></el-input>
                </el-form-item>


                <el-form-item label="类     别" prop="catalog">
                  <template slot-scope="scope"> 
                  <el-select v-model="ruleForm.catalog" placeholder="请选择" class="sbr" style="padding-right:25px;" >
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                 </template>
                </el-form-item>
     
                <el-form-item label="缸号/单号" prop="prodCode">
                  <el-input v-model="ruleForm.prodCode"></el-input>
                </el-form-item>
                <el-form-item label="工厂款号" prop="styleCode">
                  <el-input v-model="ruleForm.styleCode"></el-input>
                </el-form-item>
                <el-form-item label="机      台" prop="machinePlatform">
                  <el-input v-model="ruleForm.machinePlatform"></el-input>
                </el-form-item>
                <el-form-item label="颜      色" prop="prodColor">
                  <el-input v-model="ruleForm.prodColor"></el-input>
                </el-form-item>
                <el-form-item label="疋     数" prop="prodCount">
                  <el-input v-model="ruleForm.prodCount"></el-input>
                </el-form-item>
                <el-form-item label="重      量" prop="prodWeight">
                  <el-input v-model="ruleForm.prodWeight"></el-input>
                </el-form-item>

                <el-form-item label="班      次" prop="scheduleType">
                  <template slot-scope="scope"> 
                  <el-select v-model="ruleForm.scheduleType" placeholder="请选择" class="sbr" style="padding-right:25px;" >
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                 </template>
                </el-form-item>

                <el-form-item label="布      类" prop="clothclass">
                  <el-input v-model="ruleForm.clothclass"></el-input>
                </el-form-item>
                <el-form-item label="供  应  商" prop="clothType">
                  <el-input v-model="ruleForm.clothType"></el-input>
                </el-form-item>
                <el-form-item label="客      户" prop="customer">
                  <el-input v-model="ruleForm.customer"></el-input>
                </el-form-item>
                <el-form-item label="组 织" prop="woven">
                  <el-input v-model="ruleForm.woven"></el-input>
                </el-form-item>
                <el-form-item label="回修日期" prop="date1" style="width:200px;" class="hxrq">
                  <el-date-picker v-model="ruleForm.date1"  type="date" placeholder="选择日期" style="width:100px;"></el-date-picker>
                </el-form-item>     
                <br>
                <el-form-item label="异常内容" prop="returnAlterDate" style="width:460px;" class="ycnr">
                  <el-input type="textarea" v-model="ruleForm.returnAlterDate" style="width:390px;"></el-input>
                </el-form-item>
                <el-form-item label="异常处理方案" prop="failureSolution" style="width:480px;" class="yccl">
                  <el-input type="textarea" v-model="ruleForm.failureSolution" style="width:390px;"></el-input>
                </el-form-item>
              
                <el-form-item label="异常分类："  prop="type"  class="ycfl" >
                  <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox  label="染色" name="type"></el-checkbox>
                    <el-checkbox label="人工原因" name="type"></el-checkbox>
                    <el-checkbox label="方法原因" name="type"></el-checkbox>
                    <el-checkbox label="设备原因" name="type"></el-checkbox>
                    <el-checkbox label="定型" name="type"></el-checkbox>
                    <el-checkbox label="其他" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item><br>
          
              
                <el-form-item label="产品区分：" prop="resource" class="cpqf">
                  <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="开发"></el-radio>
                    <el-radio label="量产"></el-radio>
                  </el-radio-group>
                </el-form-item><br>


              <el-form-item label="工序步骤描述"  prop="processDesc" style="width:480px;" class="yccl">
                  <el-input type="textarea" v-model="ruleForm.processDesc" style="width:390px;"></el-input>
              </el-form-item>
              
            </el-form>
          </el-tab-pane>
        </el-tabs>

        <!-- 下 -->
         
        <el-tabs type="border-card">
          <el-tab-pane label="工序步骤">
           <el-button type="primary" @click.prevent="addRow()" style="margin-bottom:8px;">新增</el-button>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="why0" label="4M" width="150">
                
                 <template slot-scope="scope"> 
                  <el-select v-model="scope.row.fourDimension" placeholder="请选择" class="sbr" >
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                  </el-select>
                 </template>
              </el-table-column>

              <el-table-column label="1Why"  width="160">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.firstWhy"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="2Why"  width="160">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.secondWhy"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="3Why"  width="160">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.thirdWhy"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="4Why"  width="160">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.fourthWhy"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="5Why"  width="160">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.fifthWhy"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="操作"  width="120">
                <template slot-scope="scope">
                  <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini"  type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="详细信息">
            
            <el-table :data="tableData1" border style="width: 100%">
              <el-table-column prop="why0" label="4M" width="100">
              </el-table-column>
              <el-table-column prop="countermeasures" label="改善对策" width="150"></el-table-column>
              <el-table-column prop="date" label="完成日期" width="150"></el-table-column>
              <el-table-column prop="department" label="担当部门" width="150"></el-table-column>
              <el-table-column prop="improve" label="改善确认" width="150"></el-table-column>
              <el-table-column prop="note" label="备注" width="280"></el-table-column>
              <el-table-column label="操作"  width="120">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>  
     
            
          </el-tab-pane>
        </el-tabs>

 <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="35%">
            <el-form ref="form" :model="form" label-width="50px">


                <el-form-item label="1Why">
                    <el-input v-model="form.firstWhy"></el-input>
                </el-form-item>
                <el-form-item label="2Why">
                    <el-input v-model="form.secondWhy"></el-input>
                </el-form-item>
                <el-form-item label="3Why">
                    <el-input v-model="form.thirdWhy"></el-input>
                </el-form-item>
                <el-form-item label="4Why">
                    <el-input v-model="form.fourthWhy"></el-input>
                </el-form-item>
                <el-form-item label="5Why">
                    <el-input v-model="form.fifthWhy"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>


        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
  
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
      ruleForm:{
        reportCode:'',
        // reportDate:'',
        deptId:'',
        operator:'',
        reportType:'',
        chargePerson:'',
        failureCost:'',
        reportSortId:'',
        catalog:'',
        prodCode:'',
        styleCode:'',
        machinePlatform:'',
        prodColor:'',
        prodCount:'',
        prodWeight:'',
        scheduleType:'',
        clothclass:'',
        clothType:'',
         customer:'',
        woven:'',
         date1:'',
        returnAlterDate:'',
        failureSolution:'',
        processDesc:'',
        type: [],
        resource:''
      },
       rules:{
         reportCode :[
           {required: true, message: '报告编号', trigger: 'blur'},
           { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
         ],
         deptId:[
           {required: true, message: '部门', trigger: 'blur'},
           { min: 2, max: 10, message: '长度在 2 到 10个字符', trigger: 'blur' }
         ],
         operator :[
           {required: true, message: '操作人', trigger: 'blur'},
           { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
         ],
         reportType :[
            { required: true, message: '请选择报告类别', trigger: 'change' }
         ],
         chargePerson :[
           {required: true, message: '责任人', trigger: 'blur'},
           { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
         ],
         failureCost :[
           {required: true, message: '损失费用', trigger: 'blur'},
           { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
         ],
         reportSortId :[
           {required: true, message: '报告序号', trigger: 'blur'},
           { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
         ],
         catalog :[
            { required: true, message: '请选择类别', trigger: 'change' }
         ],
         prodCode :[
           {required: true, message: '缸号/单号', trigger: 'blur'},
           { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
         ],
         styleCode :[
           {required: true, message: '工厂款号', trigger: 'blur'},
           { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
         ],
         machinePlatform :[
           {required: true, message: '机 台', trigger: 'blur'},
           { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
         ],
         prodColor :[
           {required: true, message: '颜 色', trigger: 'blur'},
           { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
         ],
         prodCount :[
           {required: true, message: '疋 数', trigger: 'blur'},
           { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
         ],
         prodWeight :[
           {required: true, message: '重 量', trigger: 'blur'},
           { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
         ],
         scheduleType :[
          { required: true, message: '请选择班次', trigger: 'change' }
         ],
         clothclass :[
           {required: true, message: '布 类', trigger: 'blur'},
           { min: 1, max: 5, message: '长度在 1 到 15 个字符', trigger: 'blur' }
         ],
         clothType :[
           {required: true, message: '供  应  商', trigger: 'blur'},
           { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
         ],
         customer :[
           {required: true, message: '客 户', trigger: 'blur'},
           { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
         ],
         date1 :[
           { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
         ],
         returnAlterDate :[
            { required: true, message: '请填写异常内容', trigger: 'blur' }
         ],
         failureSolution :[
           { required: true, message: '请填写异常处理方案', trigger: 'blur' }
         ],
         type :[
          { type: 'array', required: true, message: '请至少选择一个异常分类', trigger: 'change' }
         ],
         resource :[
           { required: true, message: '请选择产品区分', trigger: 'change' }
         ],
         processDesc :[
            { required: true, message: '请填写工序步骤描述', trigger: 'blur' }
         ],
   

         
         
       },
      fourDimension:'',
       options: [{
          value: '选项1',
          label: '方法'
        }, {
          value: '选项2',
          label: '设备'
        }, {
          value: '选项3',
          label: '人员'
        }, {
          value: '选项4',
          label: '环境'
        },],

        value: '',

        options1: [{
          value: '选项1',
          label: '织厂'
        }, {
          value: '选项2',
          label: '染厂'
        }, {
          value: '选项3',
          label: '其他'
        }],
        
         options2: [{
          value: '选项1',
          label: '丝光'
        }, {
          value: '选项2',
          label: '印花'
        }, {
          value: '选项3',
          label: '其他'
        }],

        options3: [{
          value: '选项1',
          label: '早班'
        }, {
          value: '选项2',
          label: '中班'
        }, {
          value: '选项3',
          label: '晚班'
        }],

 
      form: {
                firstWhy: '',
                secondWhy: '',
                thirdWhy: '',
                fourthWhy: '',
                fifthWhy: '',
                },
      value1:'',
      editVisible: false,
      delVisible: false,
      tableData: []
    }  
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('已保存');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
     },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       handleEdit(index, row) {
          console.log(index, row);
        },
      handleDelete(index, row) {
          console.log(index, row);
        },
   
      //数据
      getData(){
            this.loading=true
            var api=""
            this.$http.get(api).then((response)=>{
              console.log(response)
              this.tableData=response.data.data.list;
            },function(err){
                console.log(err);
            })
        },

      //增加行
      addRow () {
          var list = {
            rowNum: '',
            firstWhy: this.firstWhy,
            secondWhy: this.secondWhy,
            thirdWhy: this.thirdWhy,
            fourthWhy: this.fourthWhy,
            fifthWhy: this.fifthWhy,
            }
          this.tableData.unshift(list)
        },

      //编辑行
      handleEdit(index, row) {
                  this.idx = index;
                  const item = this.tableData[index];
                  this.form = {
                      firstWhy: item.firstWhy,
                      secondWhy: item.secondWhy,
                      thirdWhy: item.thirdWhy,
                      fourthWhy: item.fourthWhy,
                      fifthWhy: item.fifthWhy,
                  }
                  this.editVisible = true;
      },
      saveEdit() {
                  this.$set(this.tableData, this.idx, this.form);
                  this.editVisible = false;
                  this.$message.success(`修改第 ${this.idx+1} 行成功`);
      },
      

     
      //删除行
      handleDelete(index, row) {
                this.idx = index;
                this.delVisible = true;
            },
      delAll() {
                const length = this.multipleSelection.length;
                let str = '';
                this.del_list = this.del_list.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + ' ';
                }
                this.$message.error('删除了' + str);
                this.multipleSelection = [];
            },
      handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 确定删除
      deleteRow(){
                this.tableData.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
            }    
    },
    //数据刷新
    mounted(){
      this.getData();
    }
}
</script>

<style>

.el-form-item{margin-bottom: 8px;width:195px;text-align: right;}
.ycfl,.cpqf{margin-bottom:0;text-align:left;margin-left:10px;width:800px;}
.el-input__inner{height:24px;line-height: 24px;color:#34495e;border-radius: 2px;width: 124px;font-size:12px;}
.el-form-item__label{color:#34495e;font-size:12px;}
.el-tabs__item{height:26px;line-height: 26px;font-size:12px;}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{color:#34495e;}
.el-form-item__label{height:24px;line-height: 24px;padding-right:8px;}
.el-form-item__content{line-height: 24px;}
.el-form--inline .el-form-item{margin-right:4px;}
.el-date-editor.el-input, .el-date-editor.el-input__inner{width:100px;font-size:12px;}
.el-input__icon{line-height: 24px;}
.hxrq,.ycnr,.yccl{text-align: left;padding-left:10px;}
.el-checkbox__label,.el-radio__label {font-size:12px;color:#34495e;}
.el-checkbox__inner,.el-radio__inner{width:12px;height:12px;}
.el-table td, .el-table th{padding:4px 0;font-weight: normal;color:#34495e;}
.cell{font-size:12px;color:#4d6d8c}
.cell input{width:100%;border:none;}
.el-textarea__inner{font-size:12px;color:#4d6d8c;}
.el-button{padding: 4px 6px;font-size:12px;border-radius: 2px;}
.el-tabs--border-card{-webkit-box-shadow:none;margin:5px 0;}
.el-button--mini{padding:4px 6px;}
.sbr{width:100px;}
.el-tabs--border-card>.el-tabs__content{padding:8px 15px;}
.el-form-item__error{font-size: 6px;position:unset;text-align: left;}
</style>