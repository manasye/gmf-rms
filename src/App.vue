<template>
  <v-app>
    <v-content>
      <navbar
        :items="navItems"
        v-if="$route.name !== 'login' && $route.name !== 'role'"
      ></navbar>
      <router-view></router-view
    ></v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      navItems: [
        {
          title: "COGS",
          icon: "mdi-view-dashboard",
          route: "",
          childrens: [
            { title: "TCA", icon: "mdi-view-dashboard", route: "" },
            { title: "TCE", icon: "mdi-view-dashboard", route: "" },
            { title: "TCW", icon: "mdi-view-dashboard", route: "" },
            { title: "NDT", icon: "mdi-view-dashboard", route: "" },
            { title: "Calibration", icon: "mdi-view-dashboard", route: "" }
          ]
        },
        {
          title: "Pricing Simulation",
          icon: "mdi-receipt",
          route: "",
          childrens: [
            {
              title: "TCA",
              icon: "mdi-receipt",
              route: "/tc/price-simulation/tc?type=a"
            },
            {
              title: "TCE",
              icon: "mdi-receipt",
              route: "/tc/price-simulation/tc?type=e"
            },
            {
              title: "TCW",
              icon: "mdi-receipt",
              route: "/tc/price-simulation/tc?type=w"
            },
            {
              title: "NDT",
              icon: "mdi-receipt",
              route: "/tc/price-simulation/ndt"
            },
            {
              title: "Calibration",
              icon: "mdi-receipt",
              route: "/tc/price-simulation/calibration"
            }
          ]
        },
        { title: "User Management", icon: "mdi-account-circle", route: "" },
        { title: "Log Out", icon: "mdi-power", route: "/logout" }
      ]
    };
  }
};
</script>

<style>
@font-face {
  font-family: "circularstd";
  src: url("./assets/font/CircularStd-Book.otf");
}
@font-face {
  font-family: "circularstd";
  changesrc: url("./assets/font/CircularStd-Bold.otf");
  font-weight: bold;
}
body,
.v-application {
  font-family: "circularstd", sans-serif !important;
  overflow-x: hidden;
}
.primary-color {
  color: #006198;
}
.header-text {
  text-transform: uppercase;
  color: #006198;
  font-weight: bold;
}
.stick {
  width: 700px !important;
}
.stick-2 {
  width: 300px !important;
}
</style>
