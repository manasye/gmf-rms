<template>
  <div class="page">
    <v-breadcrumbs :items="breadcrumbs" />
    <div class="page-header">
      <h1 class="page-title">Dashboard Logistic</h1>
    </div>
    <v-row class="db-filters" dense>
      <v-col
        v-for="i in 8"
        :key="i"
        cols="12"
        lg="3"
        md="3"
        sm="3"
      >
        <v-select
          label="Customer"
          placeholder="Select"
          dense
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Logistic',
          disabled: true,
        },
        {
          text: 'Dashboard',
          disabled: false,
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/page.scss';

.db-filters {
  margin-top: 20px;
}
</style>