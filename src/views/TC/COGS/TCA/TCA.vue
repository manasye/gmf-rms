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
    <div class="table-wrapper">
      <b-table
        id="table"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        no-border-collapse
        responsive
        hover
        striped
      >
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
    <div class="table-pagination">
      <p class="pagination-info">
        Showing {{ showedIndex.start }} to {{ showedIndex.end }} of {{ itemsLength }} entries
      </p>
      <b-pagination
        v-model="currentPage"
        :total-rows="itemsLength"
        :per-page="perPage"
        aria-controls="table"
        align="right"
        first-text="First"
        last-text="Last"
        prev-text="Previous"
        next-text="Next"
      >
        <!-- <template v-slot:page="{ page, active }">
        </template> -->
      </b-pagination>
    </div>
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
      items: [],
      currentPage: 1,
      perPage: 5,
      fields: [
        { key: 'actions', label: 'Actions', stickyColumn: true },
        { key: 'no', sortable: true },
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
  },
  computed: {
    itemsLength() {
      return this.items.length;
    },
    showedIndex() {
      let start = (this.currentPage - 1) * this.perPage + 1;
      let end = start + this.perPage - 1;
      return { start, end };
    }
  },
  created() {
    // For sample purposes, TODO: erase this
    let obj = {
      id: '09249498-232323-2222',
      partNumber: '300048-200',
      description: 'AIR3100 Headset, AIR100L Headphone',
      manufacturer: 'TELEX',
      ata: 23,
      dgca: 4,
      faa: 0,
    };
    for (let i=0; i<20; i++) {
      this.items.push({
        no: i + 1,
        ...obj
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/page.scss';
@import '@/styles/_variables';

.table-wrapper {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  margin-bottom: 8px;
}

.page-item.active .page-link {
  background: $green;
}

.v-application ul {
  padding-left: 0;
}

.table-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .pagination-info {
    font-size: 0.9rem;
    color: gray;
  }
}
</style>