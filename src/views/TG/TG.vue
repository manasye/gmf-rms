<template>
  <v-content>
    <navbar
      :items="navItems"
      v-if="$route.name !== 'login' && $route.name !== 'role'"
    ></navbar>
    <div>
      <toolbar
        v-if="$route.name !== 'login' && $route.name !== 'role'"
      />
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
    Toolbar,
  },
  data() {
    return {
      navItems: [
        {
          title: "G-SMART Dashboard",
          icon: "mdi-view-dashboard",
          route: ""
        },
        {
          title: "Report",
          icon: "mdi-chart-bar-stacked",
          route: ""
        },
        {
          title: "Data SWIFT",
          icon: "mdi-chart-timeline",
          route: ""
        },
        {
          title: "Logistic",
          icon: "mdi-view-dashboard",
          route: "",
          childrens: [
            { title: "Dashboard Logistic", icon: "mdi-receipt", route: "" },
            { title: "Target Logistic", icon: "mdi-receipt", route: "" },
            { title: "Cost Approval", icon: "mdi-receipt", route: "" },
            { title: "Simulation", icon: "mdi-receipt", route: "" },
            { title: "Price List", icon: "mdi-receipt", route: "" },
            { title: "Master Jisdor", icon: "mdi-receipt", route: "" },
            { title: "Transfer Data", icon: "mdi-receipt", route: "" },
            { title: "Master Customer", icon: "mdi-receipt", route: "" },
            { title: "Master Company", icon: "mdi-receipt", route: "" },
            { title: "User Logistic", icon: "mdi-receipt", route: "" }
          ]
        },
        { title: "Progress Billing", icon: "mdi-receipt", route: "" },
        { title: "Log Out", icon: "mdi-power", route: "/logout" }
      ]
    };
  }
}
</script>

<style lang="scss">

</style>