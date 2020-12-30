import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import MissionOverview from '@/views/missionOverview'
import TaskManagment from '@/views/taskManagment'

Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     // 设置默认路由，打开项目时，默认展示home
  //     path: '*',
  //     redirect: '/home'
  //   },
  //   {
  //     path: '/home',
  //     name: 'Home',
  //     component: Home
  //   }
  // ]
  routes: [
    {
      // 设置默认路由，打开项目时，默认展示任务总览
      path: '*',
      redirect: '/missionOverview'
    },
    {
      path: '/missionOverview',
      name: 'MissionOverview',
      component: MissionOverview
    },
    {
      path: '/taskManagment',
      name: 'TaskManagment',
      component: TaskManagment
    }
  ]
})
