<template>
  <div class="toolbar">
    <button class="btn">
      <i class="material-icons">help_outline</i>
    </button>
    <button class="btn">
      <i class="material-icons">notifications_none</i>
    </button>
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
export default {};
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
</style>