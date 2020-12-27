<template>
  <div class="document_nav">
    <div class="document_nav_tilte">文章推荐</div>
    <div class="document_nav_li">
      <p
        v-for="(item, index) in makeList"
        :key="index"
        :class="{ nav_active: item.active }"
        @click="selectNavLi(index)"
      >
        {{ item.name }}
      </p>
    </div>
    <div class="document_nav_most">
      <p>更多</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "document_nav",

  setup() {
    let makeList = reactive([
      {
        name: "Web",
        active: true
      },
      {
        name: "Flutter",
        active: false
      },
      {
        name: "Go",
        active: false
      }
    ]);

    function selectNavLi(index) {
      this.makeList.forEach(item => {
        item.active = false;
      });

      this.makeList[index].active = true;
    }

    return { makeList, selectNavLi };
  }
};
</script>

<style lang="scss" scoped>
.document_nav {
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
      letter-spacing: 1px;
      cursor: pointer;
    }

    :last-child {
      margin: 0;
    }
  }

  &_most {
    margin: auto;
    margin-right: 0;
    color: #50a1ff;
    cursor: pointer;
  }

  &_most:active {
    color: #1d78df;
  }
}

.nav_active {
  color: #50a1ff;
}
</style>
