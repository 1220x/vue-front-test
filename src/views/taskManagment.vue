<template>
    <div class="navbar">
        <div class="welcome flex-row">
        <div style="width:36px;height:36px;background:#8181A5;border-radius: 6px;opacity: 0.1;"></div>
        <div style="color:#31394D;font-family:PingFangSC-Medium;font-size:20px">
                任务管理
        </div>
        <div>
            <span style="color:#748AA1;font-family:PingFangSC-Regula">欢迎您</span>
            <span style="color:PingFangSC-Medium;color:#31394D">admin!</span>
        </div>
        </div>
        
        <div class="content" style="margin-top:28px">
            <div class="flex-row">
                <el-button type="primary" @click="dialogFormVisible = true">新建</el-button>
                <el-button type="primary" >启用</el-button>
                <el-button type="primary" >编辑</el-button>
                <el-button type="primary" >复制</el-button>
                <el-button type="primary" >禁用</el-button>
                <el-button type="primary" >删除</el-button>
                <el-button type="primary" >解冻</el-button>  
            </div>
            <div>
                <el-table 
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    prop="id"
                    label="任务id"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="任务名称"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="type"
                    label="任务类型"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="depend"
                    label="自依赖"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="foot"
                    label="选择脚本"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="node"
                    label="资源节点"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="time"
                    label="运行周期"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="resperson"
                    label="责任人"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column 
                    label="使用状态"
                    show-overflow-tooltip>
                    <template slot-scope="scope"><span class="addStyle">{{ scope.row.sta }}</span></template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <el-dialog
            title="新建任务"
            :visible.sync="dialogFormVisible"
            class="dialog-small"
            width="50%"
            center
            @close="addDialogClosed">
            <el-form :model="form" >
                <el-form-item label="任务名称" :label-width="formLabelWidth" required>
                    <el-input v-model="form.name" :validate-event="false" autocomplete="off" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="任务类型" :label-width="formLabelWidth" required>
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="title" class="dialog-footer" style="height:56px;width:100%;background:rgba(64,114,238,0.10);border-radius: 12px 12px 0px 0px;">
                <span>这是标题</span>
                <span>这是一段信息</span>
            </div>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
  export default {
    methods: { 
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    }     
},
    data() {
      return {
          tableData:[{
              id: "2020081717223001",
              name: "测试流程",
              type: "RPA",
              depend: "否",
              foot: "脚本名称",
              node: "10.253.46.140",
              time: "每天：00：30",
              resperson: "小王",
              sta: "未执行"
          },{
              id: "2020081717223001",
              name: "测试流程",
              type: "RPA",
              depend: "否",
              foot: "脚本名称",
              node: "10.253.46.140",
              time: "每天：00：30",
              resperson: "小王",
              sta: "未执行"
          },{
              id: "2020081717223001",
              name: "测试流程",
              type: "RPA",
              depend: "否",
              foot: "脚本名称",
              node: "10.253.46.140",
              time: "每天：00：30",
              resperson: "小王",
              sta: "未执行"
          },{
              id: "2020081717223001",
              name: "测试流程",
              type: "RPA",
              depend: "否",
              foot: "脚本名称",
              node: "10.253.46.140",
              time: "每天：00：30",
              resperson: "小王",
              sta: "未执行"
          },{
              id: "2020081717223001",
              name: "测试流程",
              type: "RPA",
              depend: "否",
              foot: "脚本名称",
              node: "10.253.46.140",
              time: "每天：00：30",
              resperson: "小王",
              sta: "未执行"
          },{
              id: "2020081717223001",
              name: "测试流程",
              type: "RPA",
              depend: "否",
              foot: "脚本名称",
              node: "10.253.46.140",
              time: "每天：00：30",
              resperson: "小王",
              sta: "未执行"
          },{
              id: "2020081717223001",
              name: "测试流程",
              type: "RPA",
              depend: "否",
              foot: "脚本名称",
              node: "10.253.46.140",
              time: "每天：00：30",
              resperson: "小王",
              sta: "未执行"
          },{
              id: "2020081717223001",
              name: "测试流程",
              type: "RPA",
              depend: "否",
              foot: "脚本名称",
              node: "10.253.46.140",
              time: "每天：00：30",
              resperson: "小王",
              sta: "未执行"
          },{
              id: "2020081717223001",
              name: "测试流程",
              type: "RPA",
              depend: "否",
              foot: "脚本名称",
              node: "10.253.46.140",
              time: "每天：00：30",
              resperson: "小王",
              sta: "未执行"
          }],
          multipleSelection: [],
          dialogFormVisible: false,
          form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    /* width: 100%; */
}

body {
    background-color: #F5F6FA;
    font-size: 14px;
}

.right-content {
    height: 900px;
    position: relative;
    top: 30px;
}

.content {
    height: 790px;
    background-color: #ffffff;
    border-radius: 12px;
}

.addStyle {
    width: 76px;
    height: 28px;
    background: #B558F6;
    border-radius: 6px;
}

/* .icon {
    color: #ff0000;
    font-size: 14px;
} */

el-form-item {
    display: flex;
    flex-direction: column;
}
</style>