<template>
  <main class="main">
    <Header />
    <Body />
    <Footer />
  </main>
</template>

<script>
import Header from "./pages/head";
import Body from "./pages/body/body";
import Footer from "./pages/footer";

export default {
  name: "App",
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.main {
  min-width: 640px;
  // height: 100%;
  overflow: auto;
  background-color: #f8fafc;
}
</style>
