import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import MissionOverview from '@/views/missionOverview'
import TaskManagment from '@/views/taskManagment'
import Demo from '@/views/demo'
import ExampleManagment   from '@/views/exampleManagment'

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
      redirect: '/demo'
    },
    {
      path: '/missionOverview',
      name: 'MissionOverview',
      component: MissionOverview
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'taskManagment',
          component: TaskManagment
        },
        {
          path: 'missionOverview',
          component: MissionOverview
        },
      ]
    },
    {
      path: '/taskManagment',
      name: 'TaskManagment',
      component: TaskManagment
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      redirect: '/demo/missionOverview',
      children: [
        {
          path: 'missionOverview',
          component: MissionOverview
        },
        {
          path: 'taskManagment',
          component: TaskManagment
        },
        {
          path: 'exampleManagment',
          component: ExampleManagment
        }
      ]
    }
  ]
})
