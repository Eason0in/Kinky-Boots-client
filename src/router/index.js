import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Book from '@/components/Book'
import Shop from '@/components/Shop'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})
