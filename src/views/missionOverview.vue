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
                    <div class="border" style="background-color: #4072EE;
                    opacity: 10%;"></div>
                    <div>
                        <div class="num">120</div>
                        <div style="font-family: PingFangSC-Medium;color: #748AA1;font-size: 14px;">调度任务总数</div> 
                    </div>     
                </div>
                <div class="management flex-row">
                    <div class="border" style="background-color: #B558F6;
                    opacity: 10%;"></div>
                    <div>
                        <div class="num">300</div>
                        <div style="font-family: PingFangSC-Medium;color: #748AA1;font-size: 14px;">调度实例总数</div>
                    </div>                   
                </div>
                <div class="management flex-row">
                    <div class="border" style="background-color: #FEC400;
                    opacity: 10%;"></div>
                    <div>
                        <div class="num">35</div>
                        <div style="font-family: PingFangSC-Medium;color: #748AA1;font-size: 14px;">执行中实例数</div>
                    </div>                   
                </div>
                <div class="management flex-row">
                    <div class="border" style="background-color: #29CB97;
                    opacity: 10%;"></div>
                    <div>
                        <div class="num">360</div>
                        <div style="font-family: PingFangSC-Medium;color: #748AA1;font-size: 14px;">执行完成实例数</div>
                    </div>                  
                </div>
                <div class="management flex-row">
                    <div class="border" style="background-color: #F65860;
                    opacity: 10%;"></div>
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
                    "sta": "执行异常"
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
                    "sta": "执行异常"
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