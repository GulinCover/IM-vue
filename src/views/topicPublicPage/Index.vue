<template>
  <div class="topic-public-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <header-component/>

      <div class="content">
        <div class="content-left">
          <div class="content-header">
            <div class="content-header-left">
              <div>
                <git-branch-icon :size="'14'"/>
                <span>主线</span>
                <chevron-down-icon :size="'14'"/>
              </div>
              <div>
                <git-branch-icon :size="'14'"/>
                <span>分支</span>
              </div>
              <div>
                <tag-icon :size="'14'"/>
                <span>标签</span>
              </div>
            </div>
            <div class="content-header-right">
              <div>
                <upload-cloud-icon :size="'14'"/>
                <span>提交</span>
              </div>
              <div>
                <download-cloud-icon :size="'14'"/>
                <span>下载</span>
              </div>
            </div>
          </div>

          <div class="content-desc">
            <div class="content-desc-title">
              <div class="content-desc-title-left">
                <span>#</span>
                <span class="level">S</span>
                <span class="sex">M</span>
              </div>
              <div class="content-desc-title-right">
                <span>更新于2021/12/01 12:11</span>
                <clock-icon size="14"/>
                <span>1144个提交</span>
              </div>
            </div>
            <div class="content-desc-intro">
              <div>
                <div class="user">
                  <span>#</span>
                  <span class="level">5</span>
                  <span class="sex">W</span>
                </div>
                <div class="desc">
                  this is a current branch desc
                </div>
                <div class="branch">
                  <span>分支</span>
                  <div class="branch-number">311</div>
                  <div class="branch-value">2</div>
                </div>
                <div class="branch-title">
                  this is a branch title
                </div>
                <div class="entry">
                  <ul>
                    <li class="o">3D</li>
                    <li class="n">4D</li>
                    <li class="h">5D</li>
                    <li class="o">3D</li>
                    <li class="n">4D</li>
                    <li class="h">5D</li>
                    <li class="o">3D</li>
                    <li class="n">4D</li>
                    <li class="h">5D</li>
                    <li class="o">3D</li>
                    <li class="n">4D</li>
                    <li class="h">5D</li>
                    <li class="o">3D</li>
                    <li class="n">4D</li>
                    <li class="h">5D</li>
                    <li class="o">3D</li>
                    <li class="n">4D</li>
                    <li class="h">5D</li>
                    <li class="o">3D</li>
                    <li class="n">4D</li>
                    <li class="h">5D</li>
                    <li class="o">3D</li>
                    <li class="n">4D</li>
                    <li class="h">5D</li>
                    <plus-icon size="14"/>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-wrapper">
            <div class="content-wrapper-top">
              <div>更新于2021/01/01 01:01</div>
              <span>#1</span>
            </div>
            <div class="content-wrapper-show">
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
              <p>dasfas</p>
            </div>
            <div class="content-wrapper-bottom">
              <div>更新于2021/01/01 01:01</div>
              <span>#1</span>
            </div>
            <div class="content-wrapper-bottom-button">
              <span>PRE</span>
              <span>NEXT</span>
            </div>
          </div>
        </div>

        <div class="content-right">
          <div class="content-right-about">
            <h4>{{ locale.topicPublicPageRightAbout }}</h4>
            <p>this is a topic desc</p>
            <ul>
              <li class="h">3D</li>
              <li class="h">3D</li>
              <li class="h">3D</li>
              <li class="h">3D</li>
              <li class="h">3D</li>
              <li class="h">3D</li>
              <li class="h">3D</li>
              <li class="h">3D</li>
              <li class="h">3D</li>
              <li class="h">3D</li>
            </ul>
          </div>

          <div class="content-right-table">
            <h4>
              <span>{{ locale.topicPublicPageRightTable }}</span>
              <span>20</span>
            </h4>
            <div>
              <div>
                <tag-icon size="16"/>
              </div>
              <div>
                <h4>GLEW 2.2.0</h4>
                <p>on 2021/01/01</p>
              </div>
              <div>
                最新
              </div>
            </div>
            <p>+ 全部</p>
          </div>

          <div class="content-right-users">
            <h4>
              <span>{{ locale.topicPublicPageRightUsers }}</span>
              <span>20</span>
            </h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p>+ 全部</p>
          </div>
          <div class="content-right-distribution">
            <h4>{{ locale.topicPublicPageRightEntryRate }}</h4>
            <ul ref="rate">
              <li v-for="(_,key) in entryRate" :key="key">
              </li>
            </ul>
            <ul ref="rateShow">
              <li v-for="(item,key) in entryRate" :key="key">
                <div></div>
                <div style="font-weight: 600">{{ item.name }}</div>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <bottom-component :background-color="'#fff'"/>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import {
  PlusIcon,
  ClockIcon,
  GitBranchIcon,
  UploadCloudIcon,
  DownloadCloudIcon,
  TagIcon,
  ChevronDownIcon
} from "vue-feather-icons"
import HeaderComponent from "@/common/components/topicPublicPage/HeaderComponent";

export default {
  name: "Index",
  components: {
    HeaderComponent,
    BottomComponent,
    TopBar,
    PlusIcon,
    ClockIcon,
    GitBranchIcon,
    UploadCloudIcon,
    DownloadCloudIcon,
    TagIcon,
    ChevronDownIcon,
  },
  data() {
    return {
      locale: this.$locale,
      entryRate: [
        {
          name: "3D",
          number: "125"
        },
        {
          name: "4D",
          number: "2125"
        },
        {
          name: "5D",
          number: "1225"
        },
        {
          name: "6D",
          number: "155"
        },
        {
          name: "7D",
          number: "235"
        },
        {
          name: "8D",
          number: "645"
        },
        {
          name: "9D",
          number: "7635"
        }
      ],
    }
  },
  methods: {
    entryRateShow() {
      let sum = 0
      this.entryRate.forEach(it => {
        sum += Number.parseInt(it.number)
      })

      this.$refs.rate.childNodes.forEach((it, key) => {
        const r = Number.parseInt(this.entryRate[key].number)
        it.style.width = `${r / sum * 100}%`
        const color = `#${Math.random().toString(16).substr(2, 6)}`
        it.style.background = color
        let el = this.$refs.rateShow.childNodes[key]
        el.firstChild.style.background = color
        el.lastChild.innerHTML = `${(r / sum * 100).toFixed(2)}%`
      })

    }
  },
  mounted() {
    this.entryRateShow()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  border-bottom: 1px solid $index-page-main-border-color-grey;

  li {
    &.o {
      background: orange;
    }

    &.h {
      background: $index-page-main-background-color-grey-7;
      color: $index-page-main-background-color-blue;
    }

    &.n {
      color: white;
      background: $index-page-main-background-color-green;
    }
  }

  .content {
    max-width: 1280px;
    margin: 0 auto 40px;
    width: 100%;
    text-align: start;

    @media screen and (min-width: $middle) {
      padding: 0 32px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .content-left {
        width: 75%;
        margin-right: 32px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .content-header {
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;

          .content-header-left {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;

            > div {
              margin-right: 4px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 5px 16px;

              &:first-child {
                background: $index-page-main-background-color-grey;
                border-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }

              &:last-child {
                margin-left: -24px;
              }

              svg {
                margin: 4px;
              }
            }
          }

          .content-header-right {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            > div {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-left: 8px;
              padding: 5px 16px;
              font-size: 14px;
              border-radius: 6px;

              svg {
                margin-right: 4px;
              }

              &:first-child {
                border: 1px solid $index-page-main-border-color-grey;
                background: $index-page-main-background-color-grey;
              }

              &:last-child {
                background: $index-page-main-background-color-green;
                color: white;
              }
            }
          }
        }

        .content-desc {
          margin-bottom: 16px;
          width: 100%;

          .content-desc-title {
            padding: 16px;
            border: 1px solid $index-page-main-background-color-blue-4;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            background: $index-page-main-background-color-blue-2;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;

            .content-desc-title-left {
              span {
                margin-right: 8px;

                &:first-child {
                  padding: 0 4px;
                  border-radius: 50%;
                  background: #6a737d;
                }

                &.level {
                  color: red;
                  font-style: italic;
                }

                &.sex {
                  color: #2ea44f;
                  font-style: italic;
                }
              }
            }

            .content-desc-title-right {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              span {
                margin: 0 4px;
                color: $index-page-main-font-color-grey-3;
              }
            }
          }

          .content-desc-intro {
            border: 1px solid $index-page-main-border-color-grey;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            border-top: none;

            > div {
              padding: 16px;

              > div {
                margin-bottom: 8px;
                font-size: 14px;

                &.user {
                  span {
                    margin-right: 8px;

                    &:first-child {
                      padding: 0 4px;
                      border-radius: 50%;
                      background: #6a737d;
                    }

                    &.level {
                      color: orange;
                      font-style: italic;
                    }

                    &.sex {
                      color: deeppink;
                      font-style: italic;
                    }
                  }
                }

                &.branch {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;

                  span {
                    margin-right: 4px;
                  }

                  .branch-number {
                    padding: 3px 12px;
                    background: #2ea44f;
                    border-radius: 6px;
                    margin-right: 4px;
                  }

                  .branch-value {
                    padding: 3px 12px;
                    background: orange;
                    border-radius: 6px;
                  }
                }

                &.entry {
                  ul {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-items: center;

                    li {
                      padding: 3px 12px;
                      border-radius: 2em;
                      margin-right: 4px;
                      margin-bottom: 4px;
                    }
                  }
                }
              }


            }
          }
        }

        .content-wrapper {
          width: 100%;

          .content-wrapper-top {
            padding: 16px;
            border: 1px solid $index-page-main-border-color-grey;
            border-bottom: none;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            font-style: italic;
            position: relative;

            > div {
              background: $index-page-main-background-color-grey;
              text-align: center;
              width: 180px;
              position: absolute;
              padding: 3px 12px;
              border-radius: 6px;
              border: 1px solid $index-page-main-border-color-grey;
              font-size: 12px;
              z-index: 99;
              top: 0;
              left: 50%;
              margin-top: -12px;
              margin-left: -90px;
            }
          }

          .content-wrapper-show {
            padding: 16px 32px 32px;
            border: 1px solid $index-page-main-border-color-grey;
            border-top: none;
            border-bottom: none;


          }

          .content-wrapper-bottom {
            padding: 16px;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            border-top: none;
            position: relative;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-style: italic;

            > div {
              background: $index-page-main-background-color-grey;
              text-align: center;
              width: 180px;
              position: absolute;
              padding: 3px 12px;
              border-radius: 6px;
              border: 1px solid $index-page-main-border-color-grey;
              font-size: 12px;
              z-index: 99;
              bottom: 0;
              left: 50%;
              margin-bottom: -12px;
              margin-left: -90px;
            }
          }

          .content-wrapper-bottom-button {
            margin-top: 32px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              padding: 3px 8px;
              font-size: 12px;

              &.is-active {
                background: $index-page-main-background-color-grey-5;
              }

              &:first-child {
                border: 1px solid $index-page-main-border-color-grey;
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
                border-right: none;
              }

              &:last-child {
                border: 1px solid $index-page-main-border-color-grey;
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
              }
            }
          }
        }
      }

      .content-right {
        width: 25%;

        .content-right-about {
          padding: 8px 0 24px;
          border-bottom: 1px solid $index-page-main-border-color-grey;

          > h4 {
            margin-bottom: 16px;
          }

          > p {
            margin-bottom: 16px;
          }

          > ul {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-bottom: 16px;

            li {
              padding: 0 10px;
              margin-right: 1.5px;
              margin-bottom: 4px;
              border-radius: 2em;
            }
          }
        }

        .content-right-table {
          padding: 24px 0;
          border-bottom: 1px solid $index-page-main-border-color-grey;

          > h4 {
            margin-bottom: 16px;

            span:last-child {
              margin-left: 4px;
              border-radius: 2em;
              background: $index-page-main-background-color-grey-5;
              padding: 0 6px;
              font-size: 12px;
            }
          }

          > div {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 24px;

            > div {
              margin-right: 8px;
              line-height: 1.5;
              font-size: 12px;

              &:first-child {
                margin-top: 4px;
              }

              &:last-child {
                padding: 0 7px;
                border-radius: 2em;
                border: 1px solid $index-page-main-background-color-green;
              }

              svg {
                stroke: $index-page-main-background-color-green;
              }

              h4 {
                font-size: 14px;
              }
            }
          }

          > p {
            margin-bottom: 8px;
            color: $index-page-main-background-color-blue;
            font-size: 12px;
          }

        }

        .content-right-users {
          padding: 24px 0;
          border-bottom: 1px solid $index-page-main-border-color-grey;

          > h4 {
            margin-bottom: 16px;

            span:last-child {
              margin-left: 4px;
              border-radius: 2em;
              background: $index-page-main-background-color-grey-5;
              padding: 0 6px;
              font-size: 12px;
            }
          }

          ul {
            width: 85%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;

            li {
              border-radius: 50%;
              width: 32px;
              height: 32px;
              margin: 0 8px 8px 0;
              background: #2ea44f;
            }

          }

          > p {
            margin-top: 16px;
            margin-bottom: 8px;
            color: $index-page-main-background-color-blue;
            font-size: 12px;
          }

        }

        .content-right-distribution {
          padding: 24px 0;

          > h4 {
            margin-bottom: 16px;

            span:last-child {
              margin-left: 4px;
              border-radius: 2em;
              background: $index-page-main-background-color-grey-5;
              padding: 0 6px;
              font-size: 12px;
            }
          }

          > ul:nth-child(2) {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 8px;

            li {
              height: 8px;

              &:first-child {
                border-top-left-radius: 2em;
                border-bottom-left-radius: 2em;
              }

              &:last-child {
                border-top-right-radius: 2em;
                border-bottom-right-radius: 2em;
              }

              &:not(:first-child) {
                margin-right: 2px;
              }
            }
          }

          > ul:last-child {
            font-size: 12px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;

            li {
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              align-items: center;
              margin-right: 16px;

              > div:first-child {
                border-radius: 50%;
                margin-right: 16px;
                width: 8px;
                height: 8px;
              }

              > div:last-child {
                margin-left: 8px;
                color: $index-page-main-font-color-grey-3;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: $middle) {
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .content-left {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .content-header {
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;

          .content-header-left {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;

            > div {
              margin-right: 4px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 5px 16px;

              &:first-child {
                background: $index-page-main-background-color-grey;
                border-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }

              &:last-child {
                margin-left: -24px;
              }

              svg {
                margin: 4px;
              }
            }
          }

          .content-header-right {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            > div {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-left: 8px;
              padding: 5px 16px;
              font-size: 14px;
              border-radius: 6px;

              svg {
                margin-right: 4px;
              }

              &:first-child {
                border: 1px solid $index-page-main-border-color-grey;
                background: $index-page-main-background-color-grey;
              }

              &:last-child {
                background: $index-page-main-background-color-green;
                color: white;
              }
            }
          }
        }

        .content-desc {
          margin-bottom: 16px;
          width: 100%;

          .content-desc-title {
            padding: 16px;
            border: 1px solid $index-page-main-background-color-blue-4;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            background: $index-page-main-background-color-blue-2;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;

            .content-desc-title-left {
              span {
                margin-right: 8px;

                &:first-child {
                  padding: 0 4px;
                  border-radius: 50%;
                  background: #6a737d;
                }

                &.level {
                  color: red;
                  font-style: italic;
                }

                &.sex {
                  color: #2ea44f;
                  font-style: italic;
                }
              }
            }

            .content-desc-title-right {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              span {
                margin: 0 4px;
                color: $index-page-main-font-color-grey-3;
              }
            }
          }

          .content-desc-intro {
            border: 1px solid $index-page-main-border-color-grey;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            border-top: none;

            > div {
              padding: 16px;

              > div {
                margin-bottom: 8px;
                font-size: 14px;

                &.user {
                  span {
                    margin-right: 8px;

                    &:first-child {
                      padding: 0 4px;
                      border-radius: 50%;
                      background: #6a737d;
                    }

                    &.level {
                      color: orange;
                      font-style: italic;
                    }

                    &.sex {
                      color: deeppink;
                      font-style: italic;
                    }
                  }
                }

                &.branch {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;

                  span {
                    margin-right: 4px;
                  }

                  .branch-number {
                    padding: 3px 12px;
                    background: #2ea44f;
                    border-radius: 6px;
                    margin-right: 4px;
                  }

                  .branch-value {
                    padding: 3px 12px;
                    background: orange;
                    border-radius: 6px;
                  }
                }

                &.entry {
                  ul {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-items: center;

                    li {
                      padding: 3px 12px;
                      border-radius: 2em;
                      margin-right: 4px;
                      margin-bottom: 4px;
                    }
                  }
                }
              }


            }
          }
        }

        .content-wrapper {
          width: 100%;

          .content-wrapper-top {
            padding: 16px;
            border: 1px solid $index-page-main-border-color-grey;
            border-bottom: none;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            font-style: italic;
            position: relative;

            > div {
              background: $index-page-main-background-color-grey;
              text-align: center;
              width: 180px;
              position: absolute;
              padding: 3px 12px;
              border-radius: 6px;
              border: 1px solid $index-page-main-border-color-grey;
              font-size: 12px;
              z-index: 99;
              top: 0;
              left: 50%;
              margin-top: -12px;
              margin-left: -90px;
            }
          }

          .content-wrapper-show {
            padding: 16px 32px 32px;
            border: 1px solid $index-page-main-border-color-grey;
            border-top: none;
            border-bottom: none;


          }

          .content-wrapper-bottom {
            padding: 16px;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            border-top: none;
            position: relative;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-style: italic;

            > div {
              background: $index-page-main-background-color-grey;
              text-align: center;
              width: 180px;
              position: absolute;
              padding: 3px 12px;
              border-radius: 6px;
              border: 1px solid $index-page-main-border-color-grey;
              font-size: 12px;
              z-index: 99;
              bottom: 0;
              left: 50%;
              margin-bottom: -12px;
              margin-left: -90px;
            }
          }

          .content-wrapper-bottom-button {
            margin-top: 32px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              padding: 3px 8px;
              font-size: 12px;

              &.is-active {
                background: $index-page-main-background-color-grey-5;
              }

              &:first-child {
                border: 1px solid $index-page-main-border-color-grey;
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
                border-right: none;
              }

              &:last-child {
                border: 1px solid $index-page-main-border-color-grey;
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
              }
            }
          }
        }
      }

      .content-right {
        width: 100%;

        .content-right-about {
          display: none;
        }

        .content-right-table {
          padding: 24px 0;
          border-bottom: 1px solid $index-page-main-border-color-grey;

          > h4 {
            margin-bottom: 16px;

            span:last-child {
              margin-left: 4px;
              border-radius: 2em;
              background: $index-page-main-background-color-grey-5;
              padding: 0 6px;
              font-size: 12px;
            }
          }

          > div {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 24px;

            > div {
              margin-right: 8px;
              line-height: 1.5;
              font-size: 12px;

              &:first-child {
                margin-top: 4px;
              }

              &:last-child {
                padding: 0 7px;
                border-radius: 2em;
                border: 1px solid $index-page-main-background-color-green;
              }

              svg {
                stroke: $index-page-main-background-color-green;
              }

              h4 {
                font-size: 14px;
              }
            }
          }

          > p {
            margin-bottom: 8px;
            color: $index-page-main-background-color-blue;
            font-size: 12px;
          }

        }

        .content-right-users {
          padding: 24px 0;
          border-bottom: 1px solid $index-page-main-border-color-grey;

          > h4 {
            margin-bottom: 16px;

            span:last-child {
              margin-left: 4px;
              border-radius: 2em;
              background: $index-page-main-background-color-grey-5;
              padding: 0 6px;
              font-size: 12px;
            }
          }

          ul {
            width: 85%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;

            li {
              border-radius: 50%;
              width: 32px;
              height: 32px;
              margin: 0 8px 8px 0;
              background: #2ea44f;
            }

          }

          > p {
            margin-top: 16px;
            margin-bottom: 8px;
            color: $index-page-main-background-color-blue;
            font-size: 12px;
          }

        }

        .content-right-distribution {
          padding: 24px 0;

          > h4 {
            margin-bottom: 16px;

            span:last-child {
              margin-left: 4px;
              border-radius: 2em;
              background: $index-page-main-background-color-grey-5;
              padding: 0 6px;
              font-size: 12px;
            }
          }

          > ul:nth-child(2) {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 8px;

            li {
              height: 8px;

              &:first-child {
                border-top-left-radius: 2em;
                border-bottom-left-radius: 2em;
              }

              &:last-child {
                border-top-right-radius: 2em;
                border-bottom-right-radius: 2em;
              }

              &:not(:first-child) {
                margin-right: 2px;
              }
            }
          }

          > ul:last-child {
            font-size: 12px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;

            li {
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              align-items: center;
              margin-right: 16px;

              > div:first-child {
                border-radius: 50%;
                margin-right: 16px;
                width: 8px;
                height: 8px;
              }

              > div:last-child {
                margin-left: 8px;
                color: $index-page-main-font-color-grey-3;
              }
            }
          }
        }
      }
    }


  }
}

</style>
















