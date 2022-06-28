import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../view/Home'
import PoemsDetail from '../view/PoemsDetail'
import Login from '../view/login/Login'
import Register from '../view/login/Register'
import PersonPage from '../view/private/PersonPage'
import PersonPage1 from '../view/private/PersonPage1'
import PersonPage2 from '../view/private/PersonPage2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/PoemsDetail',
      name: 'PoemsDetail',
      component: PoemsDetail
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/personPage',
      name: 'PersonPage',
      component: PersonPage,
      children: [
        {
          path: '/personPage/personPage1',
          name: 'PersonPage1',
          component: PersonPage1
        },
        {
          path: '/personPage/personPage2',
          name: 'PersonPage2',
          component: PersonPage2
        }
      ]
    }
  
  ]
})
