import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Product from '@/view/Product'
import ProductDetail from '@/view/ProductDetail'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/product/:id',
      component: ProductDetail
    }
  ]
})
