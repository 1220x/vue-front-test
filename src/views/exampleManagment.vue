<template>
    <div class="container flex-column">
        <div class="header flex-row">
            <div class="left flex-row">
                <div class="icon">
                    <i class="iconfont iconiconset0177"></i>
                </div>
                <div class="title">实例管理</div>
            </div>
            <div class="right flex-row">
                <div class="text">欢迎您admin</div>
                <div class="icon">
                    <i class="iconfont iconiconset0177"></i>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="button flex-row">
                <div>
                    <el-button type="primary" icon="el-icon-search" @click="dialogTableVisible = true">补录</el-button>
                    <el-button type="primary">删除<i class="el-icon-upload el-icon--right"></i></el-button>
                </div>
                
                <div class="right flex-row">
                    <div>
                        <span class="iconfont iconiconset0177">筛选</span>
                    </div>
            </div>
            </div>
            <div class="table">
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
                    prop="resperson"
                    label="责任人"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="start"
                    label="开始时间"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="over"
                    label="结束时间"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="alltime"
                    label="总耗时"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="repeat"
                    label="重复次数"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="sta"
                    label="实例状态"
                    width="120">
                        <!-- <template slot-scope="scope">
                            <span v-if="scope.row.sta === '冻结'" class="status-box status-frozen">{{ scope.row.sta }}</span>
                            <span v-if="scope.row.sta === '未执行'" class="status-box status-error">{{ scope.row.sta }}</span>
                            <span v-if="scope.row.sta === '执行中'" class="status-box status-doing">{{ scope.row.sta }}</span>
                            <span class="addStyle">{{ scope.row.sta }}</span>
                        </template> -->
                        <template slot-scope="scope">
                            <span v-if="scope.row.sta === '执行完成'" class="status-box status-complete">{{ scope.row.sta }}</span>
                            <span v-if="scope.row.sta === '未执行'" class="status-box status-doing">{{ scope.row.sta }}</span>
                            <span v-if="scope.row.sta === '执行异常'" class="status-box status-error">{{ scope.row.sta }}</span>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="query.pageNum"
                    :page-sizes="[2, 3, 4, 5]"
                    :page-size="query.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="query.total"
                ></el-pagination>
            </div>
            <el-dialog
            title="补录"
            :visible.sync="dialogTableVisible"
            class="dialog-small"
            width="50%"
            @close="addDialogClosed">
            <div>请选择补录日期</div>
                <el-table :data="gridData">
                    <el-table-column property="name" label="参数名称" width="150"></el-table-column>
                    <el-table-column property="type" label="参数类型" width="200"></el-table-column>
                    <el-table-column property="num" label="参数值">
                        <template>
                            <div class="block">
                                <span class="demonstration">默认</span>
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                            </div>
                            <div class="block">
                                <span class="demonstration">带快捷选项</span>
                                <el-date-picker
                                v-model="value2"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions">
                                </el-date-picker>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible ">确 定</el-button>
            </span>
        </el-dialog>
        </div>
        
        
    </div>
</template>

<script>
export default {
          
  
    data() {
        return {
            gridData: [{
            name: 'data',
            type: '引用类型',
            num: ''
            }, {
            name: 'data',
            type: '引用类型',
            num: ''
            }],
            dialogTableVisible: false,
            dialogVisible: false,
            //table 表数据
            tableData: [],
            //分页数据
            query: {
                pageNum: 1,
                pageSize: 3,
                total: 0
            }
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
        //table总数据
        const DataAll = [{
                    id: "2020081717223001",
                    name: "测试流程",
                    resperson: "admin",
                    start: "2020/09/09  14:50",
                    over: "2020/09/09  14:50",
                    alltime: "1m23s",
                    repeat: "3/5",
                    sta: "执行完成"
                },{
                    id: "2020081717223001",
                    name: "测试流程",
                    resperson: "admin",
                    start: "2020/09/09  14:50",
                    over: "2020/09/09  14:50",
                    alltime: "1m23s",
                    repeat: "3/5",
                    sta: "执行异常"
                },{
                    id: "2020081717223001",
                    name: "测试流程",
                    resperson: "admin",
                    start: "2020/09/09  14:50",
                    over: "2020/09/09  14:50",
                    alltime: "1m23s",
                    repeat: "3/5",
                    sta: "未执行"
                },{
                    id: "2020081717223001",
                    name: "测试流程",
                    resperson: "admin",
                    start: "2020/09/09  14:50",
                    over: "2020/09/09  14:50",
                    alltime: "1m23s",
                    repeat: "3/5",
                    sta: "执行完成"
                },{
                    id: "2020081717223001",
                    name: "测试流程",
                    resperson: "admin",
                    start: "2020/09/09  14:50",
                    over: "2020/09/09  14:50",
                    alltime: "1m23s",
                    repeat: "3/5",
                    sta: "执行异常"
                },{
                    id: "2020081717223001",
                    name: "测试流程",
                    resperson: "admin",
                    start: "2020/09/09  14:50",
                    over: "2020/09/09  14:50",
                    alltime: "1m23s",
                    repeat: "3/5",
                    sta: "未执行"
                },{
                    id: "2020081717223001",
                    name: "测试流程",
                    resperson: "admin",
                    start: "2020/09/09  14:50",
                    over: "2020/09/09  14:50",
                    alltime: "1m23s",
                    repeat: "3/5",
                    sta: "执行完成"
                },{
                    id: "2020081717223001",
                    name: "测试流程",
                    resperson: "admin",
                    start: "2020/09/09  14:50",
                    over: "2020/09/09  14:50",
                    alltime: "1m23s",
                    repeat: "3/5",
                    sta: "未执行"
                }];
                
        //每次执行方法，将展示的数据清空
        this.tableData=[]
        //第一步：当前页的第一条数据在总数据中的位置
        let strlength = (this.query.pageNum - 1) * this.query.pageSize + 1;
        //第二步：当前页的最后一条数据在总数据中的位置
        let endlength = this.query.pageNum * this.query.pageSize;
        //第三步：此判断很重要，执行时机：当分页的页数在最后一页时，进行重新筛选获取数据时
        //获取本次表格最后一页第一条数据所在的位置的长度
        let resStrLength=0
        if(DataAll.length % this.query.pageSize == 0){
            resStrLength = (parseInt(DataAll.length / this.query.pageSize)-1) * this.query.pageSize + 1
        }else{
            resStrLength = parseInt(DataAll.length / this.query.pageSize) * this.query.pageSize + 1
        }
        //如果上一次表格的最后一页第一条数据所在的位置的长度 大于 本次表格最后一页第一条数据所在的位置的长度，则将本次表格的最后一页第一条数据所在的位置的长度 为最后长度
        if(strlength>resStrLength){
            strlength=resStrLength
        }
        //第四步：此判断很重要，当分页的页数切换至最后一页，如果最后一页获取到的数据长度不足最后一页设置的长度，则将设置的长度 以 获取到的数据长度 为最后长度
        if (endlength > DataAll.length) {
            endlength = DataAll.length;
        }
        //第五步：循环获取当前页数的数据，放入展示的数组中
        for (let i = strlength - 1; i < endlength; i++) {
            this.tableData.push(DataAll[i]);
        }
        //数据的总条数
        this.query.total = DataAll.length;
        },
        //切换当前页显示的数据条数，执行方法
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.query.pageSize=val
        this.getData()
        },
        //切换页数，执行方法
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.query.pageNum=val
        this.getData()
        }
    }
}
</script>

<style scoped>
.container {
    height: 100%;
    flex: 1 1;
    background-color: #f5f6fa;
    margin: 30px 40px;
}

.header {
    width: 100%;
    display: flex;
    justify-content: space-between;    
}

.icon {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left {
    align-items: center;
}

.right {
    align-items: center;

}

.title {
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #31394D;
    margin-left: 16px;
}

.text {
    margin-right: 5px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #748AA1;
    text-align: right;
}

.content {
    height: 100%;
    background: #FFFFFF;
    margin-top: 20px;
    border-radius: 12px;
}

.button {
    display: flex;
    justify-content: space-between;
    margin: 10px 10px;
}

.status-box {
    /* width: 76px;
    height: 28px; */
    border-radius: 10px;
}

.status-complete {
    padding: 5px 14px;
    background: rgba(246,88,96,0.10);
}

.status-error {
    background: rgba(181,88,246,0.10);
    padding: 5px 14px;
}

.status-doing {
    background: rgba(254,196,0,0.10);
    padding: 5px 20px;

}

.el-pagination {
  margin-top: 15px;
}

/deep/ .el-dialog {
    border-radius: 10px;
}
</style>