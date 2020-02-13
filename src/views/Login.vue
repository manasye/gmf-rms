<template>
  <v-row class="row-login">
    <v-col cols="12" md="8" class="left">
      <img src="../assets/img/logo-white.png" alt class="d-none d-md-block" />
      <v-row align="center" class="desc">
        <div>
          <h2>Welcome to</h2>
          <h1>Revenue Management System for CBO.</h1>
          <hr align="left" />
          <p class="text-italic">Please contact email to access the site</p>
        </div>
      </v-row>
    </v-col>
    <v-col cols="12" md="4">
      <v-row align="center" class="row-login" @keyup.enter="login">
        <div class="r-container">
          <h3
            class="text-center font-weight-bold mb-10 blue--text text--darken-2"
          >
            LOGIN TO GET GOING
          </h3>
          <v-text-field label="Username" v-model="username"></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
            :type="passShow ? 'text' : 'password'"
            label="Password"
            @click:append="passShow = !passShow"
          ></v-text-field>
          <v-row no-gutters class="mt-3">
            <v-col cols="6">
              <v-checkbox
                class="mt-0 pt-0"
                v-model="remember"
                label="Remember Me"
              ></v-checkbox>
            </v-col>
            <v-col cols="6" class="text-right">
              <p @click="console.log('hi')">Forgot Password ?</p>
            </v-col>
          </v-row>
          <v-btn color="primary" @click="login" class="mt-10" block
            >LOGIN</v-btn
          >
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      remember: false,
      username: null,
      password: null,
      passShow: false
    };
  },
  methods: {
    login() {
      console.log("login");
      this.$router.push("/role");
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 2.5rem;
}
.row-login {
  min-height: 100vh;
}
.left,
.right {
  padding: 10px 40px;
}
.left {
  background: url("../assets/img/login-bg.png");
  background-size: 100% 100%;
  padding-right: 180px;
  color: white;
  img {
    width: 300px;
  }
  .desc {
    min-height: calc(100vh - 132px);
    padding: 0 40px;
  }
}
.text-italic {
  font-style: italic;
}
hr {
  width: 15%;
  border-top: 7px solid white;
  margin: 30px 0;
}
.r-container {
  padding: 0 50px;
  width: 100%;
}
@media (max-width: 700px) {
  .row-login {
    min-height: auto;
    margin-bottom: 15px;
  }
  .left {
    margin-bottom: 20px;
    background: url("../assets/img/login-bg.png");
    background-size: cover;
    .desc {
      min-height: 60vh;
    }
  }
  .r-container {
    padding: 0 50px;
  }
}
</style>
