<template>
    <div class="flex-row">
        <div class="left-content" style="width: 500px;">
            <router-view></router-view>
        </div>
        <div class="right-content">
            <div class="navbar flex-row">
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
                    <el-button type="primary" plain>新建</el-button>
                    <el-button type="primary" plain>启用</el-button>
                    <el-button type="primary" plain>编辑</el-button>
                    <el-button type="primary" plain>复制</el-button>
                    <el-button type="primary" plain>禁用</el-button>
                    <el-button type="primary" plain>删除</el-button>
                    <el-button type="primary" plain>解冻</el-button>  
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
        </div>
    </div>
</template>
<script>
  export default {
    methods: {
        gotoManagment() {
                        // this.$router.replace({name:'TaskManagment'});
                        //通过push进行跳转，可以返回
                        this.$router.push('/taskmanagment')
                    },
        gotoOverview() {
            this.$router.push('/missionOverciew')
        },
        toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
          multipleSelection: []

};
    }
  };
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

.flex-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
}

.left-content {
    width: 206px;
    /* height: 100%; */
    height: 900px;
    background-color: #fff;
}

.right-content {
    height: 900px;
    margin-left: 38px;
    position: relative;
    top: 30px;
    /* flex: 1; */
}

.nav-item {
    width: 150px;
    height: 48px;
    line-height: 48px;
    margin-left: 16px;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 14px;
}

.nav-item:hover {
    background-color: #4072EE;
    border-radius: 4px;
}

.left-top {
    width: 129px;
    height: 22px;
    padding-left: 52px;
}

.content {
    width: 1154px;
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

.icon {
    color: #ff0000;
    font-size: 14px;
}
</style>