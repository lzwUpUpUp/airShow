import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import drivingPoint from '@/components/drivingPoint/drivingPoint'   //航展乘车点概况
import situation from '@/components/situation/situation'    //整体概况



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/drivingPoint',
    },
    {
      name: 'drivingPoint',
      path: '/drivingPoint',
      component: drivingPoint,
    },
    {
      name: 'situation',
      path: '/situation',
      component: situation,
    }
  ]
})
