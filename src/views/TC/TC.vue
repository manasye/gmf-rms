<template>
  <v-content>
    <navbar
      :items="navItems"
      v-if="$route.name !== 'login' && $route.name !== 'role'"
    ></navbar>
    <div>
      <toolbar v-if="$route.name !== 'login' && $route.name !== 'role'" />
      <router-view />
    </div>
  </v-content>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: {
    Navbar,
    Toolbar
  },
  data() {
    return {
      navItems: [
        {
          title: "COGS",
          icon: "mdi-view-dashboard",
          route: "",
          childrens: [
            { title: "TC", icon: "mdi-view-dashboard", route: "/tc/cogs/tca" },
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
              title: "TC",
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

<style lang="scss"></style>
