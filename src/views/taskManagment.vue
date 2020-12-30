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
    </div>
</template>
<script>
  export default {
    methods: {
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
      return {

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

.left-top {
    width: 129px;
    height: 22px;
    padding-left: 52px;
}



</style>