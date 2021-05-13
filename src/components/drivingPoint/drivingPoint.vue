<template>
  <div class="container">
    <!-- 头部 -->
    <top ref="child"></top>
    <!-- 页面的主要部分 -->
    <div class="main">
      <div class="upper-part">
        <div class="upper-part-left">
          <!-- 信息报送 -->
          <div class="information-submitted">
            <div class="detail-box" id="ScrollUp">
              <ul>
                <li>
                  <span>10:24:56</span>
                  <span>香洲公交总站</span>
                  <span style="color:#eea150">粤20794</span>
                  <span>
                    已发车，载客&nbsp;
                    <span style="color:#eea150">47</span>&nbsp;人
                  </span>
                </li>
                <li>
                  <span>10:24:56</span>
                  <span>香洲公交总站</span>
                  <span style="color:#eea150">粤20794</span>
                  <span>
                    已发车，载客&nbsp;
                    <span style="color:#eea150">47</span>&nbsp;人
                  </span>
                </li>
                <li>
                  <span>10:24:56</span>
                  <span>香洲公交总站</span>
                  <span style="color:#eea150">粤20794</span>
                  <span>
                    已发车，载客&nbsp;
                    <span style="color:#eea150">47</span>&nbsp;人
                  </span>
                </li>
                <li>
                  <span>10:24:56</span>
                  <span>香洲公交总站</span>
                  <span style="color:#eea150">粤20794</span>
                  <span>
                    已发车，载客&nbsp;
                    <span style="color:#eea150">47</span>&nbsp;人
                  </span>
                </li>
                <li>
                  <span>10:24:56</span>
                  <span>香洲公交总站</span>
                  <span style="color:#eea150">粤20794</span>
                  <span>
                    已发车，载客&nbsp;
                    <span style="color:#eea150">47</span>&nbsp;人
                  </span>
                </li>
                <li>
                  <span>10:24:56</span>
                  <span>香洲公交总站</span>
                  <span style="color:#eea150">粤20794</span>
                  <span>
                    已发车，载客&nbsp;
                    <span style="color:#eea150">47</span>&nbsp;人
                  </span>
                </li>
                <li>
                  <span>10:24:56</span>
                  <span>香洲公交总站</span>
                  <span style="color:#eea150">粤20794</span>
                  <span>
                    已发车，载客&nbsp;
                    <span style="color:#eea150">47</span>&nbsp;人
                  </span>
                </li>
                <li>
                  <span>10:24:56</span>
                  <span>香洲公交总站</span>
                  <span style="color:#eea150">粤20794</span>
                  <span>
                    已发车，载客&nbsp;
                    <span style="color:#eea150">47</span>&nbsp;人
                  </span>
                </li>
                <li>
                  <span>10:24:56</span>
                  <span>香洲公交总站</span>
                  <span style="color:#eea150">粤20794</span>
                  <span>
                    已发车，载客&nbsp;
                    <span style="color:#eea150">47</span>&nbsp;人
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 预约、运送、候车人数 -->
          <div class="number-ofpeople">
            <div class="detail-box">
              <p class="number-ofpeople-title">
                <select name id="selectPoint">
                  <option value disabled selected hidden>全部乘车点</option>
                  <option v-for="(item , index) in drivingPoints" :key="index">{{item.title}}</option>
                </select>
                <span>
                  今日预约&nbsp;
                  <span style="color:#eea150">{{makePeople}}</span>&nbsp;人
                </span>
                <span>
                  已运送人数&nbsp;
                  <span style="color:#eea150">{{runNumber}}</span>&nbsp;人
                </span>
              </p>
              <div id="peopleDetail"></div>
            </div>
          </div>
        </div>
        <div class="upper-part-middle">
          <div class="mapBox">
            <select name id="selectZone">
              <option v-for="(item,index) in zoneData" :key="index">{{item.title}}</option>
            </select>
            <ul class="mapProRight">
              <li>车辆显示列表</li>
              <li v-for="(item , index) in mapPrompt" :key="index">
                <img :src="item.path" alt />
                {{item.name}}
              </li>
            </ul>
            <div id="map"></div>
          </div>
        </div>
        <div class="upper-part-right">
          <!-- 专线巴士 -->
          <div class="shuttle-bus">
            <div class="detail-box" id="shuttleBus"></div>
          </div>
          <!-- 区域车辆数据 -->
          <div class="vehicle-data">
            <div class="detail-box" id="vehicleBus"></div>
          </div>
        </div>
      </div>
      <div class="half-bottom">
        <div class="half-bottom-left">
          <div class="detail-box">
            <p class="predict-title">
              香洲公交总站
              <img src="../../assets/img/jiantou.png" alt /> 航展P2停车场
            </p>
            <div class="tableBox">
              <table id="first-Table">
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      <p>返程数量</p>
                      <p>预估</p>
                    </th>
                    <th>
                      <p>返程高峰</p>
                      <p>时间预估</p>
                    </th>
                    <th>
                      <p>发车历史</p>
                      <p>统计</p>
                    </th>
                    <th>
                      <p>发车班数</p>
                      <p>统计</p>
                    </th>
                    <th>
                      <p>故障车辆</p>
                      <p>统计</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="table-hightLight">
                      <p>最新汇报</p>
                      <p>({{latestReport}})</p>
                    </td>
                    <td>1425</td>
                    <td>33</td>
                    <td>55</td>
                    <td>46</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td id="table-hightLight">
                      <p>当天</p>
                      <p>({{todayTime}})</p>
                    </td>
                    <td>1425</td>
                    <td>33</td>
                    <td>55</td>
                    <td>46</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>

              <table id="second-Table">
                <thead>
                  <tr>
                    <th></th>
                    <th>投入车辆</th>
                    <th>等待发车</th>
                    <th>已发车</th>
                    <th>已到达</th>
                    <th>已返站</th>
                    <th>即刻回到</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="table-hightLight">
                      <p>当前时段</p>
                      <p>({{thisMoment}})</p>
                    </td>
                    <td>1425</td>
                    <td>33</td>
                    <td>55</td>
                    <td>46</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td id="table-hightLight">
                      <p>下个时段</p>
                      <p>({{nextMoment}})</p>
                    </td>
                    <td>1425</td>
                    <td>33</td>
                    <td>55</td>
                    <td>46</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
              <table id="third-Table">
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      <p>去程</p>
                    </th>
                    <th>
                      <p>返程</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="table-hightLight">平均耗时</td>
                    <td>62min</td>
                    <td>78min</td>
                  </tr>
                  <tr>
                    <td id="table-hightLight">前一趟耗时</td>
                    <td>70min</td>
                    <td>72min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="half-bottom-right">
          <!-- 出租车趋势比较图 -->
          <div class="detail-box" id="taxiCompareBox"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import
import Amap from "AMap"; //引入高德地图
var map; //地图节点
let runChart; //预约、候车人数折线图节点
let shuttleBus; //专线巴士节点
let vehicleBus; //区域车辆数据
let taxiCompare; //出租车趋势比较
import top from "../head/head"; //引入头部
export default {
  name: "drivingPoint",
  components: {
    top, //注册头部组件
  },
  data() {
    return {
      drivingPoints: [
        { title: "香洲公交总站" },
        { title: "体育中心东门" },
        { title: "九洲城" },
        { title: "九洲港" },
        { title: "城轨珠海站" },
        { title: "前山枢纽站" },
        { title: "华发商都" },
        { title: "斗门汽车客运站" },
        { title: " 珠海国际赛车场停车场" },
        { title: " 港珠澳大桥珠海口岸" },
      ],
      mapPrompt: [
        {
          path: require("../../assets/img/taxi.png"),
          name: "出租车",
        },
        {
          path: require("../../assets/img/theBus.png"),
          name: "公交车",
        },
        {
          path: require("../../assets/img/shuttle.png"),
          name: "接驳巴士",
        },
        {
          path: require("../../assets/img/shuttleBus.png"),
          name: "穿梭巴士",
        },
        {
          path: require("../../assets/img/spacialBUs.png"),
          name: "专线巴士",
        },
        {
          path: require("../../assets/img/traveBus.png"),
          name: "旅游大巴",
        },
      ],
      zoneData: [
        { title: "航展核心1区" },
        { title: "航展核心2区" },
        { title: "航展管控区" },
        { title: "航展引导区" },
        { title: "珠海市" },
        { title: "广东省" },
      ],
      makePeople: 28902, //预约人数
      runNumber: 13316, //运送人数
      runOption: "", //巴士人数状态echart
      shuttleBusOption: "", //专线巴士echart
      vehicleBusOption: "", //区域车辆数据echart
      taxiCompareOption: "", //出租车趋势比较echart
      latestReport: "08:20:00", //最新汇报
      todayTime: "", //当天
      thisMoment: "08:00-09:00", //当前时刻
      nextMoment: "09:00-10:00", //下个时刻
    };
  },
  mounted() {
    //更改头部左侧内容
    this.$refs.child.changeTitle("整体概况", "situation");
    this.mapInit(); //初始化地图
    this.outTime(); //向上滚动
    this.serEchart(); //渲染预约、候车人数折线图
    this.shuttleEchart(); // 专线巴士echart
    this.vehicleEchart(); // 区域车辆数据echart
    this.taxiCompareEchart(); //区域车辆数据echart
    this.getDate();
    // console.log(this.$url);

    window.onresize = () => {
      //调用methods中的事件
      this.pageResize();
    };
  },
  methods: {
    getDate() {
      var time = new Date();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      this.todayTime = month + "月" + day + "日";
    },

    // 初始化地图
    mapInit() {
      map = new AMap.Map("map", {
        center: [113.389429, 22.009389],
        resizeEnable: true,
        zoom: 14,
        mapStyle: "amap://styles/08ff39a1f1e8d3f8d1e0bc02ddab594a", //设置地图的显示样式
      });
    },

    //-------------向上滚动-----------
    outTime() {
      setTimeout(function () {
        var table = document.getElementById("ScrollUp");
        var timer = null;
        table.scrollTop = 0;
        table.innerHTML += table.innerHTML;
        function play() {
          clearInterval(timer);
          timer = setInterval(function () {
            table.scrollTop++;
            if (table.scrollTop >= table.scrollHeight / 2) {
              table.scrollTop = 0;
            }
          }, 100);
        }
        setTimeout(play, 500);
        table.onmouseover = function () {
          clearInterval(timer);
        };
        table.onmouseout = play;
      }, 400);
    },

    // 渲染预约、候车人数折线图
    serEchart() {
      runChart = this.$echarts.init(document.getElementById("peopleDetail"));

      let color = ["#0090FF", "#36CE9E", "#FFC005"];
      let echartData = [
        {
          name: "1",
          value1: 100,
          value2: 233,
          value3: 130,
        },
        {
          name: "2",
          value1: 138,
          value2: 233,
          value3: 130,
        },
        {
          name: "3",
          value1: 350,
          value2: 200,
          value3: 130,
        },
        {
          name: "4",
          value1: 173,
          value2: 180,
          value3: 130,
        },
        {
          name: "5",
          value1: 180,
          value2: 199,
          value3: 130,
        },
        {
          name: "6",
          value1: 150,
          value2: 233,
          value3: 130,
        },
        {
          name: "7",
          value1: 180,
          value2: 210,
          value3: 130,
        },
        {
          name: "8",
          value1: 230,
          value2: 180,
          value3: 130,
        },
      ];

      let xAxisData = echartData.map((v) => v.name);
      //  ["1", "2", "3", "4", "5", "6", "7", "8"]
      let yAxisData1 = echartData.map((v) => v.value1);
      // [100, 138, 350, 173, 180, 150, 180, 230]
      let yAxisData2 = echartData.map((v) => v.value2);
      // [233, 233, 200, 180, 199, 233, 210, 180]
      let yAxisData3 = echartData.map((v) => v.value3);

      this.runOption = {
        color: color,
        legend: {
          icon: "circle",
          top: "2%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 13,
            color: "#eeeeee",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          left: "4%",
          top: "18%",
          bottom: "4%",
          right: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#eeeeee",
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(156, 156, 156,0.9)",
              },
            },
            axisTick: {
              show: false,
            },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            axisLabel: {
              textStyle: {
                color: "#eeeeee",
              },
            },
            nameTextStyle: {
              color: "#666",
              fontSize: 12,
              lineHeight: 40,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(156, 156, 156,0.6)",
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "预约",
            type: "line",
            symbolSize: 6,
            symbol: "circle",
            zlevel: 3,
            lineStyle: {
              normal: {
                color: color[0],
              },
            },

            data: yAxisData1,
          },
          {
            name: "运送",
            type: "line",
            symbolSize: 6,
            symbol: "circle",
            zlevel: 3,
            lineStyle: {
              normal: {
                color: color[1],
              },
            },

            data: yAxisData2,
          },
          {
            name: "候车",
            type: "line",
            symbolSize: 6,
            symbol: "circle",
            zlevel: 3,
            lineStyle: {
              normal: {
                color: color[2],
              },
            },

            data: yAxisData3,
          },
        ],
      };
      runChart.setOption(this.runOption);
    },

    // 专线巴士echart
    shuttleEchart() {
      shuttleBus = this.$echarts.init(document.getElementById("shuttleBus"));
      var scale = 1;
      var echartData = [
        {
          value: 21,
          name: "等待发车",
        },
        {
          value: 38,
          name: "已发车",
        },
        {
          value: 35,
          name: "已返程",
        },
        {
          value: 91,
          name: "已到达",
        },
      ];
      var rich = {
        yellow: {
          color: "#FFD200",
          fontSize: 22 * scale,
          padding: [8, 8],
          align: "center",
          fontWeight: 900,
        },
        total: {
          color: "#FFD200",
          fontSize: 28 * scale,
          padding: [0, 8],
          align: "center",
          fontWeight: 900,
        },
        white: {
          color: "#F9FFFB",
          align: "center",
          fontSize: 14 * scale,
          padding: [8, 0],
          fontWeight: 900,
        },
      };
      this.shuttleBusOption = {
        legend: {
          selectedMode: false,
          formatter: function (name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function (value, index, array) {
              total += value.value;
            });
            return "{white|投入}{total|" + total + "}{white|辆巴士}";
          },
          data: [echartData[0].name],

          top: "2%",
          icon: "none",
          align: "center",
          textStyle: {
            color: "#fff",
            fontSize: 18 * scale,
            rich: rich,
          },
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["38%", "54%"],
            center: ["50%", "60%"],
            hoverAnimation: true,
            color: ["#22B7E6", "#C397FF", "#5C9CF4", "#FE6C6C"],
            label: {
              normal: {
                formatter: function (params, ticket, callback) {
                  var total = 0; //考生总数量
                  echartData.forEach(function (value, index, array) {
                    total += value.value;
                  });
                  return (
                    "{white|" +
                    params.name +
                    "}{yellow|" +
                    params.value +
                    "}{white|" +
                    "辆}"
                  );
                },
                rich: rich,
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 12,
                lineStyle: {
                  color: "#fff",
                },
              },
            },
            data: echartData,
          },
          {
            //外圆
            type: "pie",
            radius: "62%",
            center: ["50%", "60%"],
            z: 0,
            itemStyle: {
              color: "rgba(124, 161, 196,0.3)",
            },
            hoverAnimation: false,
            label: {
              show: false,
            },
            tooltip: {
              show: false,
            },
            data: [10],
            animationType: "scale",
          },
        ],
      };
      shuttleBus.setOption(this.shuttleBusOption);
    },

    //区域车辆数据echart
    vehicleEchart() {
      vehicleBus = this.$echarts.init(document.getElementById("vehicleBus"));

      var rich = {
        yellow: {
          color: "#FFD200",
          padding: [0, 6],
          align: "center",
          fontWeight: 900,
          fontSize: 16,
        },
      };

      let Ydata = [
        "taxi",
        "theBus",
        "shuttle",
        "shuttleBus",
        "spacialBUs",
        "traveBus",
      ];

      var Xdata = [50, 60, 110, 160, 240, 80];

      var icon = {
        // taxi:// "http://localhost:8080/static/img/headTitle.97152de.png", //出租车
        taxi: require("../../assets/img/taxi.png"),
        theBus: require("../../assets/img/theBus.png"), //公交车
        shuttle: require("../../assets/img/shuttle.png"), //接驳巴士，黄色的
        shuttleBus: require("../../assets/img/shuttleBus.png"), //穿梭巴士，墨绿色的
        spacialBUs: require("../../assets/img/spacialBUs.png"), //专线巴士
        traveBus: require("../../assets/img/traveBus.png"), //旅游巴士
      };

      this.vehicleBusOption = {
        grid: {
          left: "-4%",
          right: "14%",
          bottom: "4%",
          top: "4%",
          containLabel: true,
        },
        yAxis: {
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },

          axisLabel: {
            formatter: function (value) {
              return (
                "{" + Ydata[arguments[1]] + "|}" + " " + "{value|" + value + "}"
              );
            },
            margin: 20,
            rich: {
              value: {
                lineHeight: 30,
                align: "right",
              },
              taxi: {
                height: 22,
                backgroundColor: {
                  image: icon.taxi,
                },
              },
              theBus: {
                height: 22,
                backgroundColor: {
                  image: icon.theBus,
                },
              },
              shuttle: {
                height: 22,

                backgroundColor: {
                  image: icon.shuttle,
                },
              },
              shuttleBus: {
                height: 22,
                backgroundColor: {
                  image: icon.shuttleBus,
                },
              },
              spacialBUs: {
                height: 22,
                backgroundColor: {
                  image: icon.spacialBUs,
                },
              },
              traveBus: {
                height: 22,

                backgroundColor: {
                  image: icon.traveBus,
                },
              },
            },

            textStyle: {
              fontSize: 12,
              color: "#FEFEFF",
              align: "left", //设置左对齐
              baseline: "middle",
            },
            margin: 80, //刻度标签与轴线之间的距离
          },
          data: [
            "出租车",
            "公交车",
            "接驳车辆",
            "穿梭巴士",
            "专线大巴",
            "旅游大巴",
          ],
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            type: "bar",
            barWidth: 16,
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: function (params, ticket, callback) {
                  return "{yellow|" + params.data + "}辆";
                },
                rich: rich,
                padding: [0, 8],
                color: "#FEFEFF",
              },
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(59, 169, 245, 0)", // rgba(255,255,132, .4)，rgba(0,0,255, .4)
                  },
                  {
                    offset: 0.5,
                    color: "rgba(15, 106, 237, 0.2)", // rgba(255,255,132, .4)，rgba(0,0,255, .4)
                  },
                  {
                    offset: 1,
                    color: "rgba(15, 106, 237, 1)", //#0000F，F#ffbd19
                  },
                ]),
                barBorderRadius: [9, 0, 0, 9],
                borderColor: "#148DE8",
                borderWidth: 1,
                shadowBlur: 5,
                shadowColor: "#148DE8",
              },
            },
            data: Xdata,
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [8, 18],
            symbolOffset: ["50%", 0],
            symbolPosition: "end",
            z: 12,
            color: "RGBA(88, 186, 253, 1)",
            data: Xdata,
          },
        ],
      };

      vehicleBus.setOption(this.vehicleBusOption);
    },

    //出租车趋势比较echart
    taxiCompareEchart() {
      taxiCompare = this.$echarts.init(
        document.getElementById("taxiCompareBox")
      );

      this.taxiCompareOption = {
        legend: {
          show: true,
          icon: "circle",
          top: "6%",
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 25,
          textStyle: {
            fontSize: 13,
            color: "#eeeeee",
          },
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "4%",
          top: "16%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        xAxis: [
          {
            type: "category",
            data: ["14", "15", "16", "17", "18", "19", "20"],
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#FFFFFF",
              },
              margin: 15,
            },
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#FFFFFF",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "今日车辆",
            type: "line",
            data: [13, 10, 3, 12, 15, 30, 7],
            symbolSize: 0,
            symbol: "circle",
            smooth: true,
            lineStyle: {
              color: "#fe9a8b",
            },
            itemStyle: {
              normal: {
                color: "#fe9a8b",
                borderColor: "#fe9a8b",
              },
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#fe9a8bb3",
                },
                {
                  offset: 1,
                  color: "#fe9a8b03",
                },
              ]),
            },
          },
          {
            name: "昨日车辆",
            type: "line",
            data: [5, 12, 11, 4, 25, 16, 1],
            symbolSize: 0,
            symbol: "circle",
            smooth: true,
            lineStyle: {
              color: "#9E87FF",
            },
            itemStyle: {
              normal: {
                color: "#9E87FF",
                borderColor: "#9E87FF",
              },
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#9E87FFb3",
                },
                {
                  offset: 1,
                  color: "#9E87FF03",
                },
              ]),
            },
          },
          {
            name: "上周车辆",
            type: "line",
            data: [16, 10, 12, 8, 20, 16, 10],
            symbolSize: 0,
            symbol: "circle",
            smooth: true,
            lineStyle: {
              color: "rgb(66, 185, 131)",
            },
            itemStyle: {
              normal: {
                color: "rgb(66, 185, 131)",
                borderColor: "rgb(66, 185, 131)",
              },
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(111, 218, 169,0.8)",
                },
                {
                  offset: 1,
                  color: "rgba(111, 218, 169,0.1)",
                },
              ]),
            },
          },
        ],
      };
      taxiCompare.setOption(this.taxiCompareOption);
    },

    //让echart图适应屏幕的变化
    pageResize() {
      shuttleBus.resize();
      runChart.resize();
      vehicleBus.resize();
      taxiCompare.resize();
    },
  },
};
</script>

<style>
@import "./drivingPoint.css";
</style>