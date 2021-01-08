<template>
    <div :style="image" class="home-frame-right flex-column">
            <div class="home-frame-right-top flex-row">
                <div class="top-left flex-row">
                    <div class="top-left-icon"></div>
                    <div class="top-left-text">总览</div>
                </div>
                <div class="top-right flex-row">
                    <div class="top-right-text">欢迎你admin</div>
                    <div class="top-right-icon"></div>
                </div>
            </div>
            <div class="home-frame-right-center">
                <div class="center-content flex-row">
                    <div class="management flex-row">
                        <div class="border flex-center" style="background-color: rgba(64,114,238,0.10);">
                            <div class="iconfont iconyichulishixiang"></div>
                        </div>
                        <div>
                            <div class="num">120</div>
                            <div style="font-family: PingFangSC-Medium;color: #748AA1;font-size: 14px;">调度任务总数</div> 
                        </div>     
                    </div>
                    <div class="management flex-row">
                        <div class="border flex-center" style="background-color: rgba(181,88,246,0.10);">
                            <div class="iconfont iconyichulishixiang"></div>
                        </div>
                        <div>
                            <div class="num">300</div>
                            <div style="font-family: PingFangSC-Medium;color: #748AA1;font-size: 14px;">调度实例总数</div>
                        </div>                 
                    </div>
                    <div class="management flex-row">
                        <div class="border flex-center" style="background-color: rgba(254,196,0,0.10);">
                            <div class="iconfont icondingdan "></div>
                        </div>
                        <div>
                            <div class="num">35</div>
                            <div style="font-family: PingFangSC-Medium;color: #748AA1;font-size: 14px;">执行中实例数</div>
                        </div>                   
                    </div>
                    <div class="management flex-row">
                        <div class="border flex-center" style="background-color:  rgba(41,203,151,0.10);">
                            <div class="iconfont icondingdan "></div>
                        </div>
                        <div>
                            <div class="num">360</div>
                            <div style="font-family: PingFangSC-Medium;color: #748AA1;font-size: 14px;">执行完成实例数</div>
                        </div>                  
                    </div>
                    <div class="management flex-row">
                        <div class="border flex-center" style="background-color:  rgba(246,88,96,0.10);">
                            <div class="iconfont icondingdan "></div>
                        </div>
                        <div>
                            <div class="num">5</div>
                            <div style="font-family: PingFangSC-Medium;color: #748AA1;font-size: 14px;">执行异常实例数</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-frame-right-bottom">
                <div class="bottom-centent flex-column">
                    <div class="bottom-content-title">待办已办</div>
                    <div class="bottom-content-btn-box flex-row">
                        <el-button type="plain"  class="btn-unhandle">待办任务</el-button>
                        <el-button class="btn-handle">已办任务</el-button>
                    </div>
                    <div class="bottom-content-table flex-column">
                        <el-table
                            stripe
                            style="width: 100%"
                            :data="tableData"
                            :pagger="pagger"
                            >
                            <el-table-column
                            prop="id"
                            label="任务id"
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="任务名称"
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="resperson"
                            label="责任人">
                            </el-table-column>
                            <el-table-column
                            prop="time"
                            label="开始时间">
                            </el-table-column>
                            <el-table-column
                            prop="spend"
                            label="总耗时">
                            </el-table-column>
                            <el-table-column
                            prop="sta"
                            label="实例状态">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.sta === '执行完成'" class="status-box status-complete">{{ scope.row.sta }}</span>
                                    <span v-if="scope.row.sta === '执行异常'" class="status-box status-error">{{ scope.row.sta }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Demo',
    data() {
        return {
            image:{
                backgroundImage: "url(" + require("../assets/bg-image.jpg") + ")"
            },
            tableData: [{
                    "id": "2020081717223001", 
                    "name": "测试流程", 
                    "resperson": "admin", 
                    "time": "2020-08-18", 
                    "spend": "1h20m30s", 
                    "sta": "执行异常"
                    }, {
                    "id": "2020081717223002", 
                    "name": "测试流程", 
                    "resperson": "Harmen Porter", 
                    "time": "2020-08-18", 
                    "spend": "1h20m30s", 
                    "sta": "执行完成"
                    }, {
                    "id": "2020081717223003", 
                    "name": "测试流程", 
                    "resperson": "admin", 
                    "time": "2020-08-18", 
                    "spend": "1h20m30s", 
                    "sta": "执行异常"
                    }, {
                    "id": "2020081717223004", 
                    "name": "测试流程", 
                    "resperson": "Harmen Porter", 
                    "time": "2020-08-18", 
                    "spend": "1h20m30s", 
                    "sta": "执行完成"
                    }],
            pagger: {
                size: 10,
                current: 1
            },
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.home-frame-right {
    height: 100%;
}

.iconfont {
    text-align: center;
    font-size: 20px;
}

.iconyichulishixiang {
    color: #297dea;
}

.management {
    align-items: center;
    margin-right: 30px;
}

.management::after {
    content: "";
    height: 40px;
    width: 2px;
    background-color: #EBEDF4;
    margin-left: 20px;
}

.border {
    width: 60px;
    height: 60px;
    margin-right: 16px;
    border-radius: 10px;
    font-size: 20px;
}

.center-content {
    padding-left: 30px;
    padding-right: 30px;
    justify-content: space-between;
}

.status-box {
    padding: 5px 14px;
    border-radius: 6px;
}

.status-complete {
    background-color: rgba(41,203,151,0.10);
    color:  #29CB97;
}

.status-error {
    background-color: rgba(246,88,96,0.10);
    color: #F65860;
}
</style>