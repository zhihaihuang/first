<template>
  <div id="app">
      <!-- 上 -->

         
        <el-tabs type="border-card">
          <el-tab-pane label="基本信息">
             <el-form :inline="true" :model="formInline" class="demo-form-inline" style="padding-left:5px;">
                <el-form-item label="报告编号">
                  <el-input v-model="formInline.reportCode"></el-input>
                </el-form-item>
                <!-- <el-form-item label="发生日期">
                  <el-input v-model="formInline.reportDate"></el-input>
                </el-form-item> -->
                <el-form-item label="部  门">
                  <el-input v-model="formInline.deptId "></el-input>
                </el-form-item>
                <el-form-item label="操作人">
                  <el-input v-model="formInline.operator"></el-input>
                </el-form-item>
                

                <el-form-item label="报告类别" style="">
                  <template slot-scope="scope"> 
                  <el-select v-model="formInline.reportType" placeholder="请选择" class="sbr" style="padding-right:25px;" >
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                 </template>
                </el-form-item>

                <el-form-item label="责任人">
                  <el-input v-model="formInline.chargePerson"></el-input>
                </el-form-item>
                <el-form-item label="损失费用">
                  <el-input v-model="formInline.failureCost "></el-input>
                </el-form-item>
                <el-form-item label="报告序号">
                  <el-input v-model="formInline.reportSortId"></el-input>
                </el-form-item>

                <el-form-item label="类     别">
                  <template slot-scope="scope"> 
                  <el-select v-model="formInline.catalog" placeholder="请选择" class="sbr" style="padding-right:25px;" >
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                 </template>
                </el-form-item>
     
                <el-form-item label="缸号/单号">
                  <el-input v-model="formInline.prodCode"></el-input>
                </el-form-item>
                <el-form-item label="工厂款号">
                  <el-input v-model="formInline.styleCode"></el-input>
                </el-form-item>
                <el-form-item label="机      台">
                  <el-input v-model="formInline.machinePlatform"></el-input>
                </el-form-item>
                <el-form-item label="颜      色">
                  <el-input v-model="formInline.prodColor"></el-input>
                </el-form-item>
                <el-form-item label="疋     数">
                  <el-input v-model="formInline.prodCount"></el-input>
                </el-form-item>
                <el-form-item label="重      量">
                  <el-input v-model="formInline.prodWeight"></el-input>
                </el-form-item>

                <el-form-item label="班      次">
                  <template slot-scope="scope"> 
                  <el-select v-model="formInline.scheduleType" placeholder="请选择" class="sbr" style="padding-right:25px;" >
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                 </template>
                </el-form-item>

                <el-form-item label="布      类">
                  <el-input v-model="formInline.clothclass"></el-input>
                </el-form-item>
                <el-form-item label="供  应  商">
                  <el-input v-model="formInline.clothType"></el-input>
                </el-form-item>
                <el-form-item label="客      户">
                  <el-input v-model="formInline.customer"></el-input>
                </el-form-item>
                <el-form-item label="组 织">
                  <el-input v-model="formInline.woven"></el-input>
                </el-form-item>
                <el-form-item label="回修日期" style="width:200px;" class="hxrq">
                  <el-date-picker v-model="formInline.value1"  type="date" placeholder="选择日期" style="width:100px;"></el-date-picker>
                </el-form-item>     
                <br>
                <el-form-item label="异常内容" style="width:460px;" class="ycnr">
                  <el-input type="textarea" v-model="formInline.returnAlterDate" style="width:400px;"></el-input>
                </el-form-item>
                <el-form-item label="异常处理方案" style="width:480px;" class="yccl">
                  <el-input type="textarea" v-model="formInline.failureSolution" style="width:400px;"></el-input>
                </el-form-item>
              
        
            </el-form>
            
             <el-form ref="listForm" :model="listForm" label-width="">
                <el-form-item label="异常分类："  class="ycfl" >
                  <el-checkbox-group v-model="listForm.type">
                    <el-checkbox  label="染色" name="type"></el-checkbox>
                    <el-checkbox label="人工原因" name="type"></el-checkbox>
                    <el-checkbox label="方法原因" name="type"></el-checkbox>
                    <el-checkbox label="设备原因" name="type"></el-checkbox>
                    <el-checkbox label="定型" name="type"></el-checkbox>
                    <el-checkbox label="其他" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>    
              </el-form>
              <el-form ref="form" :model="form" label-width="">
                <el-form-item label="产品区分：" class="cpqf">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="开发"></el-radio>
                    <el-radio label="量产"></el-radio>
                  </el-radio-group>
                </el-form-item>

              <el-form-item label="工序步骤描述" style="width:480px;" class="yccl">
                  <el-input type="textarea" v-model="formInline.desc2" style="width:400px;"></el-input>
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

              <!-- <el-table-column prop="title" label="1Why" sortable width="200">
                    <template slot-scope="scope">
                       <template v-if="scope.row.edit">
                          <el-input class="edit-input" size="small" v-model="scope.row.title"></el-input>            
                      </template>
                      <span v-else>{{ scope.row.title }}</span>
                    </template>
                </el-table-column> -->

              <el-table-column label="1Why"  width="200">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.firstWhy"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="2Why"  width="200">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.secondWhy"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="3Why"  width="200">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.thirdWhy"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="4Why"  width="200">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.fourthWhy"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="5Why"  width="200">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.fifthWhy"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="操作"  width="80">
                <template slot-scope="scope">
                  <!-- <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
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

      listForm:{
         type: []
      },
      formInline:{
        reportCode:'',
        reportDate:'',
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
         value1:'',
        returnAlterDate:'',
        failureSolution:'',
        desc2:'',
      },
      form: {
                title: '',
                originator_dept_name: '',
                status: '',
                why4: '',
                why5: '',
               
                desc: '',
                desc1: '',
                desc2:''
                },
      value1:'',
      editVisible: false,
      delVisible: false,
      formInline: {
          user: '',
          region: ''
        },
        tableData: []
    }  
  },
  methods: {
    //增加行
    addRow () {
        var list = {
          rowNum: '',
          title: this.title,
          originator_dept_name: this.originator_dept_name,
          status: this.status,
          why4: this.why4,
          why5: this.why5,
          }
        this.tableData.unshift(list)
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
        //编辑行
      // handleEdit(index, row) {
      //             this.idx = index;
      //             const item = this.tableData[index];
      //             this.form = {
      //                 title: item.title,
      //                 originator_dept_name: item.originator_dept_name,
      //                 status: item.status,
      //                 why4: item.why4,
      //                 why5: item.why5,
      //             }
      //             this.editVisible = true;
      // },
      // saveEdit() {
      //             this.$set(this.tableData, this.idx, this.form);
      //             this.editVisible = false;
      //             this.$message.success(`修改第 ${this.idx+1} 行成功`);
      // },
      //
      handleAdd() {
                const row ={edit:true,title:'',bank:'',staffId:0,bankNo:''}
                this.tableData.unshift(row)
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

.el-form-item{margin-bottom: 8px;width:190px;text-align: right;}
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
.el-input__suffix{}
</style>