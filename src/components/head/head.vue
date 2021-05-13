<template>
  <div class="head">
    <div class="head-left">
      <!-- <router-link to="{path:{leftContent.path},query:{name:}}"></router-link> -->
      <!-- <span @click="pushpAage()">< {{leftContent.name}}</span> -->
    </div>
    <div class="head-middle">
      <img src="../../assets/img/headTitle.png" alt />
    </div>
    <div class="head-right">
      <div>
        <span class="detailTime">{{detailTime}}</span>
        <span class="showTime">{{showTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      showTime: "",
      detailTime: "",
      leftContent: {
        name: "",
        path: "",
      },
    };
  },

  mounted() {
    this.showDateTime();
    setInterval(this.showDateTime, 1000);
  },
  methods: {
    showDateTime() {
      //头部时间
      var sWeek = new Array("日", "一", "二", "三", "四", "五", "六");
      var myDate = new Date();
      var sYear = myDate.getFullYear();
      var sMonth = myDate.getMonth() + 1;
      var sDate = myDate.getDate();
      var sDay = sWeek[myDate.getDay()]; //获取星期几
      var hour = this.formatTime(myDate.getHours()); //时
      var second = this.formatTime(myDate.getSeconds()); //秒
      var minutes = this.formatTime(myDate.getMinutes()); //分

      this.detailTime = hour + ":" + minutes + ":" + second;
      this.showTime =
        sYear + "." + sMonth + "." + sDate + "   " + "星期" + sDay;
      //   console.log(this.detailTime,this.showTime);
    },

    formatTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },

    //设置头部左侧跳转内容
    changeTitle(name, path) {
      this.leftContent.name = name;
      this.leftContent.path = path;
    },

    //切换页面
    pushpAage() {
      this.$router.push({
        name: this.leftContent.path,
      });
    },
  },
};
</script>

<style scoped>
.head {
  /* background: pink; */
  width: 100%;
  height: 8%;
  display: flex;
  background-image: url("../../assets/img/topHead.png");
  background-size: 100% 100%;
}
.head-left {
  width: 40%;
  padding-left: 3%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 0.5%;
}
.head-left span {
  /* 设置文字从上到下的渐变 */
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(#fafdf7),
    to(#bbdcff)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: AlibabaPuHuiTi-Bold;
  font-weight: bold;
  cursor: pointer;
  float: left;
}
.head-middle {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head-right {
  width: 40%;
  padding-right: 2%;
  height: 100%;
  box-sizing: border-box;
}
.head-right div {
  width: 60%;
  float: right;
  height: 80%;
  box-sizing: border-box;
  padding-top: 0.8%;
}
.detailTime {
  letter-spacing: 1px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  font-family: AlibabaPuHuiTi-Bold;
  display: inline-block;
  width: 50%;
  height: 64%;
  /* 设置文字发光效果 */
  text-shadow: 0 0 10px #2c6b7a, 0 0 20px #2c6b7a, 0 0 30px #2c6b7a,
    0 0 40px #2c6b7a;
}
.showTime {
  letter-spacing: 1px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: AlibabaPuHuiTi-Bold;
  /* 设置文字发光效果 */
  text-shadow: 0 0 10px #2c6b7a, 0 0 20px #2c6b7a, 0 0 30px #2c6b7a,
    0 0 40px #2c6b7a;
}
</style>