<template>
  <main class="main">
    <Header />
    <Body />
  </main>
</template>

<script>
import Header from "./pages/head";
import Body from "./pages/body/body";

export default {
  name: "App",
  components: {
    Header,
    Body
  }
};
</script>

<style lang="scss" scoped>
.main {
  min-width: 640px;
  height: 100%;
  overflow: auto;
  background-color: #f8fafc;
}
</style>
