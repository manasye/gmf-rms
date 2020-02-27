<template>
  <div class="page">
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
      <v-btn color="#82B900" class="button">
        <v-icon>add</v-icon>
        <p>New Item</p>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'COGS',
          disabled: false,
        },
        {
          text: 'TCA',
          disabled: false,
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../styles/page.scss';
</style>