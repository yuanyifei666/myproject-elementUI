import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//引入弹框组件1
import DialogComponent from '@/components/DialogComponent'


Vue.use(Router)

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/dialog',
      component: HelloWorld
    },
    {
      path: '/dialog',
      name: 'dialogComponent',
      component: DialogComponent
    }
  ]
})
