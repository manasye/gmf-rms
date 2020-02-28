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
        <div class="main-actions justify-content-start">
          <v-btn
            :color="filterSelected ? '#669903' : '#82B900'"
            class="button"
            v-if="withFilter"
            @click="selectFilter"
            ><v-icon>mdi-filter</v-icon>
            <p>Filter</p></v-btn
          >
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
    </div>
    <div class="table-wrapper mt-5">
      <b-table
        id="table"
        :items="itemTables"
        :fields="fieldsLocal"
        :per-page="perPage"
        :current-page="currentPage"
        no-border-collapse
        responsive
        hover
        striped
        show-empty
      >
        <template v-slot:head(checked)>
          <v-checkbox
            class="mt-0 pt-0"
            hide-details
            light
            v-model="selectAll"
          ></v-checkbox>
        </template>
        <template v-slot:cell(checked)="data">
          <v-checkbox
            class="mt-0 pt-0"
            v-model="checked.find(c => c.no === data.item.no).checked"
          ></v-checkbox
        ></template>
        <template v-slot:cell(actions)>
          <v-row dense>
            <v-btn
              small
              color="rgb(240, 131, 8)"
              min-width="5"
              class="btn-table-action"
            >
              <v-icon color="white" small>close</v-icon>
            </v-btn>
            <v-btn small color="#82B900" min-width="5" class="btn-table-action">
              <v-icon color="white" small>edit</v-icon>
            </v-btn>
            <v-btn small color="red" min-width="5" class="btn-table-action">
              <v-icon color="white" small>close</v-icon>
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
    <div class="table-pagination mt-5 mb-4">
      <p class="pagination-info">
        Showing {{ showedIndex.start }} to {{ showedIndex.end }} of
        {{ itemsLength }} entries
      </p>
      <b-pagination
        v-model="currentPage"
        :total-rows="itemsLength"
        :per-page="perPage"
        aria-controls="table"
        align="right"
        first-text="First"
        last-text="Last"
        prev-text="Prev"
        next-text="Next"
      />
    </div>
  </div>
</template>

<script>
import ViewTableColumn from "./ViewTableColumn";

export default {
  props: ["items", "fields", "withFilter"],
  data() {
    return {
      viewColumn: false,
      currentPage: 1,
      perPage: 5,
      itemsValues: [5, 10, 25, 50],
      fieldsDict: {},
      fieldsLocal: [],
      checked: [],
      itemTables: [],
      filterSelected: false
    };
  },
  components: {
    ViewTableColumn
  },
  created() {
    this.itemTables = this.items;
    this.fieldsLocal = this.fields;
    this.checked = this.items.map(i => {
      return {
        no: i.no,
        checked: false
      };
    });
    this.fields.map((field, i) => {
      this.fieldsDict[field.key] = {
        idx: i,
        data: field
      };
    });
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
    },
    selectAll: {
      get: function() {
        return this.itemTables === this.checked.filter(c => c.checked);
      },
      set: function(value) {
        this.checked = this.itemTables.map(i => {
          return {
            no: i.no,
            checked: value
          };
        });
      }
    }
  },
  methods: {
    setFieldsLocal(val) {
      let fieldsLocal = [];
      if (this.fieldsDict["actions"]) {
        fieldsLocal.push(this.fieldsDict["actions"].data);
      }
      if (this.fieldsDict["no"]) {
        fieldsLocal.push(this.fieldsDict["no"].data);
      }
      val.map(v => {
        if (v.value) {
          fieldsLocal.push(this.fieldsDict[v.key].data);
        }
      });
      this.fieldsLocal = fieldsLocal;
    },
    selectFilter() {
      if (this.filterSelected) {
        this.itemTables = this.items;
      } else {
        this.itemTables = this.items.filter(
          item => this.checked.find(c => c.no === item.no).checked
        );
      }
      this.filterSelected = !this.filterSelected;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/page";
@import "@/styles/_variables";

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
