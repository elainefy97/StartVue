import Vue from 'vue'
import Router from 'vue-router'
import test1 from '@/components/page1/test1'
import shoppingcart from '@/components/page1/shoppingcart'
import user from '@/components/page1/user'
import Ffooter from '@/components/all/Ffooter'
import Home from '@/components/Home'
import LoginForm from '@/components/LoginForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
      {
      path: '/newProduct',
      name: 'newProduct',
      component: test1
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }

  ]
})
