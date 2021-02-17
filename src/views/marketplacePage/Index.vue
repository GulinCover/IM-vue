<template>
  <div class="index-marketplace-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="banner"></div>

      <pop-menu-and-left-nav-component>
        <template slot="content">
          <div class="right-content">
            <official-recommended-component/>
            <hot-recommended-component/>
            <recently-added-component/>
            <entry-recommended-component/>
          </div>
        </template>
      </pop-menu-and-left-nav-component>

      <bottom-card-component/>

    </main>

    <footer>
      <bottom-component/>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import BottomCardComponent from "@/common/components/marketplace/BottomCardComponent";
import PopMenuAndLeftNavComponent from "@/common/components/marketplace/PopMenuAndLeftNavComponent";
import OfficialRecommendedComponent from "@/common/components/marketplace/OfficialRecommendedComponent";
import HotRecommendedComponent from "@/common/components/marketplace/HotRecommendedComponent";
import RecentlyAddedComponent from "@/common/components/marketplace/RecentlyAddedComponent";
import EntryRecommendedComponent from "@/common/components/marketplace/EntryRecommendedComponent";

export default {
  name: "Index",
  components: {
    EntryRecommendedComponent,
    RecentlyAddedComponent,
    HotRecommendedComponent,
    OfficialRecommendedComponent,
    PopMenuAndLeftNavComponent,
    BottomCardComponent,
    BottomComponent,
    TopBar,
  },
  data() {
    return {
      locale: this.$locale,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  background: $index-page-main-background-color-grey;

  .banner {
    height: 319px;
    max-width: 1012px;
    background: white;
  }

  //.content-wrapper {
  //  background: $index-page-main-background-color-grey;
  //  width: 100%;
  //
  //  .content {
  //
  //    .backdrop {
  //      max-width: 1012px;
  //      margin: 0 auto;
  //      padding: 0 16px;
  //      display: flex;
  //      justify-content: center;
  //      align-items: flex-start;
  //
  //      @media screen and (min-width: $max) {
  //        .left {
  //          flex: 1;
  //          padding: 8px 32px 40px 0;
  //
  //          .left-menu {
  //            font-size: 14px;
  //            color: $index-page-main-font-color-grey-3;
  //
  //            > div {
  //              text-align: start;
  //
  //              h3 {
  //                margin-bottom: 36px;
  //              }
  //
  //              ul {
  //                margin-bottom: 24px;
  //
  //                li {
  //                  padding: 8px 16px;
  //                  border-radius: 6px;
  //
  //                  &:hover {
  //                    cursor: pointer;
  //                    background: white;
  //                  }
  //                }
  //              }
  //            }
  //          }
  //        }
  //
  //        .right {
  //          flex: 3.5;
  //          display: flex;
  //          flex-direction: column;
  //          justify-content: flex-start;
  //          align-items: center;
  //
  //          .left-menu-bar {
  //            display: none;
  //          }
  //
  //          .official-recommended {
  //            width: 100%;
  //
  //            > h3 {
  //              width: 100%;
  //              text-align: start;
  //              margin: 16px 0;
  //              font-size: 18px;
  //            }
  //
  //            ul {
  //              width: 100%;
  //              display: grid;
  //              grid-template-columns: 1fr 1fr;
  //
  //              li {
  //                padding: 24px;
  //                margin-bottom: 24px;
  //                border-radius: 6px;
  //                background: white;
  //                box-shadow: $color-shadow-medium;
  //                display: flex;
  //                flex-direction: column;
  //                justify-content: flex-start;
  //                align-items: center;
  //
  //                > h3 {
  //                  margin-top: 8px;
  //                }
  //
  //                > div {
  //                  margin: 0 auto;
  //                  width: 96px;
  //                  height: 96px;
  //                  border-radius: 50%;
  //                  box-shadow: $color-shadow-medium;
  //                  transition: all .15s;
  //                  position: relative;
  //                  top: 0;
  //
  //                  &:hover {
  //                    top: -5px;
  //                    box-shadow: $color-shadow-large;
  //                    cursor: pointer;
  //                  }
  //                }
  //
  //
  //                &:nth-child(even) {
  //                  margin-left: 16px;
  //                }
  //
  //                &:nth-child(odd) {
  //                  margin-right: 16px;
  //                }
  //              }
  //            }
  //          }
  //
  //          .entry-recommended,
  //          .recently-added,
  //          .hot-recommended {
  //            width: 100%;
  //            display: flex;
  //            flex-direction: column;
  //            justify-content: flex-start;
  //            align-items: flex-start;
  //
  //            > h3 {
  //              width: 100%;
  //              text-align: start;
  //              margin: 16px 0;
  //              font-size: 18px;
  //            }
  //
  //            > p {
  //              text-align: start;
  //              width: 100%;
  //              margin-bottom: 10px;
  //            }
  //
  //            ul {
  //              width: 100%;
  //              display: grid;
  //              grid-template-columns: 1fr 1fr;
  //
  //              li {
  //                margin-bottom: 24px;
  //
  //                a {
  //                  display: flex;
  //                  justify-content: flex-start;
  //                  align-items: flex-start;
  //
  //                  .avatar {
  //                    width: 56px;
  //                    height: 56px;
  //                    overflow: hidden;
  //                    border-radius: 50%;
  //                    box-shadow: $color-shadow-large;
  //                  }
  //
  //                  .content {
  //                    width: auto;
  //                    padding: 0 16px;
  //                    text-align: start;
  //                    line-height: 1.25;
  //
  //                    p {
  //                      font-size: 14px;
  //                      color: $index-page-main-font-color-grey-3;
  //                    }
  //                  }
  //                }
  //              }
  //            }
  //
  //            > a {
  //              width: 100%;
  //              text-align: start;
  //              font-size: 12px;
  //              margin-bottom: 40px;
  //            }
  //          }
  //        }
  //      }
  //
  //      @media screen and (max-width: $max) and (min-width: $middle) {
  //        .left {
  //          display: none;
  //        }
  //
  //        .right {
  //          flex: 3.5;
  //          display: flex;
  //          flex-direction: column;
  //          justify-content: flex-start;
  //          align-items: center;
  //
  //          .left-menu-bar {
  //            margin: 16px 0;
  //            border: 1px solid $index-page-main-border-color-grey;
  //            border-radius: 6px;
  //            width: 100%;
  //            padding: 10.5px 21px;
  //            opacity: .8;
  //
  //            &:hover {
  //              opacity: 1;
  //              background: $index-page-main-background-color-grey-2;
  //              cursor: pointer;
  //            }
  //          }
  //
  //          .official-recommended {
  //            width: 100%;
  //
  //            > h3 {
  //              width: 100%;
  //              text-align: start;
  //              margin: 16px 0;
  //              font-size: 18px;
  //            }
  //
  //            ul {
  //              width: 100%;
  //              display: grid;
  //              grid-template-columns: 1fr 1fr;
  //
  //              li {
  //                padding: 24px;
  //                margin-bottom: 24px;
  //                border-radius: 6px;
  //                background: white;
  //                box-shadow: $color-shadow-medium;
  //                display: flex;
  //                flex-direction: column;
  //                justify-content: flex-start;
  //                align-items: center;
  //
  //                > h3 {
  //                  margin-top: 8px;
  //                }
  //
  //                > div {
  //                  margin: 0 auto;
  //                  width: 96px;
  //                  height: 96px;
  //                  border-radius: 50%;
  //                  box-shadow: $color-shadow-medium;
  //                  transition: all .15s;
  //                  position: relative;
  //                  top: 0;
  //
  //                  &:hover {
  //                    top: -5px;
  //                    box-shadow: $color-shadow-large;
  //                    cursor: pointer;
  //                  }
  //                }
  //
  //
  //                &:nth-child(even) {
  //                  margin-left: 16px;
  //                }
  //
  //                &:nth-child(odd) {
  //                  margin-right: 16px;
  //                }
  //              }
  //            }
  //          }
  //
  //          .entry-recommended,
  //          .recently-added,
  //          .hot-recommended {
  //            width: 100%;
  //            display: flex;
  //            flex-direction: column;
  //            justify-content: flex-start;
  //            align-items: flex-start;
  //
  //            > h3 {
  //              width: 100%;
  //              text-align: start;
  //              margin: 16px 0;
  //              font-size: 18px;
  //            }
  //
  //            > p {
  //              text-align: start;
  //              width: 100%;
  //              margin-bottom: 10px;
  //            }
  //
  //            ul {
  //              width: 100%;
  //              display: grid;
  //              grid-template-columns: 1fr 1fr;
  //
  //              li {
  //                margin-bottom: 24px;
  //
  //                a {
  //                  display: flex;
  //                  justify-content: flex-start;
  //                  align-items: flex-start;
  //
  //                  .avatar {
  //                    width: 56px;
  //                    height: 56px;
  //                    overflow: hidden;
  //                    border-radius: 50%;
  //                    box-shadow: $color-shadow-large;
  //                  }
  //
  //                  .content {
  //                    width: auto;
  //                    padding: 0 16px;
  //                    text-align: start;
  //                    line-height: 1.25;
  //
  //                    p {
  //                      font-size: 14px;
  //                      color: $index-page-main-font-color-grey-3;
  //                    }
  //                  }
  //                }
  //              }
  //            }
  //
  //            > a {
  //              width: 100%;
  //              text-align: start;
  //              font-size: 12px;
  //              margin-bottom: 40px;
  //            }
  //          }
  //        }
  //      }
  //
  //      @media screen and (max-width: $middle) {
  //        .left {
  //          display: none;
  //        }
  //
  //        .right {
  //          flex: 3.5;
  //          display: flex;
  //          flex-direction: column;
  //          justify-content: flex-start;
  //          align-items: center;
  //
  //          .left-menu-bar {
  //            margin: 16px 0;
  //            border: 1px solid $index-page-main-border-color-grey;
  //            border-radius: 6px;
  //            width: 100%;
  //            padding: 10.5px 21px;
  //            opacity: .8;
  //
  //            &:hover {
  //              opacity: 1;
  //              background: $index-page-main-background-color-grey-2;
  //              cursor: pointer;
  //            }
  //          }
  //
  //          .official-recommended {
  //            width: 100%;
  //
  //            > h3 {
  //              width: 100%;
  //              text-align: start;
  //              margin: 16px 0;
  //              font-size: 18px;
  //            }
  //
  //            ul {
  //              width: 100%;
  //              display: grid;
  //              grid-template-columns: 1fr;
  //
  //              li {
  //                padding: 24px;
  //                margin-bottom: 24px;
  //                border-radius: 6px;
  //                background: white;
  //                box-shadow: $color-shadow-medium;
  //                display: flex;
  //                flex-direction: column;
  //                justify-content: flex-start;
  //                align-items: center;
  //
  //                > h3 {
  //                  margin-top: 8px;
  //                }
  //
  //                > div {
  //                  margin: 0 auto;
  //                  width: 96px;
  //                  height: 96px;
  //                  border-radius: 50%;
  //                  box-shadow: $color-shadow-medium;
  //                  transition: all .15s;
  //                  position: relative;
  //                  top: 0;
  //
  //                  &:hover {
  //                    top: -5px;
  //                    box-shadow: $color-shadow-large;
  //                    cursor: pointer;
  //                  }
  //                }
  //              }
  //            }
  //          }
  //
  //          .entry-recommended,
  //          .recently-added,
  //          .hot-recommended {
  //            width: 100%;
  //            display: flex;
  //            flex-direction: column;
  //            justify-content: flex-start;
  //            align-items: flex-start;
  //
  //            > h3 {
  //              width: 100%;
  //              text-align: start;
  //              margin: 16px 0;
  //              font-size: 18px;
  //            }
  //
  //            > p {
  //              text-align: start;
  //              width: 100%;
  //              margin-bottom: 10px;
  //            }
  //
  //            ul {
  //              width: 100%;
  //              display: grid;
  //              grid-template-columns: 1fr;
  //
  //              li {
  //                margin-bottom: 24px;
  //
  //                a {
  //                  display: flex;
  //                  justify-content: flex-start;
  //                  align-items: flex-start;
  //
  //                  .avatar {
  //                    width: 56px;
  //                    height: 56px;
  //                    overflow: hidden;
  //                    border-radius: 50%;
  //                    box-shadow: $color-shadow-large;
  //                  }
  //
  //                  .content {
  //                    width: auto;
  //                    padding: 0 16px;
  //                    text-align: start;
  //                    line-height: 1.25;
  //
  //                    p {
  //                      font-size: 14px;
  //                      color: $index-page-main-font-color-grey-3;
  //                    }
  //                  }
  //                }
  //              }
  //            }
  //
  //            > a {
  //              width: 100%;
  //              text-align: start;
  //              font-size: 12px;
  //              margin-bottom: 40px;
  //            }
  //          }
  //        }
  //      }
  //    }
  //  }
  //}

  .right-content {
    flex: 3.5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }


  //.pop-menu-wrapper {
  //  position: absolute;
  //  top: 0;
  //  width: 100%;
  //  height: 100%;
  //  background: rgba($index-page-main-background-color-grey-4, .45);
  //  backdrop-filter: blur(9px);
  //  display: none;
  //  justify-content: center;
  //  align-items: center;
  //
  //  .pop-menu {
  //    overflow: hidden;
  //    max-height: 80vh;
  //    max-width: 90vw;
  //    width: 100%;
  //    z-index: 99;
  //    display: flex;
  //    flex-direction: column;
  //    justify-content: flex-start;
  //    align-items: flex-start;
  //    border-radius: 6px;
  //    border: 1px solid $index-page-main-border-color-grey;
  //
  //    > h3 {
  //      display: flex;
  //      justify-content: space-between;
  //      align-items: center;
  //      width: 100%;
  //      padding: 16px;
  //      background: $index-page-main-background-color-grey;
  //      border-bottom: 1px solid $index-page-main-border-color-grey;
  //
  //      svg:hover {
  //        color: $index-page-main-middle-font-color-blue;
  //      }
  //    }
  //
  //    .left-category {
  //      > div {
  //        width: 100%;
  //        background: white;
  //        font-size: 14px;
  //        text-align: start;
  //        overflow: scroll;
  //        overflow-x: hidden;
  //
  //        &:last-child {
  //          background: $index-page-main-background-color-grey;
  //          padding: 16px;
  //          border-top: 1px solid $index-page-main-border-color-grey;
  //          overflow: hidden;
  //
  //          div {
  //            text-align: center;
  //            border-radius: 6px;
  //            border: 1px solid $index-page-main-border-color-grey;
  //            padding: 5px 16px;
  //          }
  //        }
  //
  //        > div {
  //          padding: 16px;
  //
  //          &:first-child {
  //            border-bottom: 1px solid $index-page-main-border-color-grey;
  //          }
  //
  //          > h3 {
  //            margin-bottom: 4px;
  //          }
  //
  //          ul {
  //            li {
  //              padding: 4px 16px;
  //              border-radius: 6px;
  //              transition: all .2s;
  //
  //              &:hover {
  //                cursor: pointer;
  //                background: $index-page-main-background-color-grey;
  //              }
  //            }
  //          }
  //        }
  //      }
  //    }
  //  }
  //}
}

</style>