import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import List from "../views/List.vue" 
import Login from "../views/Login.vue"
import Perfil from "../views/Perfil.vue"
import Detail from "../views/Detail.vue"
import roleGuard from "./role-guard"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "products" */ '../views/Login.vue')
  },
  {
    path: '/list/',
    //:id',
    name: 'list',
    beforeEnter: [roleGuard],
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    beforeEnter: [roleGuard],
    component: () => import(/* webpackChunkName: "list" */ '../views/Perfil.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    beforeEnter: [roleGuard],
    component: () =>
      import(/*webpackChunkName: detail*/ "../views/Detail.vue"),
    props: (route) => {
    const id = Number(route.params.id);
    const userRole = localStorage.getItem("userRole");
    return isNaN(id) ? { id: null, userRole } : { id, userRole }}
    
  },
  {
    path: "/:pathMatch(.*)",
    component: import(/*webpackChunkName: notFound*/ "../views/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

