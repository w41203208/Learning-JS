import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/student/student.vue'
import Null from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {  // 404
    path: "*", 
    redirect: '/404',
    hidden: true
  },
  { // 404 page
    path: '/404',
    name: '404',
    component: Null,
    hidden: true
  },
  { // home is student
    path: '/',
    name: 'Home',
    redirect: "/student",
    component: Home
  },
  { 
    path: '/student',
    name: 'student',
    component: Home
  },
  { 
    path: '/notice',
    name: 'notice',
    redirect: 'notice/notice-list',
    component: () => import(/* webpackChunkName: "about" */ '../views/notice/notice.vue'),
    children:[
      {
        path: 'notice-list',
        name: 'notice-list',
        component: () => import('../views/notice/tabs/notice-list'),
      },
      {
        path: 'notice-banner',
        name: 'notice-banner',
        component: () => import('../views/notice/tabs/notice-banner'),
      }
    ]
  },
  { path: '/class',
    name: 'class',
    redirect: 'class/class-list',
    component: () => import(/* webpackChunkName: "about" */ '../views/class/class.vue'),
    children:[
      {
        path: 'class-list',
        name: 'class-list',
        component: () => import('../views/class/tabs/class-list'),
      },
      {
        path: 'class-status-list',
        name: 'class-status-list',
        component: () => import('../views/class/tabs/class-status-list'),
      }
    ]
  },
  { path: '/account',
    name: 'account',
    component: () => import('../views/account/account.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior () { // scroll to top when routing
    return { x: 0, y: 0, behavior: 'smooth'};
  }
})

export default router
