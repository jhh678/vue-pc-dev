/*
 * @Author: jhh678
 * @Date: 2017-11-08 18:43:55
 * @Last Modified by: jhh678
 * @Last Modified time: 2018-01-18 15:21:30
 */
import Vue from 'vue'
import router from '@/router'
import store from '@/store'

/**
 * 用于关闭tab标签页面
 * @param {String} [path=router.history.current.path] - 选传，默认为当前打开页面
 * @returns {Boolean} - 页面成功关闭返回true，否则返回false
 */
Vue.prototype.$closeTabPage = (path = router.history.current.path) => {
  let pathIndex
  let hasPath = store.state.openedTabs.some(function (currentValue, index) {
    if (currentValue.path === path) {
      pathIndex = index
      return true
    }
  })

  if (hasPath) {
    store.state.openedTabs.splice(pathIndex, 1)
    if (store.state.currentTabIndex === pathIndex) {
      store.dispatch('updateTabIndex', pathIndex - 1)
      router.push({
        path: store.state.openedTabs[store.state.currentTabIndex].path
      })
    } else if (store.state.currentTabIndex > pathIndex) {
      store.dispatch('updateTabIndex', store.state.currentTabIndex - 1)
      router.push({
        path: store.state.openedTabs[store.state.currentTabIndex].path
      })
    }
    return true
  }
  return false
}
