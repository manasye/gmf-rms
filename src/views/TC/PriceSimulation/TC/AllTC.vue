<template>
  <div class="page">
    <v-breadcrumbs :items="items" />
    <h1 class="page-title text-uppercase">
      Pricing Simulation TC{{ $route.query.type }}
    </h1>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <div class="main-actions justify-content-start">
          <v-btn color="#82B900" class="button"
            ><v-icon>cloud_download</v-icon>
            <p>Download</p></v-btn
          >
          <v-btn color="#82B900" class="button" @click="goToNewPage"
            ><v-icon>mdi-plus</v-icon>
            <p>New Price</p></v-btn
          >
          <v-btn color="#82B900" class="button"
            ><v-icon>mdi-filter</v-icon>
            <p>Filter</p></v-btn
          >
          <v-btn color="#82B900" class="button"
            ><v-icon>check_box</v-icon>
          </v-btn>
        </div></v-col
      >
      <v-col cols="2" class="text-right ">
        <p class="mb-0">Items per page</p>
      </v-col>
      <v-col cols="2" class="text-right ">
        <v-select
          :items="perPageOptions"
          v-model="perPage"
          hide-details
          dense
          solo
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="search"
          prepend-inner-icon="search"
          label="Search"
          single-line
          hide-details
          dense
        ></v-text-field
      ></v-col>
    </v-row>

    <!--    <v-data-table-->
    <!--      v-model="selected"-->
    <!--      :headers="headers"-->
    <!--      :items="desserts"-->
    <!--      :single-select="singleSelect"-->
    <!--      :search="search"-->
    <!--      item-key="name"-->
    <!--      show-select-->
    <!--      class="mt-3"-->
    <!--      no-data-text="No Data Available"-->
    <!--      no-results-text="No Data Available"-->
    <!--      fixed-header-->
    <!--    >-->
    <!--    </v-data-table>-->

    <b-table
      class="mt-3"
      :items="prices"
      :fields="fields"
      responsive
      fixed
    ></b-table>
  </div>
</template>

<script>
import { perPageOptions } from "@/utility/var.js";

export default {
  data() {
    return {
      items: [
        {
          text: "Price Simulation",
          disabled: true
        },
        {
          text: "TC" + this.$route.query.type.toUpperCase()
        }
      ],
      perPageOptions,
      perPage: "10",
      singleSelect: false,
      selected: [],
      search: "",
      fields: [
        {
          key: "id",
          stickyColumn: true,
          class: "stick"
        },
        {
          key: "a",
          class: "stick-2"
        },
        {
          key: "b",
          class: "stick-2"
        }
      ],
      prices: [
        {
          id: 1,
          a:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, cupiditate debitis delectus dolorum eius est eum excepturi ipsa, iste iusto modi nemo odit perferendis porro recusandae, repudiandae sequi ut?",
          b:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, cupiditate debitis delectus dolorum eius est eum excepturi ipsa, iste iusto modi nemo odit perferendis porro recusandae, repudiandae sequi ut?"
        }
      ]
    };
  },
  methods: {
    goToNewPage() {
      this.$router.push(
        "/tc/price-simulation/tc/new?type=" + this.$route.query.type
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../../styles/page.scss";
</style>
