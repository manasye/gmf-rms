<template>
  <div class="toolbar">
    <v-btn text icon>
      <v-icon>help_outline</v-icon>
    </v-btn>
    <div class="section">
      <v-btn text icon @click="toggleNotification">
        <v-icon>notifications_none</v-icon>
      </v-btn>
      <div class="notification" v-if="notification">
        <div class="header">
          <p>Notification</p>
          <p class="toggle">Mark all as read</p>
        </div>
        <div class="notification-item new">
          <p class="name">New item added to COGS TCA</p>
          <p class="desc">PN: xxx</p>
          <p class="date">Date, Time: 2 Dec 2019, 07.00 WIB</p>
        </div>
        <div class="notification-item" v-for="i in 3" :key="i">
          <p class="name">New item added to COGS TCA</p>
          <p class="desc">PN: xxx</p>
          <p class="date">Date, Time: 2 Dec 2019, 07.00 WIB</p>
        </div>
      </div>
    </div>
    <!-- <button class="btn">
      <i class="material-icons">notifications_none</i>
    </button> -->
    <div class="user">
      <img src="https://i2.wp.com/ocean-now.org/wp-content/uploads/2019/05/WEB-72dpi-sRGB-OceanNow_InYourFace_JohannesStrate_15799-PhotoBySaskiaUppenkamp-1.jpg?fit=1365%2C2048&ssl=1" alt="" class="photo">
      <div>
        <p class="name">Simon Cowell</p>
        <p class="role">Administrator - TC</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notification: false,
    }
  },
  methods: {
    toggleNotification() {
      this.notification = !this.notification;
    }
  }
};
</script>

<style lang="scss" scoped>
$hovered: rgb(236, 236, 236);

.toolbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 10px;
}

.user {
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition-duration: 0.2s;
  border-radius: 5px;
  &:hover {
    background: $hovered;
  }
  .photo {
    width: 42px;
    height: 42px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 100px;
    margin-right: 13px;
  }

  .name {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .role {
    margin: 0;
    font-size: 0.7rem;
    color: rgb(100, 100, 100);
  }
}

.btn {
  border-radius: 100px;
  height: 35px;
  width: 35px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.2s;
  i {
    color: gray;
    font-size: 1.6rem;
  }
  &:hover {
    background: $hovered;
  }
}

.section {
  margin: 0 5px;
  position: relative;
}

.notification {
  position: absolute;
  right: 0;
  background-color: white;
  z-index: 999;
  border-radius: 6px;
  padding: 8px;
  width: 260px;
  box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
  transform: scale(0,0);
  animation: bummer 0.4s;
  animation-fill-mode: forwards;
}

.notification > .header {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.8rem;
    margin: 0;
  }
}

.notification > .header > .toggle {
  cursor: pointer;
  color: rgb(46, 146, 204);
  font-weight: bold;
  &:hover {
    color: rgb(33, 119, 168);
  }
}

.notification-item {
  cursor: pointer;
  margin-top: 5px;
  padding: 7px 8px;
  border-radius: 5px;
  transition-duration: 0.2s;
  .name, .desc, .date {
    font-size: 0.75rem;
    margin: 0;
  }
  .name {
    font-weight: 600;
  }
  &.new {
    background: rgb(213, 236, 243);
  }
  &:hover {
    background: $hovered;
  }
}

@keyframes bummer {
  40% {
    transform: scale(1.1, 1.1);
  }
  60% {
    transform: scale(0.875, 0.875);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>