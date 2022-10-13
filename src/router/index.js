import { createRouter, createWebHistory } from 'vue-router'
import authentication from "../middleware/authentication"
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    // component: () => import('../views/Contact.vue')
    component: Contact,
    // meta: { middleware: [authentication],}
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/user/:id',
    name: 'User',
    component: User
  },  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
