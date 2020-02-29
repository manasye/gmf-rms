<template>
  <div class="page">
    <v-breadcrumbs :items="bcItems" />
    <div class="page-header">
      <h1 class="page-title text-uppercase">
        Pricing Simulation TC{{ $route.query.type }}
      </h1>
      <div class="main-actions">
        <v-btn color="#82B900" class="button">
          <v-icon>cloud_download</v-icon>
          <p>Download</p>
        </v-btn>
        <v-btn color="#82B900" class="button" @click="goToNewPage">
          <v-icon>add</v-icon>
          <p>New Price</p>
        </v-btn>
      </div>
    </div>
    <data-table :items="items" :fields="fields" :withFilter="true" />
  </div>
</template>

<script>
import DataTable from "@/components/DataTable";

export default {
  components: {
    DataTable
  },
  data() {
    return {
      bcItems: [
        {
          text: "Price Simulation",
          disabled: true
        },
        {
          text: "TC" + this.$route.query.type.toUpperCase()
        }
      ],
      singleSelect: false,
      selected: [],
      search: "",
      items: [],
      fields: [
        {
          key: "actions",
          label: "Actions",
          class: "table-action",
          stickyColumn: true
        },
        { key: "checked" },
        { key: "no", sortable: true },
        { key: "partNumber", label: "Part Number", sortable: true },
        { key: "description", label: "Description", sortable: true },
        { key: "manufacturer", label: "Manufacturer", sortable: true },
        { key: "ata", label: "ATA", sortable: true },
        { key: "dgca", label: "DGCA", sortable: true },
        { key: "faa", label: "FAA", sortable: true },
        { key: "aircraftType", label: "Aircraft Type", sortable: true },
        { key: "shop", label: "Shop", sortable: true },
        { key: "capLevel", label: "Cap Level DCGA", sortable: true },
        {
          key: "stdManHrs",
          label: "Standard Man Hours (Hour)",
          sortable: true
        },
        { key: "directExpense", label: "Direct Expense", sortable: true },
        { key: "cost", label: "Alloc. Cost", sortable: true }
      ],
      type: ""
    };
  },
  methods: {
    goToNewPage() {
      this.$router.push(
        "/tc/price-simulation/tc/new?type=" + this.$route.query.type
      );
    }
  },
  watch: {
    $route() {
      this.bcItems = [
        {
          text: "Price Simulation",
          disabled: true
        },
        {
          text: "TC" + this.$route.query.type.toUpperCase()
        }
      ];
    }
  },
  created() {
    // For sample purposes, TODO: erase this
    let obj = {
      checked: true,
      id: "09249498-232323-2222",
      partNumber: "300048-200",
      description: "AIR3100 Headset, AIR100L Headphone",
      manufacturer: "TELEX",
      ata: 23,
      dgca: 4,
      faa: 0,
      aircraftType: "Lorem Ipsum",
      shop: "Lorem Ipsum",
      capLevel: "Lorem Ipsum",
      stdManHrs: 5,
      directExpense: 10000,
      cost: 1000000
    };
    for (let i = 0; i < 20; i++) {
      this.items.push({
        no: i + 1,
        ...obj
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../../styles/page.scss";
</style>
