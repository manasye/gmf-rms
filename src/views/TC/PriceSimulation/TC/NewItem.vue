<template>
  <div class="page mb-5">
    <v-breadcrumbs :items="items" />
    <h1 class="page-title">New Price</h1>
    <v-form class="form">
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          <h2 class="form-section">LRU Data</h2>
          <v-text-field
            label="Part Number"
            placeholder="Search"
            outlined
            required
            dense
            prepend-inner-icon="search"
          />
          <v-textarea
            label="Description"
            placeholder="auto"
            height="100"
            outlined
            required
            disabled
            dense
          />
          <v-text-field
            label="Test"
            placeholder="auto"
            outlined
            required
            disabled
            suffix="hours"
            dense
          />
          <v-text-field
            label="Repair"
            placeholder="auto"
            outlined
            required
            disabled
            suffix="hours"
            dense
          />
          <v-text-field
            label="Overhaul"
            placeholder="auto"
            outlined
            disabled
            required
            suffix="hours"
            dense
          />
          <h2 class="form-section">TAT</h2>
          <v-text-field
            label="Test"
            placeholder="auto"
            outlined
            required
            disabled
            suffix="days"
            dense
          />
          <v-text-field
            label="Repair"
            placeholder="auto"
            outlined
            required
            disabled
            suffix="days"
            dense
          />
          <v-text-field
            label="Overhaul"
            placeholder="auto"
            outlined
            disabled
            required
            suffix="days"
            dense
          />
          <v-text-field
            label="Labour Rate"
            placeholder="auto"
            outlined
            disabled
            required
            suffix="USD"
            dense
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <h2 class="form-section">Labor Cost (COGS)</h2>
          <v-text-field
            label="Test"
            placeholder="auto"
            outlined
            required
            disabled
            suffix="USD"
            dense
          />
          <v-text-field
            label="Repair"
            placeholder="auto"
            outlined
            required
            disabled
            suffix="USD"
            dense
          />
          <v-text-field
            label="Overhaul"
            placeholder="auto"
            outlined
            disabled
            required
            suffix="USD"
            dense
          />
          <h2 class="form-section">Material Cost</h2>
          <v-text-field
            label="Repair"
            placeholder="auto"
            outlined
            required
            disabled
            suffix="USD"
            dense
          />
          <v-text-field
            label="Overhaul"
            placeholder="auto"
            outlined
            disabled
            required
            suffix="USD"
            dense
          />
          <h2 class="form-section">Margin</h2>
          <v-text-field
            label="Manhours"
            placeholder="Fill here"
            outlined
            required
            suffix="%"
            dense
          />
          <v-text-field
            label="Material"
            placeholder="Fill here"
            outlined
            required
            suffix="%"
            dense
          />
          <v-textarea
            label="Remark"
            placeholder="Fill here"
            outlined
            required
            dense
            height="100"
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <h2 class="form-section">Fixed Price</h2>
          <v-text-field
            label="Test"
            placeholder="auto"
            outlined
            required
            disabled
            suffix="USD"
            dense
          />
          <v-text-field
            label="Repair"
            placeholder="auto"
            outlined
            required
            disabled
            suffix="USD"
            dense
          />
          <v-text-field
            label="Overhaul"
            placeholder="auto"
            outlined
            disabled
            required
            suffix="USD"
            dense
          />
          <v-btn
            color="#82B900"
            class="button mb-7 d-block mx-auto white--text"
            @click="showModalMarketPrice = true"
            >Market Price</v-btn
          >
          <h2 class="form-section">Margin History</h2>
          <b-table :items="histories"></b-table>
        </v-col>
      </v-row>
    </v-form>
    <div class="page-header">
      <h2 class="form-section">List BDP</h2>
      <div class="main-actions">
        <v-btn color="#82B900" class="button" small>
          <v-icon>cloud_download</v-icon>
          <p>Download</p>
        </v-btn>
        <v-btn color="#82B900" class="button" small>
          <v-icon>cloud_upload</v-icon>
          <p>Upload</p>
        </v-btn>
        <v-btn color="#82B900" class="button" small>
          <v-icon>add</v-icon>
          <p>Material</p>
        </v-btn>
      </div>
    </div>
    <b-table :items="bdps"></b-table>
    <h2 class="form-section">Exclusion</h2>
    <b-table :items="bdps"></b-table>

    <div class="form-action">
      <div class="w-25">
        <v-select
          :items="pnStatus"
          label="PN Status"
          placeholder="Select status"
          outlined
          required
          dense
        />
      </div>
    </div>

    <div class="form-action">
      <v-btn color="#82B900" class="button">Submit</v-btn>
      <v-btn color="grey" class="button">Cancel</v-btn>
    </div>

    <v-dialog v-model="showModalMarketPrice" width="500"
      ><v-card>
        <v-card-title class="headline primary white--text" primary-title>
          Market Price
        </v-card-title>

        <v-card-text class="mt-3">
          <v-row>
            <v-col cols="5" class="pt-1 pb-1">
              <h6 class="blue--text mb-0">PN</h6>
            </v-col>
            <v-col cols="7" class="pt-1 pb-1">a</v-col>
            <v-col cols="5" class="pt-1 pb-1">
              <h6 class="blue--text mb-0">Description</h6>
            </v-col>
            <v-col cols="7" class="pt-1 pb-1">a</v-col>
          </v-row>

          <h2 class="mt-2 mb-2 form-section">Test</h2>
          <v-row>
            <v-col cols="5" class="pt-0 pb-0">
              <p class="mb-0">Market Price</p>
            </v-col>
            <v-col cols="7" class="pt-0 pb-0">a</v-col>
          </v-row>

          <h2 class="mt-2 mb-2 form-section">Repair</h2>
          <v-row>
            <v-col cols="5" class="pt-0 pb-0">
              <p class="mb-0">Market Price (Mhrs Pckg)</p>
            </v-col>
            <v-col cols="7" class="pt-0 pb-0">a</v-col>
            <v-col cols="5" class="pt-2 pb-2">
              <p class="mb-0">Market Price (Fixed Price)</p>
            </v-col>
            <v-col cols="7" class="pt-2 pb-2">a</v-col></v-row
          >

          <h2 class="mt-1 mb-2 form-section">Overhaul</h2>
          <v-row>
            <v-col cols="5" class="pt-0 pb-0">
              <p class="mb-0">Market Price (Mhrs Pckg)</p>
            </v-col>
            <v-col cols="7" class="pt-0 pb-0">a</v-col>
            <v-col cols="5" class="pt-2 pb-2">
              <p class="mb-0">Market Price (Fixed Price)</p>
            </v-col>
            <v-col cols="7" class="pt-2 pb-2">a</v-col></v-row
          >
        </v-card-text>
      </v-card>
    </v-dialog>
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
      ],
      showModalMarketPrice: false,
      pnStatus: ["Foo", "Bar", "Fizz", "Buzz"],
      histories: ["a"],
      bdps: ["a"],
      exclusions: ["a"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/page.scss";
@import "@/styles/_variables.scss";
@import "@/styles/form.scss";
</style>
