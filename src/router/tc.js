export default [
  {
    path: "price-simulation",
    component: () =>
      import(
        /* webpackChunkName: "tc-price-simulation" */ "../views/EmptyRouter"
      ),
    redirect: { name: "tc-price-simulation-tca" },
    children: [
      {
        path: "tca",
        name: "tc-price-simulation-tca",
        component: () =>
          import(
            /* webpackChunkName: "tc-price-simulation-tc" */ "../views/TC/PriceSimulation/AllTC.vue"
          )
      },
      {
        path: "ndt",
        name: "tc-price-simulation-ndt",
        component: () =>
          import(
            /* webpackChunkName: "tc-price-simulation-calibration" */ "../views/TC/PriceSimulation/Calibration.vue"
          )
      },
      {
        path: "calibration",
        name: "tc-price-simulation-calibration",
        component: () =>
          import(
            /* webpackChunkName: "tc-price-simulation-c" */ "../views/TC/PriceSimulation/NDT.vue"
          )
      }
    ]
  },
  {
    path: "cogs",
    component: () =>
      import(/* webpackChunkName: "cogs" */ "../views/EmptyRouter.vue"),
    redirect: { name: "tc-cogs-tca" },
    children: [
      {
        path: "tca",
        name: "tc-cogs-tca",
        component: () =>
          import(
            /* webpackChunkName: "tc-cogs-tca" */ "../views/TC/COGS/TCA/TCA.vue"
          )
      },
      {
        path: "tca/new",
        name: "tc-cogs-tca-new",
        component: () =>
          import(
            /* webpackChunkName: "tc-cogs-tca-new" */ "../views/TC/COGS/TCA/NewItem.vue"
          )
      }
    ]
  }
];
