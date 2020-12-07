<template>
  <body class="body">
  <me-page></me-page>
  <log-page></log-page>
  </body>
</template>

<script>
import MePage from "./me_page"
import LogPage from "./log_page"

export default {
  name: "Body",
  components: {
    MePage,
    LogPage,
  },
  setup() {
  }
};
</script>

<style lang="scss" scoped>
.body {
  padding-top: 20px;
  height: calc(100% - 60px);
  width: 100%;
  background-color: #f8fafc;
}
</style>
