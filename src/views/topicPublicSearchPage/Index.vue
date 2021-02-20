<template>
  <div class="topic-public-search-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="content">
        <div class="content-left">
          <ul>
            <li class="is-active">dasda</li>
            <li>dasda</li>
            <li>dasda</li>
            <li>dasda</li>
            <li>dasda</li>
            <li>dasda</li>
            <li>dasda</li>
            <li>dasda</li>
            <li>dasda</li>
            <li>dasda</li>
            <li>dasda</li>
          </ul>
        </div>
        <div class="content-right">
          <h3>23个搜索结果</h3>
          <ul>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <book-icon size="18"/>
              </div>
              <div>
                <a href="/topic/public/1">dasdas</a>
                <p>this is a desc</p>
                <p>
                  <span>3D</span>
                  <span>4D</span>
                  <span>5D</span>
                  <span>更新于10天前</span>
                </p>
              </div>
            </li>
          </ul>
          <div class="bottom-button">
            <span>PRE</span>
            <span>NEXT</span>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <bottom-component background-color="#fff"/>
    </footer>
  </div>
</template>

<script>
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import TopBar from "@/common/components/TopBarComponent";
import {BookIcon} from "vue-feather-icons"
export default {
  name: "Index",
  components: {
    TopBar,
    BottomComponent,
    BookIcon
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;

  .content {
    max-width: 1012px;
    margin: 24px auto 0;
    padding: 0 8px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (min-width: $middle) {
      .content-left {
        width: 25%;
        margin-right: 8px;
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;

        ul {
          li {
            text-align: start;
            padding: 8px 16px;

            &:hover {
              cursor: pointer;
              background-color: $index-page-main-background-color-grey;
            }

            &.is-active {
              border-left: 2px solid $index-page-main-border-color-origin;
            }

            &:not(:first-child) {
              border-top: 1px solid $index-page-main-border-color-grey;
            }
          }
        }
      }

      .content-right {
        width: 75%;
        padding: 0 16px;
        text-align: start;

        > h3 {
          padding-bottom: 16px;
        }

        ul {
          li {
            padding: 24px 0;
            border-top: 1px solid $index-page-main-border-color-grey;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            > div {
              line-height: 1.5;
              margin-right: 8px;

              a:hover {
                text-decoration: underline;
              }

              p {
                font-size: 12px;
                margin-bottom: 8px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                span {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  margin-right: 8px;

                  &:not(:last-child):before {
                    content: "";
                    display: flex;
                    width: 8px;
                    height: 8px;
                    background-color: #2ea44f;
                    margin-right: 2px;
                    clip-path: circle(40%);
                  }
                }

              }
            }

          }
        }

        .bottom-button {
          text-align: center;

          span:first-child {
            padding: 3px 12px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            border-right: none;
          }

          span:last-child {
            padding: 3px 12px;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
          }

          span:hover {
            cursor: pointer;
          }
        }

      }
    }

    @media screen and (max-width: $middle) {
      flex-direction: column;

      .content-left {
        width: 100%;
        margin-bottom: 24px;

        ul {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          overflow: scroll;
          overflow-y: hidden;

          li {
            text-align: start;
            padding: 24px 16px;

            &:hover {
              cursor: pointer;
              background-color: $index-page-main-background-color-grey;
              border-bottom: 2px solid $index-page-main-border-color-grey;
            }

            &.is-active {
              border-bottom: 2px solid $index-page-main-border-color-origin;
            }
          }
        }
      }

      .content-right {
        width: 100%;
        padding: 0 16px;
        text-align: start;

        > h3 {
          padding-bottom: 16px;
        }

        ul {
          li {
            padding: 24px 0;
            border-top: 1px solid $index-page-main-border-color-grey;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            > div {
              line-height: 1.5;
              margin-right: 8px;

              a:hover {
                text-decoration: underline;
              }

              p {
                font-size: 12px;
                margin-bottom: 8px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                span {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  margin-right: 8px;

                  &:not(:last-child):before {
                    content: "";
                    display: flex;
                    width: 8px;
                    height: 8px;
                    background-color: #2ea44f;
                    margin-right: 2px;
                    clip-path: circle(40%);
                  }
                }

              }
            }

          }
        }

        .bottom-button {
          text-align: center;

          span:first-child {
            padding: 3px 12px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            border-right: none;
          }

          span:last-child {
            padding: 3px 12px;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
          }

          span:hover {
            cursor: pointer;
          }
        }

      }
    }
  }
}

footer {
  margin-top: 40px;
  width: 100%;
  border-top: 1px solid $index-page-main-border-color-grey;
}

</style>




