<template>
  <v-navigation-drawer color="#006198" dark app>
    <v-img src="../assets/img/logo-white.png" alt="" class="mt-2 mb-2"></v-img>
    <v-divider></v-divider>

    <v-list dense nav>
      <template v-for="item in items">
        <v-list-group
          :prepend-icon="item.icon"
          :key="item.title"
          :style="
            activeRoute === item.route
              ? 'background-color: #83be00 !important; border-radius: 4px'
              : ''
          "
          :active-class="!item.childrens ? 'navbar-active' : 'navbar-inactive'"
          :append-icon="item.childrens ? 'keyboard_arrow_down' : ''"
          @click="!item.childrens && goToRoute(item.route)"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(child, i) in item.childrens"
            :key="i"
            link
            @click="goToRoute(child.route)"
            :class="activeRoute === child.route ? 'pl-4 navbar-active' : 'pl-4'"
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
  mounted() {
    this.activeRoute = this.$router.currentRoute.fullPath;
  },
  data() {
    return {
      activeRoute: ""
    };
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    }
  },
  watch: {
    $route() {
      this.activeRoute = this.$router.currentRoute.fullPath;
    }
  }
};
</script>

<style>
.navbar-active {
  color: white !important;
  background-color: #83be00 !important;
  border-radius: 4px;
}
.navbar-inactive {
  color: white !important;
}
.v-list-item__icon {
  margin-right: 24px !important;
}
.v-list-group__header__append-icon {
  margin-right: 0px !important;
}
</style>
