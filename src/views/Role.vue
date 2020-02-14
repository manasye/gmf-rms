<template>
  <div class="role-container" align="center">
    <div class="center">
      <h1 class="mb-10">Welcome!</h1>
      <h3 class="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        adipisci architecto assumenda autem dicta dolor ducimus, eveniet in
        itaque minus molestias odio placeat quae quasi quia repellendus sit sunt
        tempore!
      </h3>
      <v-row>
        <v-col cols="3" v-for="r in roles" :key="r.code" class="role-choose">
          <v-icon color="#fff" class="mb-3 logo">account_box</v-icon>
          <h1 class="mb-3">{{ r.code }}</h1>
          <h3>{{ r.name }}</h3></v-col
        >
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
        { code: "TC", name: "COMPONENT SERVICES" },
        { code: "TG", name: "LOGISTIC, BONDED & MATERIAL SERVICES" },
        { code: "TB", name: "WIDE BODY BASE MAINTENANCE" },
        { code: "TJ", name: "NARROW BODY BASE MAINTENANCE" }
      ]
    };
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
