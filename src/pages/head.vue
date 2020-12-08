<template>
  <header class="header">
    <div class="main">
      <div class="main_t">
        <div class="main_t_name">Asscre</div>
        <div class="main_t_title">·如此美好，一如初见</div>
      </div>
      <div class="main_url">
        <div v-for="(item, index) in make" :key="index">
          <i :class="gernerateId(index)"></i>
          {{ item }}
        </div>
      </div>
      <div class="main_mun">更多</div>
      <div class="main_mun_psn">
        <div class="main_mun_psn_li" v-for="(item, index) in make" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  setup() {
    let { make, gernerateId } = setMake();
    return { make, gernerateId };
  }
};

function setMake() {
  let make = ["前端", "Flutter", "Go", "成长记录"];

  function gernerateId(index) {
    let iconList = {
      0: "icon-qianduan",
      1: "icon-flutter",
      2: "icon-gopher",
      3: "icon-biaotilogo"
    };
    return "iconfont " + iconList[index];
  }

  return { make, gernerateId };
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 60px;
  width: 100%;
  color: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid hsla(210, 8%, 51%, 0.09);

  .main {
    margin: 0 auto;
    max-width: 1400px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    letter-spacing: 1px;
    &_t {
      display: flex;
      &_name {
        display: block;
        height: 100%;
        line-height: 60px;
        color: #000;
        font-size: 18px;
      }

      &_title {
        display: block;
        height: 100%;
        line-height: 60px;
        color: #757575;
        font-size: 16px;
      }
    }

    &_url {
      display: flex;
      text-align: center;
      font-size: 18px;
      color: #000;

      div {
        margin-left: 40px;
        line-height: 60px;
        border-radius: 10px;
        cursor: pointer;
      }

      div:hover {
        color: cornflowerblue;
      }

      :nth-child(1) {
        margin-left: 0;
      }
    }

    &_mun {
      text-align: center;
      line-height: 60px;
      color: black;
      display: none;
      cursor: pointer;

      &_psn {
        position: absolute;
        right: 30px;
        top: 50px;
        height: 120px;
        width: 80px;
        padding: 10px 15px;
        background-color: #fff;
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);
        display: none;

        &_li {
          color: black;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
        }

        &_li:hover {
          color: cornflowerblue;
        }
      }
    }

    &_mun:hover {
      color: cornflowerblue;
    }

    &_mun:focus .main_mun_psn {
      display: block;
    }

    @media screen and (max-width: 680px) {
      &_url {
        display: none;
      }

      &_mun {
        display: block;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .main {
      margin: 0 30px;
    }
  }
}
</style>
