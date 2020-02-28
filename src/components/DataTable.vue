<template>
  <div>
    <view-table-column
      :fields="fields"
      :visible="viewColumn"
      @onclose="viewColumn = false"
      @onsubmit="setFieldsLocal"
    />
    <div class="table-actions">
      <div class="left">
        <p>Number of items per page</p>
        <v-select
          placeholder="auto"
          v-model="perPage"
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
        :fields="fieldsLocal"
        :per-page="perPage"
        :current-page="currentPage"
        no-border-collapse
        responsive
        hover
        striped
      >
        <template v-slot:cell(actions)>
          <v-row dense>
            <v-btn small color="rgb(240, 131, 8)" min-width="5" class="btn-table-action">
              <v-icon color="white">close</v-icon>
            </v-btn>
            <v-btn small color="#82B900" min-width="5" class="btn-table-action">
              <v-icon color="white">edit</v-icon>
            </v-btn>
            <v-btn small color="red" min-width="5" class="btn-table-action">
              <v-icon color="white">close</v-icon>
            </v-btn>
          </v-row>
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
      />
    </div>
  </div>
</template>

<script>
import ViewTableColumn from './ViewTableColumn';

export default {
  props: ['items', 'fields'],
  data() {
    return {
      viewColumn: false,
      currentPage: 1,
      perPage: 5,
      itemsValues: [
        5, 10, 25, 50,
      ],
      fieldsDict: {},
      fieldsLocal: [],
    };
  },
  components: {
    ViewTableColumn,
  },
  created() {
    this.fieldsLocal = this.fields;
    this.fields.map((field, i) => {
      this.fieldsDict[field.key] = {
        idx: i,
        data: field,
      }
    })
  },
  computed: {
    itemsLength() {
      return this.items.length;
    },
    showedIndex() {
      let start = (this.currentPage - 1) * this.perPage + 1;
      let end = start + this.perPage - 1;
      if (end > this.itemsLength) end = this.itemsLength;
      return { start, end };
    }
  },
  methods: {
    setFieldsLocal(val) {
      let fieldsLocal = [];
      if (this.fieldsDict['actions']) {
        fieldsLocal.push(this.fieldsDict['actions'].data);
      }
      if (this.fieldsDict['no']) {
        fieldsLocal.push(this.fieldsDict['no'].data);
      }
      val.map(v => {
        if (v.value) {
          fieldsLocal.push(this.fieldsDict[v.key].data);
        }
      });
      this.fieldsLocal = fieldsLocal;
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/page';
@import '@/styles/_variables';

.btn-table-action {
  margin-right: 5px;
  margin-bottom: 5px;
}

.table-wrapper {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  margin-bottom: 8px;
}

.table-action {
  min-width: 180px;
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