<template>
  <div class="repository-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="nav-bar">
        <nav-component
            :nav="locale.repositoryPageNav"
        />
      </div>

      <div class="content">
        <div class="left">
          <div class="avatar"></div>
          <h3>Alex</h3>
          <p>this is a user desc</p>
          <div class="profile-button">
            {{ locale.profileEditor }}
          </div>
          <p>
            <map-pin-icon :size="'12'"/>
            <span>ShangHai</span>
          </p>
        </div>

        <div class="right">
          <div class="public-topic-card">
            <h3>发布过的著述</h3>
            <ul>
              <li>
                <h3>hello</h3>
                <p>this is a topic desc</p>
                <div>
                  <p>3D</p>
                  <p>2021/02/12 12:10</p>
                </div>
              </li>
              <li>
                <h3>hello</h3>
                <p>this is a topic desc</p>
                <div>
                  <p>3D</p>
                  <p>2021/02/12 12:10</p>
                </div>
              </li>
              <li>
                <h3>hello</h3>
                <p>this is a topic desc</p>
                <div>
                  <p>3D</p>
                  <p>2021/02/12 12:10</p>
                </div>
              </li>
            </ul>
            <a>more</a>
          </div>

          <div class="public-comment-card">
            <div>
              <h3>1月2021</h3>
              <div></div>
            </div>
            <ul>
              <li>
                <div></div>
                <div>
                  <h3>this is a topic title</h3>
                  <ul>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div></div>
                <div>
                  <h3>this is a topic title</h3>
                  <ul>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div></div>
                <div>
                  <h3>this is a topic title</h3>
                  <ul>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div></div>
                <div>
                  <h3>this is a topic title</h3>
                  <ul>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                    <li>
                      <p>this is a comment</p>
                      <p>2021/03/02 12:11</p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div style="height: 100vh"></div>
    </main>

    <footer>
      <bottom-component/>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import NavComponent from "@/common/components/repositoryPage/NavComponent";
import {MapPinIcon} from "vue-feather-icons"

export default {
  name: "Index",
  components: {
    NavComponent,
    BottomComponent,
    TopBar,
    MapPinIcon,
  },
  data() {
    return {
      locale: this.$locate
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;

  > .nav-bar {
  }

  > .content {
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 1012px;
    margin: 0 auto;

    .left {
      margin-top: -32px;
      padding: 8px;
      width: 22%;
      z-index: 99;
      text-align: start;

      .avatar {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        background: #4e4ed9;
        border-radius: 50%;
      }

      h3 {
        padding-top: 16px;
      }

      p {
        padding-bottom: 16px;
      }

      .profile-button {
        margin-bottom: 16px;
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        padding: 5px 16px;
        text-align: center;
      }

    }

    .right {
      width: 78%;
      padding: 0 8px;
      text-align: start;

      .public-topic-card {
        width: 100%;
        margin-top: 24px;

        > h3 {
          margin-bottom: 8px;
          padding-left: 8px;
        }

        > ul {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;

          li {
            margin: 0 8px 16px;
            padding: 16px;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            font-size: 12px;

            > h3 {
              font-size: 16px;
            }

            > p {
              margin: 8px 0 16px;
            }

            > div {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              > p {
                margin-right: 16px;
              }
            }

          }
        }

        > a {
          margin-left: 8px;
        }
      }

      .public-comment-card {
        margin-top: 40px;
        width: 100%;

        > div {
          width: inherit;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;

          h3 {
            width: 15%;
            min-width: 64px;
            padding: 0 16px 0 8px;
            font-size: 12px;
          }

          > div {
            height: 1px;
            width: 85%;
            background: $index-page-main-background-color-grey-5;
          }
        }

        > ul {
          margin-left: 16px;
          padding: 16px 0;
          position: relative;

          &:before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            display: block;
            width: 2px;
            content: "";
            background-color: $index-page-main-background-color-grey-5;
          }

          li {
            padding-bottom: 16px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            > div:first-child {
              border: 3px solid white;
              margin: 0 8px 0 -15px;
              width: 32px;
              height: 32px;
              background: $index-page-main-background-color-grey-3;
              border-radius: 50%;
              z-index: 2;
            }

            > div:last-child {
              width: 100%;

              ul {
                li {
                  padding: 4px 0;
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  align-items: flex-start;
                  font-size: 14px;
                  line-height: 1.5;

                  p:last-child {
                    color: $index-page-main-font-color-grey-3;
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

</style>