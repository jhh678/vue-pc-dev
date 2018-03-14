/*
 * @Author: jhh678
 * @Date: 2017-11-08 18:56:29
 * @Last Modified by: jhh678
 * @Last Modified time: 2018-03-14 17:49:21
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import auth from '@/service/auth'

/* 登录 */
const Login = () =>
  import ('@/views/login')

/* 首页 */
const Home = () =>
  import ('@/views/home')

/* Error404 */
const Error404 = () =>
  import ('@/views/error-404')

/* demo */
const Demo = () =>
  import (/* webpackChunkName: "demo" */ '@/views/demo/demo')

// demo message
const MessageDemo = () =>
  import (/* webpackChunkName: "demo" */ '@/views/demo/message')

// demo reserve
const ReserveDemo = () =>
  import (/* webpackChunkName: "demo" */ '@/views/demo/reserve')

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [{
      path: '*',
      component: Error404,
      meta: {
        hasMaster: false,
        name: '页面去寻找诗和远方了'
      }
    },

    // 根路径,默认登录
    {
      path: '/',
      component: Login,
      meta: {
        hasMaster: false,
        name: '登录'
      }
    },

    // 登录
    {
      path: '/login',
      component: Login,
      meta: {
        hasMaster: false,
        name: '登录'
      }
    },

    // 首页
    {
      path: '/home',
      component: Home,
      meta: {
        hasMaster: true,
        name: '首页'
      }
    },

    // demo
    {
      path: '/demo/demo',
      component: Demo,
      meta: {
        hasMaster: true,
        name: '基本示例'
      }
    },
    {
      path: '/demo/message',
      component: MessageDemo,
      meta: {
        hasMaster: true,
        name: '消息提示'
      }
    },
    {
      path: '/demo/reserve',
      component: ReserveDemo,
      meta: {
        hasMaster: true,
        name: '敬请期待'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
router.beforeEach(async (to, from, next) => {
  if (to.path === '/' || to.path === '/login') {
    next()
  } else {
    if (auth.isLogined()) {
      if (await auth.getUserInfo()) {
        next()
      }
    } else {
      auth.goLogin()
    }
  }
})
router.afterEach((to, from) => {
  if (to.meta.hasMaster) {
    // if (to.path === '/') {
    //   store.dispatch('updateTabIndex', 0)
    //   return
    // }

    let tabs = store.state.openedTabs
    for (let i = 0, len = tabs.length; i < len; i++) {
      if (tabs[i].path === to.path) {
        store.dispatch('updateTabIndex', i)
        return
      }
    }
    if (tabs.length > 9) {
      tabs.splice(1, 1)
    }
    tabs.push({
      path: to.path,
      name: to.meta.name || to.path
    })
    store.dispatch('updateTabIndex', store.state.openedTabs.length - 1)
  }
})
export default router
