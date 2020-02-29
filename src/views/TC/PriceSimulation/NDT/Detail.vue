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
            label="Reference Manual"
            placeholder="auto"
            height="100"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-text-field
            label="Unit"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-text-field
            label="Shop"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-text-field
            label="A/C Type"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-textarea
            label="Work Scope"
            placeholder="auto"
            height="60"
            outlined
            required
            :disabled="!editing"
            dense
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-text-field
            label="Manpower"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <h2 class="form-section">Certification Level</h2>
          <v-text-field
            label="DCGA"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-text-field
            label="FAA"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-text-field
            label="EASA"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-text-field
            label="ARC Rate"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
          <v-text-field
            label="TAT"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            suffix="day(s)"
            dense
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <h2 class="form-section">COGS</h2>
          <v-text-field
            label="Mhrs Rate COGS"
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
          <v-textarea
            label="Remark"
            placeholder="auto"
            height="60"
            outlined
            required
            :disabled="!editing"
            dense
            value="aaa"
          />
          <v-text-field
            label="Mhrs Rate Saleable"
            placeholder="auto"
            outlined
            required
            :disabled="!editing"
            dense
          />
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
          text: "NDT",
          href: "/#/tc/price-simulation/ndt"
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
