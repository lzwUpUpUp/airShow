// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//全局注册echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//全局注册公用URL
import BaseUrl from './components/url/url'
Vue.prototype.$url = BaseUrl.url.baseUrl


import store from './store/store'




import axios from 'axios'
Vue.prototype.$axios = axios //全局请求

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //把vuex也抛出
  components: { App },
  template: '<App/>'
})
