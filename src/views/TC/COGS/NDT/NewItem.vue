<template>
  <div class="page">
    <v-breadcrumbs :items="breadcrumbs" />
    <h1 class="page-title">New Item</h1>
    <v-form class="form">
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-text-field
            label="No"
            placeholder="Auto generated"
            disabled
            outlined
            required
            dense
          />
          <v-textarea
            label="Description"
            placeholder="Fill here"
            height="100"
            outlined
            required
            dense
          />
          <v-textarea
            label="Reference Manual"
            placeholder="Fill here"
            height="100"
            outlined
            required
            dense
          />
          <v-text-field
            label="Unit"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="Shop"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="A/C Type"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="Workscope"
            placeholder="Fill here"
            outlined
            required
            dense
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-text-field
            label="Workhours"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="Manpower"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="Labor Cost"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="Tool / Machine Rate"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <h2 class="form-section">Certification Level</h2>
          <v-select
            :items="select"
            label="DCGA"
            placeholder="Select here"
            outlined
            required
            dense
          />
          <v-select
            :items="select"
            label="FAA"
            placeholder="Select here"
            outlined
            required
            dense
          />
          <v-select
            :items="select"
            label="EASA"
            placeholder="Select here"
            outlined
            required
            dense
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-text-field
            label="ARC Rate"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="TAT"
            placeholder="Fill here"
            suffix="days"
            type="number"
            outlined
            required
            dense
          />
          <h2 class="form-section">COGS</h2>
          <v-text-field
            label="Mhrs Rate COGS"
            placeholder="Auto generated"
            disabled
            outlined
            required
            dense
          />
          <v-text-field
            label="Mhrs Rate COGS + ARC"
            placeholder="Auto generated"
            disabled
            outlined
            required
            dense
          />
          <div class="form-action">
            <v-btn color="#82B900" class="button">Submit</v-btn>
            <v-btn color="grey" class="button">Cancel</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "COGS",
          disabled: true
        },
        {
          text: "NDT",
          disabled: false,
          href: "/#/tc/cogs/ndt"
        },
        {
          text: "New Item",
          disabled: false
        }
      ],
      select: ["Foo", "Bar", "Fizz", "Buzz"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables";
@import "@/styles/page.scss";
@import "@/styles/form.scss";
</style>
