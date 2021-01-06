<template>
    <div class="home-frame flex-row">
        <div class="home-frame-left flex-column">
            <div class="home-frame-left-title flex-row common-red">
                <div class="home-title-icon"></div>
                山西证券RPA平台
            </div>
            <div :class="isActiveTab == '1' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(1)" :class="isActiveTab == 1 ? 'home-frame-left-item-con-active': ''" class="home-frame-left-item-con flex-row">
                    <div class="iconfont iconquanlingyuguimo"></div>
                    <div class="left-item-con-item" icon="el-icon-search">任务总览</div>
                    <div class="icon">></div>
                </div>
            </div>
            <div :class="isActiveTab == '2' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(2)" :class="isActiveTab == 2 ? 'home-frame-left-item-con-active': ''"  class="home-frame-left-item-con flex-row">
                    <div class="iconfont iconfenzhi"></div>  
                    <div class="left-item-con-item">任务管理</div>
                    <div class="icon">></div>
                </div>
            </div>
            <div :class="isActiveTab == '3' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(3)" :class="isActiveTab == 3 ? 'home-frame-left-item-con-active': ''"  class="home-frame-left-item-con flex-row">
                    <div class="iconfont icontubiaozhutu"></div>  
                    <div class="left-item-con-item">视图管理</div>
                    <div class="icon">></div>
                </div>
            </div>
            <div :class="isActiveTab == '4' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(4)" :class="isActiveTab == 4 ? 'home-frame-left-item-con-active': ''"  class="home-frame-left-item-con flex-row">
                    <div class="iconfont iconyichulishixiang"></div>
                    <div class="left-item-con-item">实例管理</div>
                    <div class="icon">></div>
                </div>
            </div>
            <div :class="isActiveTab == '5' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(5)" :class="isActiveTab == 5 ? 'home-frame-left-item-con-active': ''"  class="home-frame-left-item-con flex-row">
                    <div class="iconfont icondaibanshixiang"></div>
                    <div class="left-item-con-item">脚本管理</div>
                    <div class="icon">></div>
                </div>
            </div>
            <div :class="isActiveTab == '6' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(6)" :class="isActiveTab == 6 ? 'home-frame-left-item-con-active': ''"  class="home-frame-left-item-con flex-row">
                    <div class="iconfont iconjiekoupeizhi"></div>
                    <div class="left-item-con-item">配置管理</div>
                    <div class="icon">></div>
                </div>
            </div>
            <div :class="isActiveTab == '7' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(7)" :class="isActiveTab == 7 ? 'home-frame-left-item-con-active': ''"  class="home-frame-left-item-con flex-row">
                    <div class="iconfont iconyichulishixiang"></div>
                    <div class="left-item-con-item">系统设置</div>
                    <div class="icon">></div>
                </div>
            </div>
            <div :class="isActiveTab == '8' ? 'home-frame-left-item-border' : ''" class="home-frame-left-item flex-row">
                <div @click="tabChange(8)" :class="isActiveTab == 8 ? 'home-frame-left-item-con-active': ''"  class="home-frame-left-item-con flex-row">
                    <div class="iconfont iconyichulishixiang"></div>
                    <div class="left-item-con-item">用户权限</div>
                    <div class="icon">></div>
                </div>
            </div>
        </div> 
        <div class="home-frame-right">
            <router-view></router-view>
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
            isActiveTab: 1

        }
    },
    methods: {
        tabChange(val) {
            this.isActiveTab = val;
            if(val === 1) {
                this.$router.push('/demo/missionOverview');
            } else if(val === 2) {
                this.$router.push('/demo/taskManagment');
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

.center-content {
    /* width: 1154px; */
    /* flex: 1 1; */
    height: 144px;
    background-color: #ffffff;
    border-radius: 12px;
    /* position: relative;
    top: 144px;
    left: 42px; */
}

.border {
    width: 60px;
    height: 60px;
    margin: 26px 16px 26px 28px;
    border-radius: 10px;
}

.num {
    font-size: 36px;
    font-family: PingFangSC-Medium;
}

.iconfont {
    color: #92929D;
    font-size: 14px;
    position: relative;
    right: 22.5px;
}
</style>