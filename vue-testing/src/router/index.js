import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld10x from '@/components/HelloWorld10x'
import HelloWorld100x from '@/components/HelloWorld100x'
import HelloWorld1000x from '@/components/HelloWorld1000x'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/10x',
      name: 'HelloWorld10x',
      component: HelloWorld10x
    },
    {
      path: '/100x',
      name: 'HelloWorld100x',
      component: HelloWorld100x
    },
    {
      path: '/1000x',
      name: 'HelloWorld1000x',
      component: HelloWorld1000x
    }
  ]
})
