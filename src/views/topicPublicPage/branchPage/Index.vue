<template>
  <div class="branch-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <header-component/>

      <div class="content">
        <ul>
          <li v-for="(item,key) in rangeRows" :key="key">
            <div class="left">
              <span>1</span>
              <chevron-left-icon size="14"/>
            </div>
            <div class="middle">
              <ol>
                <li v-for="(it,key) in rangeRows" :key="key"
                    @mouseenter="showUserInfo(item,it)"
                    @mouseleave="hideUserInfo()"
                >
                  主线1
                  <div class="default">默认</div>
                  <div class="number">10</div>
                  <div class="title">我欲成仙与滋味</div>

                  <div class="hided-user-info" :class="`hided-user-info-${item}-${it}`">
                    <div class="user-info">
                      <div class="avatar"></div>
                      <div class="info">
                        <h4>Alex</h4>
                        <span>Lv S</span>
                        <p>hello world</p>
                      </div>
                    </div>
                    <div class="authority">
                      <feather-icon size="14"/>
                      <span>管理者</span>
                    </div>
                    <div></div>
                  </div>
                </li>

              </ol>
            </div>
            <div class="right">
              <chevron-right-icon size="14"/>
            </div>
          </li>

        </ul>

        <div class="content-bottom-button">
          <ul>
            <div>
              <chevron-left-icon size="14"/>
              <span>PRE</span>
            </div>

            <li class="is-active">1</li>
            <li>2</li>

            <div class="is-active">
              <span>NEXT</span>
              <chevron-right-icon size="14"/>
            </div>
          </ul>
        </div>
      </div>

      <div id="echarts" style="width: 100%;height:400px;"></div>
    </main>

    <footer>
      <bottom-component background-color="#fff"/>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import HeaderComponent from "@/common/components/topicPublicPage/HeaderComponent";
import {FeatherIcon, ChevronRightIcon, ChevronLeftIcon} from "vue-feather-icons"
import echarts from "echarts"

export default {
  name: "Index",
  components: {
    HeaderComponent,
    BottomComponent,
    TopBar,
    FeatherIcon, ChevronRightIcon, ChevronLeftIcon
  },
  data() {
    return {
      locale: this.$locale,
      rangeRows: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    showUserInfo(row, col) {
      document.querySelector(`.hided-user-info-${row}-${col}`).classList.add("is-active")

    },
    hideUserInfo() {
      document.querySelectorAll(".hided-user-info").forEach(it => {
        it.classList.remove("is-active")
      })
    }
  },
  mounted() {

    var myCharts = echarts.init(document.getElementById('echarts'));
    var option = {
      backgroundColor: "#fff",
      title: {
        text: "项目工期",
        padding: 20,
        textStyle: {
          fontSize: 17,
          fontWeight: "bolder",
          color: "#333"
        },
        subtextStyle: {
          fontSize: 13,
          fontWeight: "bolder"
        }
      },
      legend: {
        data: ["计划工期", "可行性研究阶段", "初步设计阶段", "施工图设计阶段", "项目实施阶段", "项目验收阶段"],
        align: "right",
        right: 80,
        top: 50
      },
      grid: {
        containLabel: true,
        show: false,
        right: 130,
        left: 40,
        bottom: 40,
        top: 90
      },
      xAxis: {
        type: "time",
        axisLabel: {
          "show": true,
          "interval": 0
        }
      },
      yAxis: {
        axisLabel: {
          show: true,
          interval: 0,
          formatter: function(value) {
            var last = ""
            var max = 5;
            var len = value.length;
            var hang = Math.ceil(len / max);
            if (hang > 1) {
              for (var i = 0; i < hang; i++) {
                var start = i * max;
                var end = start + max;
                var temp = value.substring(start, end) + "\n";
                last += temp; //凭借最终的字符串
              }
              return last;
            } else {
              return value;
            }
          }
        },
        data: ["第一个任务", "第二个任务", "第三个任务"]
      },
      tooltip: {
        trigger: "axis",
        formatter: function(params) {
          var res = "";
          var name = "";
          var start0 = "";
          var start = "";
          var end0 = "";
          var end = "";
          for (var i in params) {
            var k = i % 2;
            if (!k) { //偶数
              start0 = params[i].data;
              console.log(start0)
              start = start0.getFullYear() + "-" + (start0.getMonth() + 1) + "-" + start0.getDate();
            }
            if (k) { //奇数
              name = params[i].seriesName;
              end0 = params[i].data;
              end = end0.getFullYear() + "-" + (end0.getMonth() + 1) + "-" + end0.getDate();
              res += name + " : " + end + "~" + start + "</br>";

            }
          }
          return res;
        }
      },
      series: [{
        name: "计划工期",
        type: "bar",
        stack: "总量0",
        label: {
          normal: {
            show: true,
            color: "#000",
            position: "right",
            formatter: function(params) {
              return params.seriesName
            }
          }
        },
        itemStyle: {
          normal: {
            color: "skyblue",
            borderColor: "#fff",
            borderWidth: 2
          }
        },
        zlevel: -1,
        data: [
          new Date("2020-05-01"),
          new Date("2020-03-14"),
          new Date("2020-05-01")]
      },
        {
          name: "计划工期",
          type: "bar",
          stack: "总量0",
          itemStyle: {
            normal: {
              color: "white",
            }
          },
          zlevel: -1,
          z: 3,
          data: [
            new Date("2020-01-01"),
            new Date("2020-01-01"),
            new Date("2020-03-15")]
        },
        {
          name: "可行性研究阶段",
          type: "bar",
          stack: "总量2",
          label: {
            normal: {
              show: true,
              color: "#000",
              position: "right",
              formatter: function(params) {
                return params.seriesName
              }
            }
          },
          itemStyle: {
            normal: {
              color: "green",
              borderColor: "#fff",
              borderWidth: 2
            }
          },
          zlevel: -1,
          data: [
            new Date("2020-01-10"),
            new Date("2020-01-10"),
            new Date("2020-03-30")]
        },
        {
          name: "可行性研究阶段",
          type: "bar",
          stack: "总量2",
          itemStyle: {
            normal: {
              color: "white",
            }
          },
          zlevel: -1,
          z: 3,
          data: [
            new Date("2020-01-02"),
            new Date("2020-01-02"),
            new Date("2020-03-16")]
        },
        {
          name: "初步设计阶段",
          type: "bar",
          stack: "总量3",
          label: {
            normal: {
              show: true,
              color: "#000",
              position: "right",
              formatter: function(params) {
                return params.seriesName
              }
            }
          },
          itemStyle: {
            normal: {
              color: "red",
              borderColor: "#fff",
              borderWidth: 2
            }
          },
          zlevel: -1,
          data: [
            new Date("2020-02-20"),
            new Date("2020-01-20"),
            new Date("2020-04-10")]
        },
        {
          name: "初步设计阶段",
          type: "bar",
          stack: "总量3",
          itemStyle: {
            normal: {
              color: "white"
            }
          },
          zlevel: -1,
          z: 3,
          data: [
            new Date("2020-02-01"),
            new Date("2020-01-12"),
            new Date("2020-04-01")]
        },
        {
          name: "施工图设计阶段",
          type: "bar",
          stack: "总量4",
          label: {
            normal: {
              show: true,
              color: "#000",
              position: "right",
              formatter: function(params) {
                return params.seriesName
              }
            }
          },
          itemStyle: {
            normal: {
              color: "brown",
              borderColor: "#fff",
              borderWidth: 2
            }
          },
          zlevel: -1,
          data: [
            new Date("2020-03-09"),
            new Date("2020-01-25"),
            new Date("2020-04-20")]
        },
        {
          name: "施工图设计阶段",
          type: "bar",
          stack: "总量4",
          itemStyle: {
            normal: {
              color: "white",
            }
          },
          zlevel: -1,
          z: 3,
          data: [
            new Date("2020-02-25"),
            new Date("2020-01-21"),
            new Date("2020-04-11")]
        },
        {
          name: "项目实施阶段",
          type: "bar",
          stack: "总量5",
          label: {
            normal: {
              show: true,
              color: "#000",
              position: "right",
              formatter: function(params) {
                return params.seriesName
              }
            }
          },
          itemStyle: {
            normal: {
              color: "yellow",
              borderColor: "#fff",
              borderWidth: 2
            }
          },
          zlevel: -1,
          data: [
            new Date("2020-03-12"),
            new Date("2020-02-15"),
            new Date("2020-04-30")]
        },
        {
          name: "项目实施阶段",
          type: "bar",
          stack: "总量5",
          itemStyle: {
            normal: {
              color: "white",
            }
          },
          zlevel: -1,
          z: 3,
          data: [
            new Date("2020-03-10"),
            new Date("2020-01-26"),
            new Date("2020-04-21")]
        },
        {
          name: "项目验收阶段",
          type: "bar",
          stack: "总量6",
          label: {
            normal: {
              show: true,
              color: "#000",
              position: "right",
              formatter: function(params) {
                return params.seriesName
              }
            }
          },
          itemStyle: {
            normal: {
              color: 'orange',
              borderColor: "#fff",
              borderWidth: 2
            }
          },
          zlevel: -1,
          data: [
            new Date("2020-03-30"),
            new Date("2020-03-13"),
            new Date("2020-05-01")]
        },
        {
          name: "项目验收阶段",
          type: "bar",
          stack: "总量6",
          itemStyle: {
            normal: {
              color: 'white',
            }
          },
          zlevel: -1,
          z: 3,
          data: [
            new Date("2020-03-15"),
            new Date("2020-02-16"),
            new Date("2020-04-30")]
        },
      ]
    }
    myCharts.setOption(option);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  border-bottom: 1px solid $index-page-main-border-color-grey;
  padding-bottom: 40px;

  .content {
    min-width: 1012px;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    padding: 0 32px;
    text-align: start;

    > ul {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;

        > .left {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          span {
            background-color: $index-page-main-background-color-blue;
            color: white;
            border-radius: 6px;
            padding: 3px 8px;
            margin-right: 4px;
          }
        }

        > .middle {
          width: 100%;
          padding: 8px 16px;

          ol {
            display: flex;
            justify-content: space-between;
            align-items: center;

            > li {
              margin-right: 8px;
              padding: 3px 12px;
              border-radius: 2em;
              border: 1px solid $index-page-main-border-color-grey;

              display: flex;
              justify-content: center;
              align-items: flex-start;
              transition: all .2s;
              position: relative;

              &:hover {
                cursor: pointer;
                background-color: $index-page-main-background-color-green;
              }

              > .title {
                width: 120px;
                position: absolute;
                bottom: -18px;
                font-size: 12px;
                left: 50%;
                margin-left: -60px;
                color: black;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                border-radius: 2em;
                background: $index-page-main-background-color-grey-7;
                padding: 0 6px;

                &:before {
                  content: "";
                  display: inline-block;
                  border-radius: 50%;
                  width: 8px;
                  height: 8px;
                  background: green;
                  margin-right: 4px;
                }
              }

              > .default {
                font-size: 12px;
                margin-left: 4px;
                color: $index-page-main-background-color-grey-3;
              }

              > .number {
                border-radius: 2em;
                padding: 3px 4px;
                background-color: $index-page-main-background-color-grey-5;
                font-size: 12px;
                margin-left: 4px;
                color: $index-page-main-background-color-green;

              }

              @for $i from 0 through 8 {
                @for $j from 0 through 8 {
                  .hided-user-info-#{$i}-#{$j} {
                    position: absolute;
                    opacity: 0;
                    visibility: hidden;

                    &.is-active {
                      width: 160px;
                      position: absolute;
                      opacity: 1;
                      visibility: visible;
                      left: 20px;
                      top: -116px;
                      z-index: 999;
                      background: $index-page-main-background-color-grey;
                      border: 1px solid $index-page-main-border-color-grey;
                      border-radius: 6px;
                      font-size: 12px;

                      .user-info {
                        padding: 12px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;

                        .avatar {
                          width: 24px;
                          height: 24px;
                          background-color: #2ea44f;
                          border-radius: 50%;
                          margin-right: 8px;
                        }

                        .info {
                          span {
                            font-style: italic;
                            color: red;
                          }
                        }

                      }

                      .authority {
                        padding: 12px;
                        border-top: 1px solid $index-page-main-border-color-grey;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        span {
                          margin-left: 4px;
                        }
                      }

                      > div:last-child {
                        position: absolute;
                        left: 10px;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 8px;
                        border-color: $index-page-main-border-color-grey transparent transparent transparent;
                      }
                    }
                  }
                }
              }

            }
          }
        }
      }
    }

    .content-bottom-button {
      padding-top: 40px;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;

        li {
          padding: 5px 10px;
          border: 1px solid white;
          transition: all .2s;

          &:not(:nth-last-child(2)) {
            margin-right: 4px;
          }

          &.is-active {
            background: $index-page-main-background-color-blue;
            color: white;
            border-radius: 6px;
          }

          &:hover {
            cursor: pointer;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
          }
        }

        > div {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 5px 10px;
          border: 1px solid white;
          transition: all .2s;

          &.is-active {
            color: $index-page-main-middle-font-color-blue;
          }

          &.is-active:hover {
            cursor: pointer;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
          }
        }
      }
    }
  }
}

</style>