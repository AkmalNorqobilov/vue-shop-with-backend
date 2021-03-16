import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import Signup from '../components/register/Signup.vue'
import Login from '../components/register/Login.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/signup',
        component: Signup
      },
      {
        path:'/login',
        component: Login
      },
      
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta:{requiresAuth:true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:About
  },
  {
    'path':'/admin',
    component:Admin
  }
]

const router = new VueRouter({
  routes
})
let a= true;
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(a && store)
    next();
    else
    next('/admin')
  }else{
    next();
  }
})
export default router
