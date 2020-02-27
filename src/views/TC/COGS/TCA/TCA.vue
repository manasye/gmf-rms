<template>
  <div class="page">
    <view-column
      :visible="viewColumn"
      @onclose="viewColumn = false"
    />
    <v-breadcrumbs :items="items" />
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
      items: [
        {
          text: 'COGS',
          disabled: true,
        },
        {
          text: 'TCA',
          disabled: false,
        },
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