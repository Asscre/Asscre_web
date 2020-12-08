<template>
  <div class="works_nav">
    <div class="works_nav_tilte">作品推荐</div>
    <div class="works_nav_li">
      <p>Web作品</p>
      <p>Flutter作品</p>
      <p>Go作品</p>
    </div>
    <div class="works_nav_most">
      <p>更多</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "works_nav"
};
</script>

<style lang="scss" scoped>
.works_nav {
  display: flex;
  max-width: 1400px;
  padding-top: 30px;
  height: 60px;
  line-height: 60px;

  &_title {
    color: black;
  }

  &_li {
    display: flex;
    margin-left: 60px;
    color: #757575;

    p {
      margin-right: 30px;
    }

    :last-child {
      margin: 0;
    }
  }

  &_most {
    margin: auto;
    margin-right: 0;
    color: #50a1ff;
  }
}
</style>
