<template>
  <v-container>
    <h3 class="header-text">Pricing Simulation TC{{ $route.query.type }}</h3>
    <v-row>
      <v-col cols="2" align-self="end">
        <v-btn small color="primary" depressed block
          ><v-icon left>mdi-download</v-icon>Download</v-btn
        >
      </v-col>
      <v-col cols="2" align-self="end">
        <v-btn small color="primary" depressed block
          ><v-icon left>mdi-plus</v-icon>New Price</v-btn
        >
      </v-col>
      <v-col cols="2" align-self="end">
        <v-btn small color="primary" depressed block
          ><v-icon left>mdi-filter</v-icon>Filter</v-btn
        >
      </v-col>
      <v-col cols="3"></v-col>
      <v-col cols="3">
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
      :items="items"
      :fields="fields"
      responsive
      fixed
    ></b-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
      items: [
        {
          id: 1,
          a:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, cupiditate debitis delectus dolorum eius est eum excepturi ipsa, iste iusto modi nemo odit perferendis porro recusandae, repudiandae sequi ut?",
          b:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, cupiditate debitis delectus dolorum eius est eum excepturi ipsa, iste iusto modi nemo odit perferendis porro recusandae, repudiandae sequi ut?"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
