<template>
  <body class="body">
    <div class="body_box">
      <div class="body_box_header">
        <hot-widget class="body_box_header_hot-widget" />
        <me-widget class="body_box_header_me-widget" />
      </div>
      <div class="body_box_works">
        <works-nav-widget />
        <works-widget />
      </div>
      <div class="body_box_document">
        <document-nav-widget />
        <document-widget />
      </div>
    </div>
  </body>
</template>

<script>
import HotWidget from "./hot_widget";
import MeWidget from "./me_widget";
import WorksNavWidget from "./works_nav_widget.vue";
import WorksWidget from "./works_widget.vue";
import DocumentNavWidget from "./document_nav_widget.vue";
import DocumentWidget from "./document_widget";
import { provide } from "vue";

export default {
  name: "Body",
  components: {
    HotWidget,
    MeWidget,
    WorksNavWidget,
    WorksWidget,
    DocumentNavWidget,
    DocumentWidget
  },
  setup() {
    provide("dataA", "Hello, I'm Asscre!");
  }
};
</script>

<style lang="scss" scoped>
.body {
  padding-top: 20px;
  width: 100%;

  &_box {
    margin: 0 auto;
    max-width: 1440px;

    &_header {
      display: flex;
      max-width: 1400px;

      &_hot-widget {
        margin-right: 30px;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    &_box {
      margin: 0 30px;
    }
  }

  @media screen and (max-width: 960px) {
    &_box_header_hot-widget {
      margin: 0;
    }
  }
}
</style>
