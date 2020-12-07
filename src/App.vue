<template>
  <Header />
  <Body />
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
