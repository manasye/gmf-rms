<template>
  <div class="page">
    <v-breadcrumbs :items="breadcrumbs" />
    <h1 class="page-title">New Item</h1>
    <v-form class="form">
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-text-field
            label="Part Number"
            placeholder="Fill here"
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
          <v-text-field
            label="Manufacturer"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="ATA"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <h2 class="form-section">Certification Level</h2>
          <v-row dense>
            <v-col>
              <v-select
                :items="select"
                label="DCGA"
                placeholder="Select here"
                outlined
                required
                dense
              />
            </v-col>
            <v-col>
              <v-select
                :items="select"
                label="FAA"
                placeholder="Select here"
                outlined
                required
                dense
              />
            </v-col>
            <v-col>
              <v-select
                :items="select"
                label="EASA"
                placeholder="Select here"
                outlined
                required
                dense
              />
            </v-col>
          </v-row>
          <v-select
            :items="select"
            label="Shop"
            placeholder="Select here"
            outlined
            required
            dense
          />
          <v-select
            :items="select"
            label="Tool / Equipment"
            placeholder="Select here"
            outlined
            required
            dense
          />
          <v-select
            :items="select"
            label="Category"
            placeholder="Select here"
            outlined
            required
            dense
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <h2 class="form-section">TAT</h2>
          <v-text-field
            label="Test"
            placeholder="Fill here"
            suffix="days"
            type="number"
            outlined
            required
            dense
          />
          <v-text-field
            label="Repair"
            placeholder="Fill here"
            suffix="days"
            type="number"
            outlined
            required
            dense
          />
          <v-text-field
            label="Overhaul"
            placeholder="Fill here"
            suffix="days"
            type="number"
            outlined
            required
            dense
          />
          <h2 class="form-section">Man Hours Per Task</h2>
          <v-row dense>
            <v-col>
              <v-text-field
                label="PI"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                label="Test"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                label="Repair"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <v-text-field
                label="Overhaul"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                label="RTS"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
          </v-row>
          <v-text-field
            label="Labour Rate"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="Machine Rate"
            placeholder="Fill here"
            outlined
            required
            dense
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <h2 class="form-section">Standard Man Hourse</h2>
          <v-row dense>
            <v-col>
              <v-text-field
                disabled
                label="Test"
                value="Auto"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                disabled
                label="Repair"
                value="Auto"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                disabled
                label="Overhaul"
                value="Auto"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
          </v-row>
          <h2 class="form-section">COGS</h2>
          <v-row dense>
            <v-col>
              <v-text-field
                disabled
                label="Test"
                value="Auto"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                disabled
                label="Repair"
                value="Auto"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                disabled
                label="Overhaul"
                value="Auto"
                placeholder="Fill here"
                outlined
                required
                dense
              />
            </v-col>
          </v-row>
          <h2 class="form-section">Warranty</h2>
          <v-text-field
            label="Repair"
            placeholder="Fill here"
            outlined
            required
            dense
          />
          <v-text-field
            label="Overhaul"
            placeholder="Fill here"
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
          text: "TCA",
          disabled: true
          // href: '/tc/cogs/tca',
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
