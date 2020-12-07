<template>
  <header class="header">
    <div class="main">
      <div class="name">Asscre</div>
      <div class="title">·如此美好，一如初见</div>
      <div class="main-url">
        
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",

  setup() {

  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  color: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid hsla(210, 8%, 51%, 0.09);

  .main {
    margin: 0 auto;
    width: 960px;
    height: 100%;
    display: flex;
    letter-spacing: 1px;

    .name {
      display: block;
      height: 100%;
      line-height: 60px;
      color: #000;
      font-size: 18px;
    }

    .title {
      display: block;
      height: 100%;
      line-height: 60px;
      color: #757575;
      font-size: 16px;
    }
  }
}
</style>
