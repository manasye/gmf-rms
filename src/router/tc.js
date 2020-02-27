export default [
  {
    // TODO: change this
    path: "price-simulation",
    name: "tc-price-simulation",
    component: () =>
      import(
        /* webpackChunkName: "tc-price-simulation" */ "../views/TC/PriceSimulation.vue"
      )
  },
  {
    path: "cogs",
    component: () => import(/* webpackChunkName: "cogs" */ "../views/EmptyRouter.vue"),
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
  },
];
