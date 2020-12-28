<template>
        <div class="flex-row">
        <div class="left-content" style="width: 206px;">
            <div class="left-top">
                山西证券PRA平台
            </div>
            <div class="nav flex-column" style="background-color: #ffffff;">
                <div class="nav-item">任务总览<span>></span></div>
                <div class="nav-item">任务管理<span>></span></div>
                <div class="nav-item">视图管理<span>></span></div>
                <div class="nav-item">实例管理<span>></span></div>
                <div class="nav-item">脚本管理<span>></span></div>
                <div class="nav-item">配置管理<span>></span></div>
                <div class="nav-item">系统设置<span>></span></div>
                <div class="nav-item">用户权限<span>></span></div>
            </div>
        </div>
        <div class="right-content">
            <img src="../assets/Bg Image.jpg" alt="">
            <div class="center-content flex-row" >
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
            <div class="main-content">
                <div style="margin-top: 25px;">
                    待办已办
                </div>
                <div style="margin-top: 33px;margin-bottom: 24px;">
                    <button type="button">待办任务</button>
                    <button type="button">已办任务</button>
                </div>
                <div class="data flex-row" style="background: rgba(64,114,238,0.10);
                border-radius: 6px;justify-content: space-between;">
                    <div>任务id</div>
                    <div>任务名称</div>
                    <div>责任人</div>
                    <div>开始时间</div>
                    <div>总耗时</div>
                    <div>实例状态</div>
                </div>
                <div v-for="(item, index) in tableData.data" :key="index" id="data" class="data flex-row" style="background:#ffffff;
                border-radius: 6px;justify-content: space-between;">
                  <div class="test">
                      {{ item.name }}
                  </div>
                </div>
                <div class="data flex-row" style="background:#F5F6FA ;
                border-radius: 6px;justify-content: space-between;">
                
                </div>
                <div class="data flex-row" style="background:#ffffff;
                border-radius: 6px;justify-content: space-between;">

                </div>
                <div class="data flex-row" style="background:#F5F6FA ;
                border-radius: 6px;justify-content: space-between;">
                    
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import axios from "axios";
export default {
        name: "MissionOverview",
        data() {
            return {
                content:"hell0",
                tableData:[]
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {

                axios.get('http://localhost:8080/static/test.json').then(response => {
                    
                    console.log(response.data);

                    this.tableData = response.data;

                    console.log(this.tableData.data);

                }, response => {
                    console.log("error");
                });
            }
        }
    }

// export default {
//     name: 'MissionOverview',
//     data() {
//         return {
//             el : "#data",
//             data : {

//             }
//         }
//     }
// }
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
    height: 900px;
    background-color: #fff;
}

.right-content {
    height: 900px;
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

span {
    position: relative;
    left: 38.4px;
}

.left-top {
    width: 129px;
    height: 22px;
    padding-left: 52px;
}

img {
    width: 1236px;
    height: 240px;
    position: absolute;
}

.center-content {
    width: 1154px;
    height: 144px;
    background-color: #ffffff;
    border-radius: 12px;
    position: relative;
    top: 144px;
    left: 42px;
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

.main-content {
    width: 1154px;
    height: 548px;
    background-color: #ffffff;
    position: absolute;
    top: 320px;
    margin-left: 40px;
    border-radius: 12px;
    padding-left: 40px;
}

button {
    width: 104px;
    height: 40px;
    border-radius: 6px;
    background-color: #4072EE;
    opacity: 10%;
    font-family: PingFangSC-Semibold;
    font-size: 12px;
}

.data {
    width: 1090px;
    height: 56px;
}
</style>