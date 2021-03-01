<template>
  <div class="marketplace-detail-page-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="main-wrapper">
        <access-path-component
            :level2="userData.username"
        />

        <div class="desc">
          <div class="left">
            <div>
              <img :src="userData.userAvatar" alt="">
            </div>
          </div>
          <div class="right">
            <p>{{ articleData.type }}</p>
            <h3>{{ articleData.articleUUID }}</h3>
          </div>
        </div>

        <div class="content-wrapper">
          <div class="left">
            <div>
              <h3>{{ userData.username }}</h3>
              <p>{{ userData.sex }}</p>
              <p>{{ userData.userLevel }}</p>
              <p>{{ userData.userDesc }}</p>
            </div>
            <div>{{ locale.report }}</div>
          </div>
          <div class="right">
            <h3>{{ articleData.topicTitle }}</h3>
            <p>{{ articleData.topicDesc }}</p>
            <p>
              <span>dasd</span>
            </p>
            <div class="manager-list">
              <h3>{{ locale.manager }}</h3>
              <ul>
                <li v-for="(item,key) in articleData.managerAbsList" :key="key">
                  <div class="manager-avatar">
                    <img :src="item.userAvatar" alt="">
                  </div>
                  <div class="manager-info">
                    <div>{{ item.username }}</div>
                    <div>{{ item.userLevel }}</div>
                    <div>{{ item.sex }}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>

    <div class="bidding-wrapper">
      <div class="bidding">
        <div class="left">
          <h3>{{ locale.historyPrice }}</h3>
          <ul>
            <li>
              <div>
                <h3>{{ articleData.bidName }}</h3>
                <p>{{ articleData.bidUUID }}</p>
              </div>
              <div>
                <h3>MAX￥{{ articleData.maxPrice }}c</h3>
                <p>{{ articleData.bidTime }}</p>
              </div>
            </li>
            <li>
              <div>
                <h3>{{ userData.username }}</h3>
                <p>{{ userData.uuid }}</p>
              </div>
              <div>
                <h3>ORIGIN￥{{ articleData.startPrice }}c</h3>
                <p>{{ articleData.uploadTime }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="right">
          <div>
            <div class="head">
              <div class="head-desc">
                <p>{{ articleData.articleUUID }}</p>
                <h3>{{ articleData.topicTitle }}</h3>
              </div>
              <div class="picture">
                <img :src="userData.userAvatar" alt="">
              </div>
            </div>
            <p>{{ articleData.topicDesc }}</p>
            <ul>
              <li v-for="(item,key) in locale.buyPolicy" :key="key">{{ item }}</li>
            </ul>
            <div class="bidding-input">
              <input type="number" v-model="inputPrice">
              {{ locale.confirmPrice }}
              <span>￥{{ inputPrice === "" ? '0' : inputPrice }}c</span>
            </div>
            <div class="button">
              <div v-loading="loading" @click="confirmBid">{{ locale.confirmBidding }}</div>
              <span>{{ locale.confirmTip }}</span>
            </div>
          </div>
          <p>{{ locale.confirmTerms }}</p>
        </div>
      </div>
    </div>

    <footer>
      <bottom-component
          :background-color="'#ffffff'"
      />
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import AccessPathComponent from "@/common/components/marketplace/AccessPathComponent";
import {HttpGet, HttpPost} from "@/http/indexPage";

export default {
  name: "Index",
  components: {
    AccessPathComponent,
    BottomComponent,
    TopBar,
  },
  data() {
    return {
      locale: this.$locale,
      inputPrice: "",
      loading: false,

      userData: Object,
      articleData: Object,
    }
  },
  methods: {
    confirmBid() {
      if (this.inputPrice === "") return

      this.loading = true
      HttpPost(`/api/post/insert/biding/article`, {
        article_id: this.$route.params.id,
        price: this.inputPrice
      }).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error("有错误发生,请重试.")
          return
        }

        this.loading = false
        this.$message({
          message:ret.data.message,
          type:"success"
        })
        setTimeout(()=>location.reload(),2000)
      }).catch(e => {
            this.loading = false
            console.log(e)
          })
    },

    initData() {
      HttpGet(`/api/get/select/articleInfo/${this.$route.params.id}`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error("有错误发生,请重试.")
          return
        }

        this.articleData = ret.data
        this.userData = ret.data.sellerAbs

      }).catch(e => console.log(e))
    },
  },
  mounted() {
    this.initData()
  },
  watch: {
    input(newVal, oldVal) {
      if (newVal.length > 10) {
        this.inputPrice = oldVal
      }
    }
  },
  computed: {
    input() {
      return this.inputPrice
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
  background: white;

  .main-wrapper {
    margin: 0 auto;
    max-width: 980px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .desc {
      @media screen and (min-width: $middle) {
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

            img {
              width: inherit;
              height: inherit;
              border-radius: 50%;
            }
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

      @media screen and (max-width: $middle) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;

        .left {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;

          > div {
            margin: 4px 42.5px 0;
            border-radius: 50%;
            background: #4c92e2;
            height: 128px;
            width: 128px;

            img {
              width: inherit;
              height: inherit;
              border-radius: 50%;
            }
          }
        }

        .right {
          width: 100%;
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: center;

          p {
            width: 100%;
            margin-bottom: 16px;
            font-size: 12px;
            color: $index-page-main-font-color-grey-3;
          }

          h3 {
            width: 100%;
            font-size: 48px;
          }
        }
      }

    }

    .content-wrapper {
      @media screen and (min-width: $middle) {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

        .left {
          padding: 16px 32px 0 0;
          width: 25%;
          margin-right: 32px;
          text-align: start;

          > div {
            padding-bottom: 16px;
            font-size: 12px;

            > h3 {
              margin-bottom: 8px;
              font-size: 16px;
            }

            > p {
              margin: 4px 0 2px;
            }
          }
        }

        .right {
          margin-left: 32px;
          text-align: start;

          h3, p {
            margin-bottom: 16px;
          }

          a {
            font-size: 12px;
          }

          .manager-list {
            padding-top: 24px;

            ul {
              margin-bottom: 40px;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;

              li {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                margin-right: 16px;
                margin-bottom: 8px;

                &:hover {
                  border-top-left-radius: 24px;
                  border-bottom-left-radius: 24px;
                  cursor: pointer;
                  box-shadow: $color-shadow-large;
                }

                .manager-avatar {
                  width: 48px;
                  height: 48px;

                  img {
                    width: inherit;
                    height: inherit;
                    border-radius: 50%;
                  }
                }

                .manager-info {
                  padding: 8px;
                  font-size: 12px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }

      @media screen and (max-width: $middle) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: center;
        width: 100%;

        .left {
          width: 100%;
          text-align: start;

          > div {
            padding-bottom: 16px;
            font-size: 12px;

            > h3 {
              margin-bottom: 8px;
              font-size: 16px;
            }

            > p {
              margin: 4px 0 2px;
            }
          }
        }

        .right {
          margin-top: 16px;
          width: 100%;
          text-align: start;

          h3, p {
            margin-bottom: 16px;
          }

          a {
            font-size: 12px;
          }

          .manager-list {
            padding-top: 24px;

            ul {
              margin-bottom: 40px;
              display: grid;
              grid-template-columns: 1fr 1fr;

              li {
                margin-bottom: 8px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                margin-right: 16px;

                &:hover {
                  border-top-left-radius: 24px;
                  border-bottom-left-radius: 24px;
                  cursor: pointer;
                  box-shadow: $color-shadow-large;
                }

                .manager-avatar {
                  width: 48px;
                  height: 48px;

                  img {
                    width: inherit;
                    height: inherit;
                    border-radius: 50%;
                  }
                }

                .manager-info {
                  padding: 8px;
                  font-size: 12px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
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
  background: $index-page-main-background-color-grey;

  .bidding {
    max-width: 980px;
    margin: 0 auto;

    @media screen and (min-width: $middle) {
      width: 100%;
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

              &:last-child {
                p {
                  text-align: end;
                }
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

        > div {
          border-top: 4px solid $index-page-main-background-color-blue;
          padding: 24px;
          background: white;
          border-bottom-right-radius: 6px;
          border-bottom-left-radius: 6px;
          box-shadow: $color-shadow-large;

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
              width: 56px;
              height: 56px;
              border-radius: 50%;
              overflow: hidden;

              img {
                width: inherit;
                height: inherit;
              }
            }
          }

          > p {
            width: 80%;
            margin-bottom: 8px;
            font-size: 12px;
          }

          ul {
            margin-bottom: 24px;

            li {
              margin-bottom: 4px;
              font-size: 12px;
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

              &::-webkit-outer-spin-button,
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                appearance: none;
                margin: 0;
              }
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

              &:hover {
                cursor: pointer;
                background: $index-page-main-background-color-green-2;
              }
            }

            span {
              font-size: 12px;
            }
          }
        }

        > p {
          margin: 40px 40px 10px;
          font-size: 12px;
          color: $index-page-main-font-color-grey-3;
        }
      }
    }

    @media screen and (max-width: $middle) {
      padding: 0 16px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .left {
        width: 100%;
        margin-bottom: 24px;

        > h3 {
          margin-bottom: 24px;
        }

        ul {
          max-height: 360px;

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
                text-align: end;
              }

              &:last-child {
                p {
                  text-align: end;
                }
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
        width: 100%;

        > div {
          padding: 24px;
          border-top: 4px solid $index-page-main-background-color-blue;
          background: white;
          border-bottom-right-radius: 6px;
          border-bottom-left-radius: 6px;
          box-shadow: $color-shadow-large;

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
              width: 56px;
              height: 56px;
              border-radius: 50%;
              overflow: hidden;

              img {
                width: inherit;
                height: inherit;
              }
            }
          }

          > p {
            width: 80%;
            margin-bottom: 8px;
          }

          ul {
            margin-bottom: 24px;

            li {
              margin-bottom: 4px;
              font-size: 12px;
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

              &::-webkit-outer-spin-button,
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                appearance: none;
                margin: 0;
              }
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

              &:hover {
                cursor: pointer;
                background: $index-page-main-background-color-green-2;
              }
            }

            span {
              font-size: 12px;
            }
          }
        }

        > p {
          margin: 16px 40px 10px;
          font-size: 12px;
          color: $index-page-main-font-color-grey-3;
        }
      }
    }
  }
}

</style>