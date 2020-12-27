<template>
  <div class="works">
    <div class="works_li" v-for="(item, index) in works" :key="index">
      <div class="works_li_img">{{ item.url }}</div>
      <div class="works_li_name">{{ item.worksName }}</div>
      <div class="works_li_info">{{ item.info }}</div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "works",

  setup() {
    let works = reactive([
      {
        img: "",
        worksName: "aa",
        info: "aaaaaaaaaa"
      },
      {
        img: "",
        worksName: "bb",
        info: "bbbbbbbbbb"
      },
      {
        img: "",
        worksName: "cc",
        info: "cccccccccc"
      },
      {
        img: "",
        worksName: "dd",
        info: "dddddddddd"
      },
      {
        img: "",
        worksName: "ee",
        info: "eeeeeeeeee"
      },
      {
        img: "",
        worksName: "ff",
        info: "fffffffffff"
      },
      {
        img: "",
        worksName: "gg",
        info: "gggggggggg"
      },
      {
        img: "",
        worksName: "hh",
        info: "hhhhhhhhhh"
      }
    ]);

    return { works };
  }
};
</script>

<style lang="scss" scoped>
.works {
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  &_li {
    margin: 20px 30px;
    padding: 20px;
    width: 242px;
    height: 280px;
    background: #fff;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    cursor: pointer;

    &_img {
      height: 1;
    }
  }
}
</style>
