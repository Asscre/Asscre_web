<template>
  <div class="hot_widget"></div>
</template>

<script>
export default {
  name: "hot_widget"
};
</script>

<style lang="scss" scoped>
.hot_widget {
  width: 981px;
  height: 377px;
  background: #ffffff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

@media screen and (max-width: 960px) {
  .hot_widget {
    max-width: 860px;
  }
}

@media screen and (max-width: 680px) {
  .hot_widget {
    max-width: 660px;
  }
}
</style>
