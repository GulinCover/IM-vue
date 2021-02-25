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