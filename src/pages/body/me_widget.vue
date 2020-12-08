<template>
  <div class="me_widget">
    <div class="me_widget_photo"></div>
  </div>
</template>

<script>
export default {
  name: "me_widget"
};
</script>

<style lang="scss" scoped>
.me_widget {
  width: 384px;
  height: 377px;
  background: #ffffff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

@media screen and (max-width: 960px) {
  .me_widget {
    display: none;
  }
}
</style>
