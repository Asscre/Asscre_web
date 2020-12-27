<template>
  <div class="document">
    <div class="document_container" v-for="(item, index) in doc" :key="index">
      <div class="document_container_left">
        <img :src="item.url" />
      </div>
      <div class="document_container_right">
        <div class="document_container_title">{{ item.title }}</div>
        <div class="document_container_content">
          {{ item.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "document_widget",
  setup() {
    let doc = reactive([
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题一",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题一.2",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题一。1",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题二",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题三",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题四",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题五",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题六",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题七",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题八",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题九",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2Fc4%2F01%2Fc4251ee38c2039602d69cac1d3ab9d01.jpg&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654242&t=751aab2d5e4502935be06b9d7984619b",
        title: "我是标题十",
        content:
          "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
      }
    ]);

    return { doc };
  }
};
</script>

<style lang="scss" scoped>
.document {
  max-width: 1400px;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  &_li {
    margin: 20px 30px;
    padding: 20px;
    // width: 242px;
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
