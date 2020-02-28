<template>
  <div class="page">
    <v-breadcrumbs :items="items" />
    <h1 class="page-title">New Price</h1>
    <v-form class="form">
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          <h2 class="form-section">LRU DATA</h2></v-col
        ></v-row
      >
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Price Simulation",
          disabled: true
        },
        {
          text: "TC" + this.$route.query.type.toUpperCase(),
          href: "/#/tc/price-simulation/tc?type=" + this.$route.query.type
        },
        {
          text: "New Item",
          disabled: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/page.scss";
@import "@/styles/_variables.scss";
@import "@/styles/form.scss";
</style>
