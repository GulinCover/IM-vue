<template>
  <div class="index-hot-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <nav-component
          :path-name="this.$route.name"
      />

      <div class="hot-desc">
        <h2>{{locale.hotPageH2}}</h2>
        <p>{{locale.hotPageDesc}}</p>
      </div>

      <div class="hot-content">
        <div>
          <div class="header">
            <div class="hot-topic-switch">
              <div class="topic-hot" :class="{'is-active':isTrue}">{{locale.hotPageHot}}</div>
              <div class="topic-hot" :class="{'is-active':!isTrue}">{{locale.hotPageTopic}}</div>
            </div>
            <div class="button">
              <div class="event-related">{{locale.hotPageEventRelatedButton}}:{{this.eventRelated === "" ? "Any" : this.eventRelated}}</div>
              <div class="entry-related">{{locale.hotPageEntryRelatedButton}}:{{this.eventRelated === "" ? "Any" : this.entryRelated}}</div>
              <div class="date-related">{{locale.hotPageTimeRelatedButton}}:{{this.eventRelated === "" ? "Any" : this.timeRelated}}</div>
            </div>
          </div>

          <div class="content">
            <ul>
              <li>
                <div class="left">
                  <div>
                    <book-open-icon :size="'12'"/>
                    <a href="">dasdsa</a>/
                    <a href="">dasda</a>
                  </div>
                  <p>dasfasfasfas</p>
                  <div>
                    <div>
                      <div>
                        <span></span>
                        3D
                      </div>
                      <div>
                        <star-icon :size="'12'"/>
                        997
                      </div>
                      <div>
                        <share-2-icon :size="'12'"/>
                        57
                      </div>
                      <div>
                        <span>Built By</span>
                        <span></span>
                      </div>
                    </div>
                    <div>
                      <star-icon :size="'15'"/>
                      371 Stars Today
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div>
                    <star-icon :size="'15'"/>
                    Star
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </main>

    <footer>
      <bottom-component
          :locale="locale"
          :bottom-data="bottomData"
      />
      <div class="backdrop"></div>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import NavComponent from "@/common/components/topicPage/NavComponent";
import BottomComponent from "@/common/components/explorePage/BottomComponent";
import {BookOpenIcon,StarIcon,Share2Icon} from "vue-feather-icons"

export default {
  name: "Index",
  components: {
    BottomComponent,
    NavComponent,
    TopBar,
    BookOpenIcon,StarIcon,Share2Icon
  },
  data() {
    return {
      locale:this.$locale,
      bottomData: {
        first: {
          left: {
            name: 'GitHub',
            h3: "请支持GitHub",
            p: "感谢GitHub的技术支持",
            url: "https://github.com",
          },
          right: [],
        },
        second: [
          {
            name: "@2021GitHub,Inc,",
            url: '',
          },
          {
            name: "Terms",
            url: '',
          },
          {
            name: "Policy",
            url: '',
          },
          {
            name: "What is WeekType?",
            url: '',
          },
        ],
      },

      eventRelated: "",
      entryRelated: "",
      timeRelated: "",
      isTrue: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  .hot-desc {
    margin: 0 auto;
    padding: 40px 16px;
    background: $index-page-main-background-color-grey;
    line-height: 1.5;
    border-bottom: 1px solid $index-page-main-border-color-grey;

    h2 {
      font-size: 40px;
    }

    p {
      margin: 0 auto 10px;
      font-size: 14px;
    }
  }

  .hot-content {
    margin: 0 auto;
    max-width: 1012px;
    @media screen and (min-width: $middle) {
      padding: 40px 16px 0;
    }

    @media screen and (max-width: $middle) {
      padding: 40px 40px 0;
    }

    > div {
      border: 1px solid $index-page-main-border-color-grey;
      overflow: hidden;
      border-radius: 6px;

      .header {
        @media screen and (min-width: $middle){
          padding: 16px;
          background: $index-page-main-background-color-grey;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .hot-topic-switch {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .topic-hot {
              padding: 5px 16px;
              width: 128px;

              &:first-child {
                border-bottom-left-radius: 6px;
                border-top-left-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                border-right: none;
              }

              &:last-child {
                border-bottom-right-radius: 6px;
                border-top-right-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }

              &.is-active {
                background: $index-page-main-background-color-blue;
                color: white;
                border-color: $index-page-main-background-color-blue;
              }
            }


          }

          .button {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            div {
              padding: 0 15px;
            }
          }
        }

        @media screen and (max-width: $middle) and (min-width: $mini) {
          padding: 16px;
          background: $index-page-main-background-color-grey;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: center;

          .hot-topic-switch {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .topic-hot {
              padding: 5px 16px;
              width: 128px;

              &:first-child {
                border-bottom-left-radius: 6px;
                border-top-left-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                border-right: none;
              }

              &:last-child {
                border-bottom-right-radius: 6px;
                border-top-right-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }

              &.is-active {
                background: $index-page-main-background-color-blue;
                color: white;
                border-color: $index-page-main-background-color-blue;
              }
            }


          }

          .button {
            margin-top: 16px;
            margin-left: -8px;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            div {
              padding: 0 15px;
            }
          }
        }

        @media screen and (max-width: $mini) {
          padding: 16px;
          background: $index-page-main-background-color-grey;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: center;

          .hot-topic-switch {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .topic-hot {
              padding: 5px 16px;
              width: 128px;

              &:first-child {
                border-bottom-left-radius: 6px;
                border-top-left-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                border-right: none;
              }

              &:last-child {
                border-bottom-right-radius: 6px;
                border-top-right-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }

              &.is-active {
                background: $index-page-main-background-color-blue;
                color: white;
                border-color: $index-page-main-background-color-blue;
              }
            }


          }

          .button {
            margin-top: 16px;
            margin-left: -8px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

            div {
              padding: 0 15px;
              margin-top: 16px;
            }
          }
        }
      }

      .content {
        width: 100%;

        ul {
          li {
            border-top: 1px solid $index-page-main-border-color-grey;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            .left {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;

              > div:first-child {
                a {
                  margin: 0 4px;
                  color: $index-page-main-middle-font-color-blue;

                  &:nth-child(2) {
                    color: $index-page-main-middle-font-color-blue-4;
                  }

                  &:hover {
                    text-decoration: underline;
                  }

                }

                svg {
                  margin-right: 4px;
                }
              }

              p {
                color: $index-page-main-font-color-grey-3;
                font-size: 14px;
                text-align: start;
                margin: 4px 24px 4px 0;
              }

              > div:last-child {

                @media screen and (min-width: $mini) {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  font-size: 12px;

                  > div:first-child {
                    margin-top: 8px;
                    font-size: 12px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    > div {
                      margin-right: 16px;
                    }

                    div:nth-child(1) {
                      > span {
                        display: inline-block;
                        border-radius: 50%;
                        background: #4c92e2;
                        width: 10px;
                        height: 10px;
                      }
                    }

                    > div:last-child {
                      display: flex;
                      justify-content: flex-start;
                      align-items: center;

                      span:last-child {
                        display: inline-block;
                        border-radius: 50%;
                        width: 16px;
                        height: 16px;
                        background: #4c92e2;
                        margin-left: 4px;
                      }
                    }
                  }

                  > div:last-child {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    right: -60px;

                    svg {
                      margin-right: 4px;
                    }
                  }
                }

                @media screen and (max-width: $mini) {
                  width: 100%;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  flex-wrap: wrap;
                  font-size: 12px;

                  > div:first-child {
                    margin-top: 8px;
                    font-size: 12px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    > div {
                      margin-right: 16px;
                    }

                    div:nth-child(1) {
                      > span {
                        display: inline-block;
                        border-radius: 50%;
                        background: #4c92e2;
                        width: 10px;
                        height: 10px;
                      }
                    }

                    > div:last-child {
                      display: flex;
                      justify-content: flex-start;
                      align-items: center;

                      span:last-child {
                        display: inline-block;
                        border-radius: 50%;
                        width: 16px;
                        height: 16px;
                        background: #4c92e2;
                        margin-left: 4px;
                      }
                    }
                  }

                  > div:last-child {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    right: -60px;

                    svg {
                      margin-right: 4px;
                    }
                  }
                }
              }
            }

            .right {
              height: 100%;
              font-size: 12px;

              > div {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                padding: 3px 12px;

                svg {
                  margin-right: 4px;
                }
              }
            }
          }
        }

      }
    }
  }
}

footer {
  width: 100%;
  position: relative;

  > div:first-child {
    border: none!important;
    max-width: 1012px;
  }

  .backdrop {
    position: absolute;
    width: 100%;
    height: 76px;
    background: $index-page-main-background-color-grey;
    z-index: -1;
    bottom: 0;
  }
}

</style>