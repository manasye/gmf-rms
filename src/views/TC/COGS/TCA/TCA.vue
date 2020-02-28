<template>
  <div class="page">
    <view-column
      :visible="viewColumn"
      @onclose="viewColumn = false"
    />
    <v-breadcrumbs :items="breadcrumbs" />
    <div class="page-header">
      <h1 class="page-title">COGS TCA</h1>
      <div class="main-actions">
        <v-btn color="#82B900" class="button">
          <v-icon>cloud_download</v-icon>
          <p>Download</p>
        </v-btn>
        <v-btn color="#82B900" class="button">
          <v-icon>cloud_upload</v-icon>
          <p>Upload</p>
        </v-btn>
        <v-btn color="#82B900" class="button" @click="goToNewItem">
          <v-icon>add</v-icon>
          <p>New Item</p>
        </v-btn>
      </div>
    </div>
    <div class="table-actions">
      <div class="left">
        <p>Number of items per page</p>
        <v-select
          placeholder="auto"
          :items="itemsValues"
          hide-details
          dense
          solo
        />
      </div>
      <div class="right">
        <v-btn
          color="#82B900"
          class="button"
          @click="viewColumn = !viewColumn"
        >
          <v-icon>view_list</v-icon>
        </v-btn>
        <v-btn color="#82B900" class="button">
          <v-icon>search</v-icon>
        </v-btn>
      </div>
    </div>
    <b-table
      :items="items"
      :fields="fields"
      sticky-header
      no-border-collapse
      responsive
      hover
      striped
    >
      <template v-slot:cell(no)="row">
        {{ row.index + 1 }}
      </template>
      <template v-slot:cell(actions)>
        <v-btn color="rgb(240, 131, 8)" min-width="5" class="btn-table-action">
          <v-icon color="white">close</v-icon>
        </v-btn>
        <v-btn color="#82B900" min-width="5" class="btn-table-action">
          <v-icon color="white">edit</v-icon>
        </v-btn>
        <v-btn color="red" min-width="5" class="btn-table-action">
          <v-icon color="white">close</v-icon>
        </v-btn>
      </template>
      <template v-slot:head()="scope">
        <div class="text-nowrap">
          {{ scope.label }}
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import ViewColumn from './ViewColumn';

export default {
  components: {
    ViewColumn,
  },
  data() {
    return {
      viewColumn: false,
      itemsValues: [
        10, 20, 30,
      ],
      breadcrumbs: [
        {
          text: 'COGS',
          disabled: true,
        },
        {
          text: 'TCA',
          disabled: false,
        },
      ],
      items: [
        {
          id: '09249498-232323-2222',
          partNumber: '300048-200',
          description: 'AIR3100 Headset, AIR100L Headphone',
          manufacturer: 'TELEX',
          ata: 23,
          dgca: 4,
          faa: 0,
        },
        {
          id: '09249498-232323-0000',
          partNumber: '903-200',
          description: 'Aviation Model 903E Microphone',
          manufacturer: 'Electro Voice',
          ata: 23,
          dgca: 4,
          faa: 4,
        }
      ],
      fields: [
        { key: 'actions', label: 'Actions', stickyColumn: true },
        { key: 'no', sortable: true, isRowHeader: true },
        { key: 'partNumber', sortable: true },
        { key: 'description', sortable: true },
        { key: 'manufacturer', sortable: true },
        { key: 'ata', label: 'ATA', sortable: true },
        { key: 'dgca', label: 'DGCA', sortable: true },
        { key: 'faa', label: 'FAA', sortable: true },
      ],
    }
  },
  methods: {
    goToNewItem() {
      this.$router.push('/tc/cogs/tca/new');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../styles/page.scss';
</style>