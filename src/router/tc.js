export default [
  {
    path: "price-simulation",
    component: () =>
      import(
        /* webpackChunkName: "tc-price-simulation" */ "../views/EmptyRouter"
      ),
    redirect: { name: "tc-price-simulation-tc" },
    children: [
      {
        path: "tc",
        name: "tc-price-simulation-tc",
        component: () =>
          import(
            /* webpackChunkName: "tc-price-simulation-tc" */ "../views/TC/PriceSimulation/TC/AllTC.vue"
          )
      },
      {
        path: "tc/new",
        name: "tc-price-simulation-tc-new",
        component: () =>
          import(
            /* webpackChunkName: "tc-price-simulation-tc-new" */ "../views/TC/PriceSimulation/TC/NewItem.vue"
          )
      },
      {
        path: "ndt",
        name: "tc-price-simulation-ndt",
        component: () =>
          import(
            /* webpackChunkName: "tc-price-simulation-ndt" */ "../views/TC/PriceSimulation/NDT/NDT.vue"
          )
      },
      {
        path: "ndt/:id",
        name: "tc-price-simulation-ndt-detail",
        component: () =>
          import(
            /* webpackChunkName: "tc-price-simulation-ndt-detail */ "../views/TC/PriceSimulation/NDT/Detail.vue"
          )
      },
      {
        path: "calibration",
        name: "tc-price-simulation-calibration",
        component: () =>
          import(
            /* webpackChunkName: "tc-price-simulation-calibration" */ "../views/TC/PriceSimulation/Calibration/Calibration.vue"
          )
      },
      {
        path: "calibration/:id",
        name: "tc-price-simulation-calibration-detail",
        component: () =>
          import(
            /* webpackChunkName: "tc-price-simulation-calibration-detail" */ "../views/TC/PriceSimulation/Calibration/Detail.vue"
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
