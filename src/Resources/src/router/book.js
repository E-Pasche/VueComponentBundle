export default [
  {
    name: "BookList",
    path: "/books/",
    component: () =>
      import(/* webpackChunkName: "book" */ "@/components/book/List"),
  },
  {
    name: "BookCreate",
    path: "/books/create",
    component: () =>
      import(/* webpackChunkName: "book" */ "@/components/book/Create"),
  },
  {
    name: "BookUpdate",
    path: "/books/edit/:id",
    component: () =>
      import(/* webpackChunkName: "book" */ "@/components/book/Update"),
  },
  {
    name: "BookShow",
    path: "/books/show/:id",
    component: () =>
      import(/* webpackChunkName: "book" */ "@/components/book/Show"),
  },
];
