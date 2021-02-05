<template>
  <div class="marketplace-detail-page-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="main-wrapper">
        <div class="access-path">
          <a href="">Marketplace</a>/
          <a href="">著述</a>/
          测试
        </div>

        <div class="desc">
          <div class="left">
            <div>#</div>
          </div>
          <div class="right">
            <p>著述</p>
            <h3>测试</h3>
          </div>
        </div>

        <div class="content-wrapper">
          <div class="left">dass</div>
          <div class="right">
            <h3>this is a topic title</h3>
            <p>this is a topic entry desc</p>
            <a href="">Read more...</a>
            <div class="bid-history">
              <div></div>
            </div>
          </div>
        </div>

        <div class="bidding-wrapper">
          <div class="bidding">
            <div class="left">
              <h3>历史价格</h3>
              <ul>
                <li>
                  <div>
                    <h3>Alex</h3>
                    <p>uuid</p>
                  </div>
                  <div>
                    <h3>￥12c</h3>
                    <p>2021/02/12 12:22</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Alex</h3>
                    <p>uuid</p>
                  </div>
                  <div>
                    <h3>￥12c</h3>
                    <p>2021/02/12 12:22</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Alex</h3>
                    <p>uuid</p>

                  </div>
                  <div>
                    <h3>￥12c</h3>
                    <p>2021/02/12 12:22</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Alex</h3>
                    <p>uuid</p>

                  </div>
                  <div>
                    <h3>￥12c</h3>
                    <p>2021/02/12 12:22</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Alex</h3>
                    <p>uuid</p>

                  </div>
                  <div>
                    <h3>￥12c</h3>
                    <p>2021/02/12 12:22</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Alex</h3>
                    <p>uuid</p>

                  </div>
                  <div>
                    <h3>￥12c</h3>
                    <p>2021/02/12 12:22</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="right">
              <div>
                <div class="head">
                  <div class="head-desc">
                    <p>测试</p>
                    <h3>this is a topic title</h3>
                  </div>
                  <div class="picture"></div>
                </div>
                <p>this is a topic desc</p>
                <ul>
                  <li>dasdas</li>
                  <li>dasda</li>
                  <li>dsadas</li>
                </ul>
                <div class="bidding-input">
                  <input type="text" v-model="inputPrice">
                  输入您的竞拍价格
                  <span>￥{{inputPrice === "" ? '0' : inputPrice}}c</span>
                </div>
                <div class="button">
                  <div>确认竞拍</div>
                  <span>Next: Confirm your installation location and payment information.</span>
                </div>
              </div>
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
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
export default {
  name: "Index",
  components: {
    BottomComponent,
    TopBar,
  },
  data() {
    return {
      locale:this.$locate,
      inputPrice: "",
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  margin: 0 auto;
  width: 100%;
  padding: 0 40px;
  background: $index-page-main-background-color-grey;

  .main-wrapper {
    margin: 0 auto;
    max-width: 1012px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .access-path {
      padding: 16px 0;
      font-size: 14px;
      text-align: start;

      a {
        font-size: 14px;
        margin-right: 4px;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .desc {
      margin-top: 40px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;

      .left {
        margin-right: 32px;
        width: 25%;

        > div {
          margin: 4px 42.5px 0;
          border-radius: 50%;
          background: #4c92e2;
          height: 128px;
          width: 128px;
        }
      }

      .right {
        margin-left: 32px;
        text-align: start;

        p {
          margin-bottom: 16px;
          font-size: 12px;
          color: $index-page-main-font-color-grey-3;
        }

        h3 {
          font-size: 48px;
        }
      }
    }

    .content-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;

      .left {
        padding: 16px 32px 0 0;
        width: 25%;
        margin-right: 32px;
      }

      .right {
        margin-left: 32px;
        text-align: start;

        h3,p {
          margin-bottom: 16px;
        }

        a {
          font-size: 12px;
        }

        .bid-history {
          padding-top: 24px;
        }
      }
    }

    .bidding-wrapper {
      width: 100%;
      margin: 16px 0;
      padding: 40px 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      background: white;

      .bidding {
        width: 100%;
        margin: 0 8.5px;
        padding: 0 16px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: start;

        .left {
          flex: 1;
          padding-right: 40px;

          > h3 {
            margin-bottom: 24px;
          }

          ul {
            max-height: 360px;
            overflow: scroll;
            overflow-x: hidden;

            li {
              padding: 16px;
              border-radius: 6px;
              display: flex;
              justify-content: space-between;
              align-items: center;

              > div {
                line-height: 1.5;

                p {
                  font-size: 12px;
                }
              }

              &:first-child {
                color: white;
                background: $index-page-main-background-color-blue;
              }
            }
          }
        }

        .right {
          margin-top: 48px;
          margin-left: 40px;
          flex: 1;
          padding: 24px;
          border-top: 4px solid $index-page-main-background-color-blue;
          background: white;
          border-bottom-right-radius: 6px;
          border-bottom-left-radius: 6px;
          box-shadow: $color-shadow-large;

          > div {
            .head {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;

              .head-desc {
                margin-bottom: 8px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                line-height: 1.5;
              }

              .picture {
                padding-left: 16px;
                width: 56px;
                height: 56px;
                background: red;
                border-radius: 50%;
              }
            }

            > p {
              width: 100%;
              margin-bottom: 8px;
            }

            ul {
              margin-bottom: 24px;

              li {
                margin-bottom: 4px;
              }
            }

            .bidding-input {
              padding: 8px 0;
              border-top: 1px solid $index-page-main-border-color-grey;
              border-bottom: 1px solid $index-page-main-border-color-grey;
              margin-bottom: 16px;
              font-size: 12px;
              display: flex;
              justify-content: space-between;
              align-items: center;

              input {
                max-width: 30%;
                padding: 5px 12px;
                margin-right: 8px;
                border-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                background: $index-page-main-background-color-grey-2;
              }

              span {
                font-size: 18px;
              }
            }

            .button {
              div {
                padding: 8px 40px;
                border-radius: 6px;
                background: $index-page-main-background-color-green;
                color: white;
                text-align: center;
                margin-bottom: 8px;
              }

              span {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}

</style>