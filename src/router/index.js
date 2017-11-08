import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Product from '@/view/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    }
  ]
})
