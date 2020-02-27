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
    path: "/tc/price-simulation/tc",
    name: "tc-price-simulation-tc",
    component: () =>
      import(
        /* webpackChunkName: "tc-price-simulation-tc" */ "../views/TC/PriceSimulation/AllTC.vue"
      )
  },
  {
    path: "/tc/price-simulation/ndt",
    name: "tc-price-simulation-ndt",
    component: () =>
      import(
        /* webpackChunkName: "tc-price-simulation-ndt" */ "../views/TC/PriceSimulation/NDT.vue"
      )
  },
  {
    path: "/tc/price-simulation/calibration",
    name: "tc-price-simulation-calibration",
    component: () =>
      import(
        /* webpackChunkName: "tc-price-simulation-calibration" */ "../views/TC/PriceSimulation/Calibration.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
