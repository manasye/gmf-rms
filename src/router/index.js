import Vue from "vue";
import VueRouter from "vue-router";

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
    path: "/tc/price-simulation",
    name: "tc-price-simulation",
    component: () =>
      import(
        /* webpackChunkName: "tc-price-simulation" */ "../views/TC/PriceSimulation.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
