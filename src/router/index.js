import Vue from "vue";
import VueRouter from "vue-router";
import tcRoutes from "./tc";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/role",
    name: "role",
    component: () => import(/* webpackChunkName: "role" */ "../views/Role.vue")
  },
  {
    path: "/tc",
    component: () => import(/* webpackChunkName: "TC" */ "../views/TC/TC.vue"),
    redirect: { name: "tc-cogs-tca" },
    children: tcRoutes
  }
];

const router = new VueRouter({
  routes
});

export default router;
