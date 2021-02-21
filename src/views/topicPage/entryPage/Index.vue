<template>
  <div class="topic-entry-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="content">
        <div class="content-title">
          <div class="content-title-left">
            <div class="avatar">#</div>
            <h1>Qt</h1>
          </div>

          <div class="content-title-right">
            <div class="button">
              <star-icon size="16"/>
              <span>Star</span>
            </div>
          </div>
        </div>

        <div class="content-wrapper">
          <div class="content-left">
            <div class="content-left-desc">
              <p>
                Qt is a cross-platform application framework used for developing gui applications that can run on various hardware and software platforms, including Linux, macOS, iOS, Windows, and Blackberry. Qt is available with both proprietary and open source licenses.
              </p>
              <div class="avatar"></div>
            </div>

            <div class="content-left-dashboard">
              <h3>Here are 4,652 public repositories matching this topic...</h3>
              <div>
                <span>方向:All</span>
                <span>排序:点赞最多</span>
              </div>
            </div>

            <ul>
              <li>dsadsa</li>
            </ul>

          </div>

          <div class="content-right">
            <p>Created by Haavard Nord, Eirik Chambe-Eng</p>
            <p>Released May 20 1995</p>
            <ul>
              <li>
                <link-icon size="14"/>
                <a>主页</a>
              </li>
              <li>
                <link-icon size="14"/>
                <a>Wiki</a>
              </li>
            </ul>
            <div>
              <h3>Related Topics</h3>
              <ul>
                <li>cpp</li>
                <li>cpp</li>
                <li>cpp</li>
                <li>cpp</li>
                <li>cpp</li>
                <li>cpp</li>
              </ul>
            </div>
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
import BottomComponent from "@/common/components/explorePage/BottomComponent";
import TopBar from "@/common/components/TopBarComponent";
import {LinkIcon,StarIcon} from "vue-feather-icons"
export default {
  name: "Index",
  components: {
    TopBar,
    BottomComponent,
    LinkIcon,StarIcon
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  background-color: $index-page-main-background-color-grey-2;

  .content {
    max-width: 1012px;
    margin: 0 auto;

    .content-title {
      padding: 32px 16px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .content-title-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .avatar {
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          background-color: $index-page-main-background-color-blue-2;
          line-height: 48px;
          height: 48px;
          width: 48px;
          margin-right: 16px;
        }
      }

      .content-title-right {
        .button {
          padding: 5px 16px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          display: flex;
          justify-items: center;
          transition: all .2s;

          &:hover {
            cursor: pointer;
            background-color: $index-page-main-background-color-grey;
          }

          svg {
            margin-right: 4px;
          }
        }
      }
    }

    .content-wrapper {
      display: flex;
      justify-items: flex-start;
      align-items: flex-start;
      text-align: start;

      .content-left {
        width: 75%;
        padding: 16px;

        .content-left-desc {
          padding: 24px;
          margin-bottom: 32px;
          border: $border;
          border-radius: 6px;
          background-color: white;
          font-size: 12px;
          display: flex;
          justify-content: space-between;

          .avatar {
            min-width: 48px;
            max-width: 48px;
            height: 48px;
            background-color: #2ea44f;
            border-radius: 6px;
          }

        }

        .content-left-dashboard {
          line-height: 1.5;

          div {
            span {
              padding: 3px 12px;
              border-radius: 6px;
              border: $border;
              font-size: 14px;
              margin-right: 12px;
            }
          }
        }

        > ul {
          li {
            margin-top: 24px;
            border: $border;
            border-radius: 6px;
          }
        }
      }

      .content-right {
        width: 25%;
        padding: 0 16px;

        > p {
          font-size: 14px;
          line-height: 1.5;
        }

        > ul {
          font-size: 14px;
          margin: 16px 0;

          li {
            display: flex;
            align-items: center;

            svg {
              margin-right: 4px;
            }
          }
        }

        > div {
          h3 {
            margin-bottom: 8px;
          }

          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;

            li {
              margin: 4px 1.5px 4px 0;
              padding: 0 10px;
              border-radius: 2em;
              background-color: $index-page-main-background-color-blue-2;
              color: $index-page-main-background-color-blue;
              transition: all .2s;

              &:hover {
                cursor: pointer;
                background-color: $index-page-main-background-color-blue-3;
              }
            }
          }
        }
      }

      @media screen and (max-width: $middle) {
        flex-direction: column;

        .content-left {
          width: 100%;
          padding: 16px;

          .content-left-desc {
            padding: 24px;
            margin-bottom: 32px;
            border: $border;
            border-radius: 6px;
            background-color: white;
            font-size: 12px;
            display: flex;
            justify-content: space-between;

            .avatar {
              min-width: 48px;
              max-width: 48px;
              height: 48px;
              background-color: #2ea44f;
              border-radius: 6px;
            }

          }

          .content-left-dashboard {
            line-height: 1.5;

            div {
              span {
                padding: 3px 12px;
                border-radius: 6px;
                border: $border;
                font-size: 14px;
                margin-right: 12px;
              }
            }
          }

          > ul {
            li {
              margin-top: 24px;
              border: $border;
              border-radius: 6px;
            }
          }
        }

        .content-right {
          width: 100%;
          padding: 0 16px;

          > p {
            font-size: 14px;
            line-height: 1.5;
          }

          > ul {
            font-size: 14px;
            margin: 16px 0;

            li {
              display: flex;
              align-items: center;

              svg {
                margin-right: 4px;
              }
            }
          }

          > div {
            margin-bottom: 40px;

            h3 {
              margin-bottom: 8px;
            }

            ul {
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              align-items: flex-start;

              li {
                margin: 4px 1.5px 4px 0;
                padding: 0 10px;
                border-radius: 2em;
                background-color: $index-page-main-background-color-blue-2;
                color: $index-page-main-background-color-blue;
                transition: all .2s;

                &:hover {
                  cursor: pointer;
                  background-color: $index-page-main-background-color-blue-3;
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>

