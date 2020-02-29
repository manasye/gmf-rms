<template>
  <div class="page mb-5">
    <v-breadcrumbs :items="items" />
    <h1 class="page-title">1</h1>
    <v-form class="form">
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-textarea
            label="Description"
            placeholder="auto"
            height="100"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-textarea
            label="Group"
            placeholder="auto"
            height="60"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-textarea
            label="Model / PN"
            placeholder="auto"
            height="60"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-text-field
            label="Manufacturer"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-text-field
            label="TAT"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            suffix="day(s)"
            dense
          />
          <h2 class="form-section">TAT</h2>
          <v-text-field
            label="COGS"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-text-field
            label="Margin"
            placeholder="Fill Here"
            outlined
            required
            dense
            suffix="%"
          />
          <v-text-field
            label="Saleable COGS"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-textarea
            label="Remark"
            placeholder="auto"
            height="60"
            outlined
            required
            :disabled="!editing"
            dense
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <h2 class="form-section">Margin History</h2>
          <b-table :items="histories"></b-table>
        </v-col>
      </v-row>
    </v-form>

    <div class="page-header">
      <v-spacer />
      <div class="main-actions">
        <v-btn color="#82B900" class="button" @click="editing = !editing">
          <v-icon>edit</v-icon>
          <p>Edit</p>
        </v-btn>
      </div>
    </div>
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
          text: "Calibration",
          href: "/#/tc/price-simulation/calibration"
        },
        {
          text: "1",
          disabled: false
        }
      ],
      editing: false,
      histories: ["a"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/page.scss";
@import "@/styles/_variables.scss";
@import "@/styles/form.scss";
</style>
