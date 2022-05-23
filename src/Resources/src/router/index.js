import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import Test from "../views/Test.vue"
import Main from "../views/Main.vue"
import AddBook from "../views/AddBook.vue"
import List from "../components/book/List.vue"
import Create from "../components/book/Create.vue"

const routes = [
  {
    path: "/",
    name: "Home",    
    displayName: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    displayName: "Test",
    component: Test,
  },
  {
    path: "/main",
    name: "Main",
    displayName: "Début",
    component: Main,
  },  
  {
    path: "/add-book",
    name: "AddBook",
    displayName: "Ajouter un livre",
    component: AddBook,
  },
  {
    path: "/books/",
    name: "BookList",
    displayName: "Liste des livres",
    component: List,
  },
  {
    name: "BookCreate",
    path: "/books/create",
    displayName: "Ajouter un livre",
    component: Create,
  }, 
]

const routerComponent = createRouter({
    history: createWebHistory(),
    routes,
  })

const routesComponent = routes;

export {routesComponent, routerComponent}


  // {
  //   name: "BookUpdate",
  //   path: "/books/edit/:id",
  //   component: () =>
  //     import(/* webpackChunkName: "book" */ "@/components/book/Update"),
  //   },
  //   {
  //     name: "BookShow",
  //     path: "/books/show/:id",
  //     component: () =>
  //       import(/* webpackChunkName: "book" */ "@/components/book/Show"),
  //   }, 
