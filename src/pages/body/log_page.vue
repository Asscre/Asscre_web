<template>
  <div class="log-box">
    <i :class=gernerateId(1)></i>

    <div class="log-box-make">
      <div v-for="(item, index) in make" :key="index">
        <i :class=gernerateId(index)></i>
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "log_page",
  setup() {
    let {make, gernerateId} = setMake();
    return {make, gernerateId}
  }

}

function setMake() {
  let make = [
    '前端', 'Flutter', 'Go', '成长记录'
  ];

  function gernerateId(index) {
    let iconList = {
      0: "icon-qianduan",
      1: "icon-flutter",
      2: "icon-gopher",
      3: "icon-biaotilogo",
    };
    return "iconfont " + iconList[index];
  }

  return {make, gernerateId};
}
</script>

<style lang="scss" scoped>
.log-box {
  margin: 40px auto;
  padding: 20px 30px;
  min-height: 100px;
  width: 900px;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.06);

  &-make {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 24px;
    color: #fff;

    div {
      margin-left: 30px;
      height: 40px;
      width: 200px;
      border-radius: 10px;
      cursor: pointer;
    }

    :nth-child(1) {
      margin-left: 0;
      background-image: linear-gradient(45deg, #7fe496, #6edf8f);
    }

    :nth-child(2) {
      background-image: linear-gradient(45deg, #fe9078, #f1b87f);
    }

    :nth-child(3) {
      background-image: linear-gradient(45deg, #6cacfd, #93c8ff);
    }

    :nth-child(4) {
      background-image: linear-gradient(45deg, #a682e4, #c1a7e9);
    }
  }
}
</style>