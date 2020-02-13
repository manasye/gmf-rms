<template>
  <v-app>
    <v-content> <router-view></router-view></v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
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