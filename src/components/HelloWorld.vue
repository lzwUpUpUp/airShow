<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br />
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
    <div id="all-map" class="map"></div>
  </div>
</template>

<script>
import AMap from "AMap"; //在使用地图的页面引入该组件
var map;
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.mapInit(); //初始化地图
    this.showDateTime()  //头部时间
  },
  methods: {
    //头部时间
    showDateTime() {
      var sWeek = new Array("日", "一", "二", "三", "四", "五", "六");
      var myDate = new Date();
      var sYear = myDate.getFullYear();
      var sMonth = myDate.getMonth() + 1;
      var sDate = myDate.getDate();
      var sDay = sWeek[myDate.getDay()]; //获取当日为星期几
      var hour = myDate.getHours();
      var minutes = myDate.getMinutes();
      var second = myDate.getSeconds();

      var h = this.formatTime(hour); //格式化小时，如果不足两位，则在前面加‘0’
      var m = this.formatTime(minutes);
      var s = this.formatTime(second);

      var lastDay = Number(sDate) - Number(1);
      //显示时间
      // document.getElementById("topTime").innerHTML = (sYear + '.' + sMonth + '.' + sDate + '    ' + h + ":" + m + ":" + s);
     console.log(sYear + '.' + sMonth + '.' + sDate + '    ' + h + ":" + m + ":" + s);
     console.log('星期'+sDay);
       
      //设个定时器，一秒钟执行一次此方法
      // setTimeout(this.showDateTime(), 10000);
    },
    formatTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },

    // 初始化地图
    mapInit() {
      map = new AMap.Map("all-map", {
        center: [116.34301260000001, 39.9662898],
        resizeEnable: true,
        zoom: 10,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(66, 185, 131);
}
span{
  color: rgb(111, 218, 169);
}
.map {
  width: 600px;

  height: 600px;
}
</style>
