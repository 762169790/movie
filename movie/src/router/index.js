import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MovieList',
    component:()=>import('../views/MovieList.vue')
  },
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  },{
        path:'/demo',
        name:'demo',
        component: () => import( '../views/demo.vue')

    }*/

    {
        path: '/top',
        name: 'top',
        component:()=>import('../views/Top.vue')
    },{
        path:'/movie',
        name:'movie',
        component:()=>import('../views/detail.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
