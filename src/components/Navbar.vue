<template>
  <v-navigation-drawer color="#006198" dark app>
    <v-img src="../assets/img/logo-white.png" alt="" class="mt-2 mb-2"></v-img>
    <v-divider></v-divider>

    <v-list dense nav>
      <template v-for="item in items">
        <v-list-item
          link
          :key="item.title"
          v-if="!item.childrens"
          @click="goToRoute(item.route)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          :prepend-icon="item.icon"
          active-class="navbar-nested"
          :key="item.title"
          v-else
        >
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(child, i) in item.childrens"
            :key="i"
            link
            class="ml-4"
            @click="goToRoute(child.route)"
          >
            <v-list-item-icon>
              <v-icon v-text="child.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["items"],
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style>
.navbar-nested {
  color: white !important;
}
.v-list-item__icon {
  margin-right: 24px !important;
}
.v-list-group__header__append-icon {
  margin-right: 0px !important;
}
</style>
