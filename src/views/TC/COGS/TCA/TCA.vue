<template>
  <div class="page">
    <view-column />
    <v-breadcrumbs :items="items" />
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
</template>

<script>
import ViewColumn from './ViewColumn';

export default {
  components: {
    ViewColumn,
  },
  data() {
    return {
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