<template>
  <v-app>
    <v-content>
      <navbar
        :items="navItems"
        v-if="$route.name !== 'login' && $route.name !== 'role'"
      ></navbar>
      <div>
        <toolbar
          v-if="$route.name !== 'login' && $route.name !== 'role'"
        />
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Toolbar,
  },
  data() {
    return {
      navItems: [
        {
          title: "COGS",
          icon: "mdi-view-dashboard",
          route: "",
          childrens: [
            { title: "TCA", icon: "mdi-view-dashboard", route: "/login" },
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
            { title: "TCA", icon: "mdi-receipt", route: "" },
            { title: "TCE", icon: "mdi-receipt", route: "" },
            { title: "TCW", icon: "mdi-receipt", route: "" },
            { title: "NDT", icon: "mdi-receipt", route: "" },
            { title: "Calibration", icon: "mdi-receipt", route: "" }
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
</style>
