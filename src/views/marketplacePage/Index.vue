<template>
  <div class="index-marketplace-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="banner"></div>

      <div class="content-wrapper">
        <div class="content">
          <div class="backdrop">
            <div class="left">
              <div class="left-menu">
                <div>
                  <h3>{{ locale.types }}</h3>
                  <ul>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                  </ul>
                </div>
                <div>
                  <h3>{{ locale.categories }}</h3>
                  <ul>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                    <li>dasdsa</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="right">
              <div class="search">
                <search-icon :size="'18'"/>
                <input type="text">
              </div>

              <div class="left-menu-bar"
                   @click="activePopMenu"
              >MENU</div>

              <div class="official-recommended">
                <h3>{{ locale.officialRecommended }}</h3>
                <ul>
                  <li>
                    <div>#</div>
                    <h3>测试</h3>
                  </li>
                  <li>
                    <div>#</div>
                    <h3>测试</h3>
                  </li>
                  <li>
                    <div>#</div>
                    <h3>测试</h3>
                  </li>
                  <li>
                    <div>#</div>
                    <h3>测试</h3>
                  </li>
                </ul>
                <a href="">{{ locale.viewAll }}</a>
              </div>
              <div class="hot-recommended">
                <h3>{{ locale.hotRecommended }}</h3>
                <ul>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <a href="">{{ locale.viewAll }}</a>
              </div>
              <div class="recently-added">
                <h3>{{ locale.recentlyAdded }}</h3>
                <ul>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <a href="">{{ locale.viewAll }}</a>
              </div>
              <div class="entry-recommended">
                <h3>{{ locale.entryRecommended }}</h3>
                <p>this is a entry desc</p>
                <ul>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="avatar">#</div>
                      <div class="content">
                        <h3>test</h3>
                        <p>this is a topic desc</p>
                        <p>By 66</p>
                        <p>当前: 66c</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <a href="">{{ locale.viewAll }}</a>
              </div>
            </div>
          </div>

          <div class="bottom-card-wrapper">
            <div class="bottom-card">
              <div>
                <shopping-bag-icon :size="'48'"/>
              </div>
              <h3>这里可以购买物品</h3>
              <div class="intro-wrapper">
                <div class="intro">
                  <h3>阅读购买协议</h3>
                  <p>阅读购买协议阅读购买协议阅读购买协议阅读购买协议</p>
                </div>
                <div class="intro">
                  <h3>阅读售卖协议</h3>
                  <p>阅读购买协议阅读购买协议阅读购买协议阅读购买协议</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pop-menu-wrapper" :class="{'is-active':isPopMenuActive}">
        <div class="pop-menu">
          <h3>
            <span>Menu</span>
            <x-icon @click="closePopMenu"/>
          </h3>

          <div>
            <div>
              <h3>{{ locale.types }}</h3>
              <ul>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
              </ul>
            </div>
            <div>
              <h3>{{ locale.categories }}</h3>
              <ul>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
                <li>dasdsa</li>
              </ul>
            </div>
          </div>

          <div class="button">
            <div @click="closePopMenu">Close</div>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <bottom-component/>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import {SearchIcon, ShoppingBagIcon, XIcon} from "vue-feather-icons"

export default {
  name: "Index",
  components: {
    BottomComponent,
    TopBar,
    SearchIcon, ShoppingBagIcon, XIcon,
  },
  data() {
    return {
      locale: this.$locate,
      isPopMenuActive: false,
    }
  },
  methods: {
    fixPopMenu() {
      if (this.isPopMenuActive) {
        let element = document.querySelector(".pop-menu-wrapper")
        element.style.top = `${window.scrollY}px`
      }
    },

    activePopMenu() {
      this.isPopMenuActive = !this.isPopMenuActive
    },

    closePopMenu() {
      this.isPopMenuActive = false
    }
  },

  mounted() {
    window.addEventListener("scroll", this.fixPopMenu)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.pop-menu-wrapper.is-active {
  display: flex;
}

main {
  width: 100%;
  background: $index-page-main-background-color-grey;

  .banner {
    height: 319px;
    max-width: 1012px;
    background: white;
  }

  .content-wrapper {
    background: $index-page-main-background-color-grey;
    width: 100%;

    .content {

      .backdrop {
        max-width: 1012px;
        margin: 0 auto;
        padding: 0 16px;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        @media screen and (min-width: $max) {
          .left {
            flex: 1;
            padding: 8px 32px 40px 0;

            .left-menu {
              font-size: 14px;
              color: $index-page-main-font-color-grey-3;

              > div {
                text-align: start;

                h3 {
                  margin-bottom: 36px;
                }

                ul {
                  margin-bottom: 24px;

                  li {
                    padding: 8px 16px;
                    border-radius: 6px;

                    &:hover {
                      cursor: pointer;
                      background: white;
                    }
                  }
                }
              }
            }
          }

          .right {
            flex: 3.5;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            .search {
              width: 100%;
              padding: 12px 12px 12px 12px;
              border-radius: 6px;
              border: 1px solid $index-page-main-border-color-grey;
              background: white;
              text-align: start;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              svg {
                margin-right: 10px;
              }

              input {
                border: none;
                width: 100%;
                height: 100%;
              }
            }

            .left-menu-bar {
              display: none;
            }

            .official-recommended {
              width: 100%;

              > h3 {
                width: 100%;
                text-align: start;
                margin: 16px 0;
                font-size: 18px;
              }

              ul {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;

                li {
                  padding: 24px;
                  margin-bottom: 24px;
                  border-radius: 6px;
                  background: white;
                  box-shadow: $color-shadow-medium;
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  align-items: center;

                  > h3 {
                    margin-top: 8px;
                  }

                  > div {
                    margin: 0 auto;
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                    box-shadow: $color-shadow-medium;
                    transition: all .15s;
                    position: relative;
                    top: 0;

                    &:hover {
                      top: -5px;
                      box-shadow: $color-shadow-large;
                      cursor: pointer;
                    }
                  }


                  &:nth-child(even) {
                    margin-left: 16px;
                  }

                  &:nth-child(odd) {
                    margin-right: 16px;
                  }
                }
              }
            }

            .entry-recommended,
            .recently-added,
            .hot-recommended {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;

              > h3 {
                width: 100%;
                text-align: start;
                margin: 16px 0;
                font-size: 18px;
              }

              > p {
                text-align: start;
                width: 100%;
                margin-bottom: 10px;
              }

              ul {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;

                li {
                  margin-bottom: 24px;

                  a {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;

                    .avatar {
                      width: 56px;
                      height: 56px;
                      overflow: hidden;
                      border-radius: 50%;
                      box-shadow: $color-shadow-large;
                    }

                    .content {
                      width: auto;
                      padding: 0 16px;
                      text-align: start;
                      line-height: 1.25;

                      p {
                        font-size: 14px;
                        color: $index-page-main-font-color-grey-3;
                      }
                    }
                  }
                }
              }

              > a {
                width: 100%;
                text-align: start;
                font-size: 12px;
                margin-bottom: 40px;
              }
            }
          }
        }

        @media screen and (max-width: $max) and (min-width: $middle) {
          .left {
            display: none;
          }

          .right {
            flex: 3.5;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            .search {
              width: 100%;
              padding: 12px 12px 12px 12px;
              border-radius: 6px;
              border: 1px solid $index-page-main-border-color-grey;
              background: white;
              text-align: start;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              svg {
                margin-right: 10px;
              }

              input {
                border: none;
                width: 100%;
                height: 100%;
              }
            }

            .left-menu-bar {
              margin: 16px 0;
              border: 1px solid $index-page-main-border-color-grey;
              border-radius: 6px;
              width: 100%;
              padding: 10.5px 21px;
              opacity: .8;

              &:hover {
                opacity: 1;
                background: $index-page-main-background-color-grey-2;
                cursor: pointer;
              }
            }

            .official-recommended {
              width: 100%;

              > h3 {
                width: 100%;
                text-align: start;
                margin: 16px 0;
                font-size: 18px;
              }

              ul {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;

                li {
                  padding: 24px;
                  margin-bottom: 24px;
                  border-radius: 6px;
                  background: white;
                  box-shadow: $color-shadow-medium;
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  align-items: center;

                  > h3 {
                    margin-top: 8px;
                  }

                  > div {
                    margin: 0 auto;
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                    box-shadow: $color-shadow-medium;
                    transition: all .15s;
                    position: relative;
                    top: 0;

                    &:hover {
                      top: -5px;
                      box-shadow: $color-shadow-large;
                      cursor: pointer;
                    }
                  }


                  &:nth-child(even) {
                    margin-left: 16px;
                  }

                  &:nth-child(odd) {
                    margin-right: 16px;
                  }
                }
              }
            }

            .entry-recommended,
            .recently-added,
            .hot-recommended {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;

              > h3 {
                width: 100%;
                text-align: start;
                margin: 16px 0;
                font-size: 18px;
              }

              > p {
                text-align: start;
                width: 100%;
                margin-bottom: 10px;
              }

              ul {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;

                li {
                  margin-bottom: 24px;

                  a {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;

                    .avatar {
                      width: 56px;
                      height: 56px;
                      overflow: hidden;
                      border-radius: 50%;
                      box-shadow: $color-shadow-large;
                    }

                    .content {
                      width: auto;
                      padding: 0 16px;
                      text-align: start;
                      line-height: 1.25;

                      p {
                        font-size: 14px;
                        color: $index-page-main-font-color-grey-3;
                      }
                    }
                  }
                }
              }

              > a {
                width: 100%;
                text-align: start;
                font-size: 12px;
                margin-bottom: 40px;
              }
            }
          }
        }

        @media screen and (max-width: $middle) {
          .left {
            display: none;
          }

          .right {
            flex: 3.5;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            .search {
              width: 100%;
              padding: 12px 12px 12px 12px;
              border-radius: 6px;
              border: 1px solid $index-page-main-border-color-grey;
              background: white;
              text-align: start;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              svg {
                margin-right: 10px;
              }

              input {
                border: none;
                width: 100%;
                height: 100%;
              }
            }

            .left-menu-bar {
              margin: 16px 0;
              border: 1px solid $index-page-main-border-color-grey;
              border-radius: 6px;
              width: 100%;
              padding: 10.5px 21px;
              opacity: .8;

              &:hover {
                opacity: 1;
                background: $index-page-main-background-color-grey-2;
                cursor: pointer;
              }
            }

            .official-recommended {
              width: 100%;

              > h3 {
                width: 100%;
                text-align: start;
                margin: 16px 0;
                font-size: 18px;
              }

              ul {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr;

                li {
                  padding: 24px;
                  margin-bottom: 24px;
                  border-radius: 6px;
                  background: white;
                  box-shadow: $color-shadow-medium;
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  align-items: center;

                  > h3 {
                    margin-top: 8px;
                  }

                  > div {
                    margin: 0 auto;
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                    box-shadow: $color-shadow-medium;
                    transition: all .15s;
                    position: relative;
                    top: 0;

                    &:hover {
                      top: -5px;
                      box-shadow: $color-shadow-large;
                      cursor: pointer;
                    }
                  }
                }
              }
            }

            .entry-recommended,
            .recently-added,
            .hot-recommended {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;

              > h3 {
                width: 100%;
                text-align: start;
                margin: 16px 0;
                font-size: 18px;
              }

              > p {
                text-align: start;
                width: 100%;
                margin-bottom: 10px;
              }

              ul {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr;

                li {
                  margin-bottom: 24px;

                  a {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;

                    .avatar {
                      width: 56px;
                      height: 56px;
                      overflow: hidden;
                      border-radius: 50%;
                      box-shadow: $color-shadow-large;
                    }

                    .content {
                      width: auto;
                      padding: 0 16px;
                      text-align: start;
                      line-height: 1.25;

                      p {
                        font-size: 14px;
                        color: $index-page-main-font-color-grey-3;
                      }
                    }
                  }
                }
              }

              > a {
                width: 100%;
                text-align: start;
                font-size: 12px;
                margin-bottom: 40px;
              }
            }
          }
        }
      }

      .bottom-card-wrapper {
        margin: 24px auto 40px;
        padding: 0 16px;
        max-width: 1012px;
        width: 100%;

        @media screen and (min-width: $middle) {
          .bottom-card {
            margin: 0 auto;
            background: white;
            box-shadow: $color-shadow-extra-large;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 40px;

            > h3 {
              margin-left: 24px;
              padding-right: 80px;
            }

            .intro-wrapper {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding-left: 40px;

              .intro {
                line-height: 1.5;
                margin-right: 32px;
                font-size: 12px;
                text-align: start;
              }
            }
          }
        }

        @media screen and (max-width: $middle) and (min-width: $mini) {
          .bottom-card {
            margin: 0 auto;
            background: white;
            box-shadow: $color-shadow-extra-large;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 40px;

            > div {
              margin-bottom: 16px;
            }

            > h3 {
              width: 100%;
              margin-bottom: 16px;
            }

            .intro-wrapper {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              .intro {
                line-height: 1.5;
                margin-right: 16px;
                font-size: 12px;
                text-align: start;

                &:last-child {
                  margin: 0 0 0 16px;
                }
              }
            }
          }
        }

        @media screen and (max-width: $mini) {
          .bottom-card {
            margin: 0 auto;
            background: white;
            box-shadow: $color-shadow-extra-large;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 40px;

            > div {
              margin-bottom: 16px;
            }

            > h3 {
              width: 100%;
              margin-bottom: 16px;
            }

            .intro-wrapper {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;

              .intro {
                line-height: 1.5;
                font-size: 12px;
                margin-bottom: 16px;
              }
            }
          }
        }

      }

    }
  }


  .pop-menu-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($index-page-main-background-color-grey-4, .45);
    backdrop-filter: blur(9px);
    display: none;
    justify-content: center;
    align-items: center;

    .pop-menu {
      overflow: hidden;
      max-height: 80vh;
      max-width: 90vw;
      width: 100%;
      z-index: 99;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      border-radius: 6px;
      border: 1px solid $index-page-main-border-color-grey;

      > h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 16px;
        background: $index-page-main-background-color-grey;
        border-bottom: 1px solid $index-page-main-border-color-grey;

        svg:hover {
          color: $index-page-main-middle-font-color-blue;
        }
      }

      > div {
        width: 100%;
        background: white;
        font-size: 14px;
        text-align: start;
        overflow: scroll;
        overflow-x: hidden;

        &:last-child {
          background: $index-page-main-background-color-grey;
          padding: 16px;
          border-top: 1px solid $index-page-main-border-color-grey;
          overflow: hidden;

          div {
            text-align: center;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            padding: 5px 16px;
          }
        }

        > div {
          padding: 16px;

          &:first-child {
            border-bottom: 1px solid $index-page-main-border-color-grey;
          }

          > h3 {
            margin-bottom: 4px;
          }

          ul {
            li {
              padding: 4px 16px;
              border-radius: 6px;
              transition: all .2s;

              &:hover {
                cursor: pointer;
                background: $index-page-main-background-color-grey;
              }
            }
          }
        }
      }


    }
  }
}

</style>