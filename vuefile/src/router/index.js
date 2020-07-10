import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import MoreClick from '@/pages/MoreClick'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
    },{
      path: '/moreClick',
      name: 'moreClick',
      component: MoreClick
    }
  ]
})
