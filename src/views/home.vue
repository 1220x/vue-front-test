<template>
    <div class="home-frame flex-row">
        <div class="home-frame-left flex-column">
            <div class="home-frame-left-title flex-row common-red">
                <div class="home-title-icon"></div>
                山西证券RPA平台
            </div>
            <div :class="isActiveTab == '1' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(1)" :class="isActiveTab == 1 ? 'home-frame-left-item-con-active': ''" class="home-frame-left-item-con flex-row">
                    <div class="left-item-con-item">任务总览</div>
                </div>
            </div>
            <div :class="isActiveTab == '2' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(2)" :class="isActiveTab == 2 ? 'home-frame-left-item-con-active': ''"  class="home-frame-left-item-con flex-row">
                    <div class="left-item-con-item">任务管理</div>
                </div>
            </div>
        </div>
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
                <div class="center-content">

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
                                prop="ID"
                                label="任务ID">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="任务名称">

                            </el-table-column>
                            <el-table-column
                                prop="person"
                                label="责任人">

                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="处理时间">

                            </el-table-column>
                            <el-table-column
                                prop="status"
                                label="实例状态">

                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- <div class="home-frame-right">
            <router-view></router-view>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            test: '主页--测试',
            image:{
                backgroundImage: "url(" + require("../assets/bg-image.jpg") + ")"
            },
            tableData: [
                { ID: '1', name: '任务1', person: 'Lisa', time: '2020/12/12', status: '执行完成' },
                { ID: '2', name: '任务2', person: 'Tom', time: '2020/12/12', status: '执行完成' },
                { ID: '3', name: '任务3', person: 'lisa', time: '2020/12/12', status: '未完成' },
                { ID: '4', name: '任务4', person: 'Jessic', time: '2020/12/12', status: '执行完成' },
                { ID: '5', name: '任务5', person: 'lisa', time: '2020/12/12', status: '执行完成' },
            ],
            pagger: {
                size: 10,
                current: 1
            },
            isActiveTab: 1

        }
    },
    methods: {
        tabChange(val) {
            this.isActiveTab = val;
            if(val === 1) {
                this.$router.push('/home/taskManagment');
            } else if(val === 2) {
                this.$router.push('/home/missionOverview');
            }
        }
    }
}
</script>

<style>

.home-frame {
    width: 100%;
    height: 100%;
}

.home-frame-left  {
    width: 206px;
    height: 100%;
    flex: 0 0 206px;
    background-color: #ffffff;
}

.home-frame-left-title {
    height: 60px;
    font-size: 16px;
    color: #31394d;
    align-items: center;
    justify-content: center;
}

.home-title-icon{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid #4072ee;
    margin-right: 10px;
}

.home-frame-left-item {
    width: 100%;
    height: 48px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.home-frame-left-item-border {
    border-right: 4px solid #4072ee;
}

.home-frame-left-item-con {
    width: 172px;
    height: 100%;
    border-radius: 4px;
    color: #31394d;
    justify-content: center;
    align-items: center;
}

.home-frame-left-item-con-active {
    background-color: #4072ee;
    color: #ffffff;
}

.home-frame-right {
    flex: 1 1;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: 100% 240px;
    margin-left: 5px;
    background-color: #f5f6fa;
}

.home-frame-right-top {
    height: 56px;
    flex: 0 0 56px; 
    position: relative;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}

.top-left {
    width: 200px;
    align-items: center;
}

.top-left-icon {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background-color: rgba(245, 246, 250, 0.4);
    margin-right: 16px;
}

.top-left-text{
    font-size: 20px;
    color: #ffffff;
}

.top-right {
    align-items: center;
}

.top-right-text {
    font-size: 14px;
    color: #ffffff;
}

.top-right-icon {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    margin-left: 16px;
    background-color: rgba(255, 255, 255, 0.8);
}

.home-frame-right-center {
    width: 100%;
    height: 144px;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
    margin-top: 90px;
}

.center-content {
    height: 100%;
    border-radius: 12px;
    background-color: #ffffff;
}

.home-frame-right-bottom {
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
    margin-top: 32px;
}

.bottom-centent {
    border-radius: 12px;
    background-color: #ffffff;
    padding: 25px 32px;
}

.bottom-content-btn-box {
    margin-top: 24px;
    margin-bottom: 24px;
}

.btn-unhandle {
    margin-left: 5px;
    margin-right: 8px;
}

</style>