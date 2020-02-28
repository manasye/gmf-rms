import Vue from "vue";
import VueRouter from "vue-router";
import tcRoutes from './tc';
import tgRoutes from './tg';

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
    children: tcRoutes,
  },
  {
    path: "/tg",
    component: () => import(/* webpackChunkName: "TC" */ "../views/TG/TG.vue"),
    redirect: { name: "tg-log-dashboard" },
    children: tgRoutes,
  },
];

const router = new VueRouter({
  routes
});

export default router;
