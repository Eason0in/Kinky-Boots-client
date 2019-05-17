<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Book from '@/components/Book'
=======
import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Book from "@/components/Book";
import Shop from "@/components/Shop";
<<<<<<< HEAD
=======
>>>>>>> 0eefb1a2fcfcac04548b15e624976a2af21ccaab
>>>>>>> 8d2e457e395eac24e9d47dbfb84f9661c0e1dda3

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
      path: "/Shop",
      name: "Shop",
      component: Shop
    },
  ]
})
