<template>
  <div class="role-container" align="center">
    <div class="center">
      <h2 class="mb-10">Welcome!</h2>
      <h4 class="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        adipisci architecto assumenda autem dicta dolor ducimus, eveniet in
        itaque minus molestias odio placeat quae quasi quia repellendus sit sunt
        tempore!
      </h4>
      <v-row>
        <v-col
          cols="3"
          v-for="r in roles"
          :key="r.code"
          class="role-choose"
          @click="goToRoute(r.route)"
        >
          <v-icon color="#fff" class="mb-3 logo">account_box</v-icon>
          <h2 class="mb-3">{{ r.code }}</h2>
          <h5>{{ r.name }}</h5>
        </v-col>
      </v-row>
      <p class="mt-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, veniam.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: [
        { code: "TC", name: "COMPONENT SERVICES", route: "/tc" },
        {
          code: "TG",
          name: "LOGISTIC, BONDED & MATERIAL SERVICES",
          route: "/tg"
        },
        { code: "TB", name: "WIDE BODY BASE MAINTENANCE", route: "/tc" },
        { code: "TJ", name: "NARROW BODY BASE MAINTENANCE", route: "/tc" }
      ]
    };
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped lang="scss">
.role-container {
  background: url("../assets/img/bg-cbo.jpg");
  background-size: 100% 100%;
  min-height: 100vh;
  color: white;

  .center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 75%;
  }
}

.role-choose {
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.5;
  }

  .logo {
    font-size: 60px;
  }
}
</style>
