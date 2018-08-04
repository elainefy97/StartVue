import Vue from 'vue'
import Router from 'vue-router'

import LoginForm from '../components/LoginForm'
import Home from '../components/Home'
import ShoppingCart from '../components/shoppingCart'
import User from '../components/user'
 import HomeIndex from '../components/HomePage/homeIndex'
 import Xinpin from '../components/HomePage/xinpin'
 import Zhongchou from '../components/HomePage/zhongchou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/Home',
      name: 'home',
      component:Home,
      children:[
        {
          path: '/Home/homeIndex',
          name: 'homeIndex',
          component: HomeIndex
        },
        {
          path: '/Home/xinpin',
          name: 'xinpin',
          component: Xinpin
        },
        {
          path: '/Home/zhongchou',
          name: 'zhongchou',
          component: Zhongchou
        },

      ]
    },
    {
      path: '/ShoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
    
    // ,
    // {
    //   path:'/Home/homeIndex',
    //   name:'homeIndex',
    //   component:HomeIndex
    // }

  ]
})
