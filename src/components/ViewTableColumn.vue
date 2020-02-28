<template>
  <v-dialog
    v-model="dialog"
    max-width="700px"
  >
    <v-card class="card">
      <p class="header">
        <v-icon>view_list</v-icon>
        Select column to view
      </p>
      <v-checkbox
        v-model="selectAll"
        color="#006198"
        label="Select All"
        hide-details
      />
      <v-row dense>
        <v-col cols="12" lg="4" md="4" sm="4">
          <v-checkbox
            v-for="(item, i) in values"
            v-if="i < 5"
            :key="i"
            color="#006198"
            v-model="item.value"
            :label="item.label"
            hide-details
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="4">
          <v-checkbox
            v-for="(item, i) in values"
            v-if="i >= 5 && i < 10"
            :key="i"
            color="#006198"
            v-model="item.value"
            :label="item.label"
            hide-details
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="4">
          <v-checkbox
            v-for="(item, i) in values"
            v-if="i >= 10 && i < 15"
            :key="i"
            color="#006198"
            v-model="item.value"
            :label="item.label"
            hide-details
          />
        </v-col>
      </v-row>
      <div class="action">
        <v-btn color="#82B900" @click="submit">Submit</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['visible', 'fields'],
  data() {
    return {
      dialog: false,
      selectAll: false,
      values: [],
    }
  },
  created() {
    this.dialog = this.visible;
    this.initValues();
  },
  methods: {
    initValues() {
      this.fields.map(f => {
        if (f.key !== 'actions' && f.key !== 'no') {
          this.values.push({
            key: f.key,
            label: f.label,
            value: true,
          });
        }
      });
    },
    submit() {
      this.$emit('onsubmit', this.values);
      this.dialog = false;
    }
  },
  watch: {
    selectAll(newVal, oldVal) {
      if (newVal && !oldVal) {
        this.values.map(r => (r.value = true));
      }
      if (!newVal && oldVal) {
        let isChange = true;
        this.values.map(r => {
          if (r.value) isChange = false;
        });
        if (isChange) this.values.map(r => (r.value = false));
      }
    },
    visible(newVal, oldVal) {
      if (newVal) this.dialog = newVal;
    },
    dialog(newVal, oldVal) {
      if (!newVal) this.$emit('onclose');
    },
    values: {
      deep: true,
      handler(newVal, oldVal) {
        let val = true;
        newVal.map(n => {
          if (!n.value) val = false;
        });
        this.selectAll = val;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';

.card {
  padding: 18px 14px;
}

.header {
  color: $blue;
  * { color: $blue; }
  font-size: 1.2rem;
  font-weight: 600;
}

.action {
  padding-top: 12px;
  display: flex;
  justify-content: flex-end;
  .v-btn {
    color: white;
  }
}
</style>