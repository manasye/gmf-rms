export default [
  {
    path: "logistic",
    component: () => import(/* webpackChunkName: "cogs" */ "../views/EmptyRouter.vue"),
    redirect: { name: "tc-cogs-tca" },
    children: [
      {
        path: "dashboard",
        name: "tg-log-dashboard",
        component: () =>
          import(
            /* webpackChunkName: "tc-cogs-tca" */ "../views/TG/Logistic/DashboardLogistic/DashboardLogistic.vue"
          )
      },
    ]
  },
];
