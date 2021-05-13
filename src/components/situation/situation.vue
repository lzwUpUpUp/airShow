<template>
  <div class="container">
    <!-- 头部 -->
    <top ref="child"></top>
    <!-- 页面的主要部分 -->
    <div class="main"></div>
  </div>
</template>

<script>
import Amap from "AMap"; //引入高德地图
var map;
import top from "../head/head"; //引入头部
export default {
  components: {
    top, //注册头部组件
  },
  name: "situation",
  data() {
    return {};
  },
  mounted() {
    //更改头部左侧内容
    this.$refs.child.changeTitle("乘车点概况", "drivingPoint");
  },
};
</script>

<style scoped>

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.top {
  width: 100%;
  height: 8%;
}
.main {
  width: 100%;
  height: 92%;
  /* background: rgb(215, 231, 69); */
}
</style>