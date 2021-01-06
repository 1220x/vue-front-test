<template>
    <div class="flex-row">
        <div class="left-content" style="width: 206px;">
            <div class="left-top" style="margin-top:27px">
                山西证券PRA平台
            </div>
            <div class="nav flex-column" style="background-color: #ffffff;">
                <div @click="gotoOverview" class="nav-item">任务总览<span>></span></div>
                <div @click="gotoManagment" class="nav-item">任务管理<span>></span></div>
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
                <div>
                    <el-table
                        :data="tableData"
                        style="width: 100%"
                        :row-class-name="tableRowClassName">
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
                <!-- 分页 -->
                
                <div class="block" style="margin-top:100px">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
                </div>
                <!-- <div class="data flex-row" style="background: rgba(64,114,238,0.10);
                border-radius: 6px;justify-content: space-between;">
                    <div>任务id</div>
                    <div>任务名称</div>
                    <div>责任人</div>
                    <div>开始时间</div>
                    <div>总耗时</div>
                    <div>实例状态</div>
                </div>
                <div v-for="(item, index) in tableData.data" :key="index" class="data flex-row" style="background:#ffffff;
                border-radius: 6px;justify-content: space-between">
                  <div>{{ item.id }}</div>
                  <div>{{ item.name }}</div>
                  <div>{{ item.resperson }}</div>
                  <div>{{ item.time }}</div>
                  <div>{{ item.spend }}</div>
                  <div style="width:76px;height:28px;line-height:28px;text-align:center;background-color:#F65860;opacity: 10%;border-radius:6px">
                      {{ item.sta }}
                  </div>
                </div> -->
                <!-- <div class="data flex-row" style="background:#F5F6FA ;
                border-radius: 6px;justify-content: space-between;">
                    
                </div>
                <div class="data flex-row" style="background:#ffffff;
                border-radius: 6px;justify-content: space-between;">

                </div>
                <div class="data flex-row" style="background:#F5F6FA ;
                border-radius: 6px;justify-content: space-between;">
                    
                </div> -->
            </div>
        </div>  
    </div>
</template>

<script>
import axios from "axios";
export default {
        name: "MissionOverview",
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                return 'warning-row';
                } else if (rowIndex === 3) {
                return 'success-row';
                }
                return '';
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            gotoManagment() {
                // this.$router.replace({name:'TaskManagment'});
                //通过push进行跳转
                this.$router.push('/taskmanagment')
            },
            gotoOverview() {
                this.$router.push('/missionOverciew')
            }
            },
        data() {
            // return {
            //     tableData:[]
            // }
            return {
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
                    
                    currentPage: 4
                }        
        },
        mounted() {
            // this.getData();
        },
        // methods: {
        //     getData() {

        //         axios.get('http://localhost:8080/static/test.json').then(response => {
                    
        //             console.log(response.data);

        //             this.tableData = response.data;

        //             console.log(this.tableData.data);

        //         }, response => {
        //             console.log("error");
        //         });
        //     }
        // }
    }


</script>
<style scoped>
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

.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  
  .management {
      display: flex;
      justify-content: flex-start;
      align-items: center;
  }
</style>