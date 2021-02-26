<template>
  <div class="marketplace-search-wrapper">
    <header>
      <top-bar/>
    </header>
    <main>
      <div class="backdrop">
        <access-path-component/>

        <pop-menu-and-left-nav-component
            :official-entry-data="officialEntryData"
            :sell-type-data="sellTypeData"
        >
          <template slot="content">
            <div class="right-content">

              <div class="article-wrapper">
                <h3 v-if="(this.$route.query.hot === '' || this.$route.query.hot === undefined) && (this.$route.query.recent === '' || this.$route.query.recent === undefined)">{{searchArticleData.entryName}}</h3>
                <p v-if="(this.$route.query.hot === '' || this.$route.query.hot === undefined) && (this.$route.query.recent === '' || this.$route.query.recent === undefined)">{{searchArticleData.entryDesc}}</p>
                <ul>
                  <li v-for="(item,key) in searchArticleData.articleInfoAbsList" :key="key">
                    <a :href="`/marketplace/detail/${item.articleId}`" target="_blank">
                      <div class="avatar">
                        <img :src="item.userAvatar" alt="">
                      </div>
                      <div class="content" v-if="item.articleType === 'topic'">
                        <h3>{{item.topicTitle}}</h3>
                        <p>{{item.topicDesc}}</p>
                        <p>By {{item.price}}</p>
                        <p>当前: {{item.bidPrice}}c</p>
                      </div>
                      <div class="content" v-else>
                        <h3>{{item.nickname}}</h3>
                        <p>By {{item.price}}</p>
                        <p>当前: {{item.bidPrice}}c</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="button">
                <div class="left-button">PRE</div>
                <div class="right-button">NEXT</div>
              </div>
            </div>
          </template>
        </pop-menu-and-left-nav-component>

      </div>
    </main>

    <bottom-card-component/>

    <footer>
      <bottom-component/>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import BottomCardComponent from "@/common/components/marketplace/BottomCardComponent";
import AccessPathComponent from "@/common/components/marketplace/AccessPathComponent";
import PopMenuAndLeftNavComponent from "@/common/components/marketplace/PopMenuAndLeftNavComponent";
import {HttpGet} from "@/http/indexPage";

export default {
  name: "Index",
  components: {
    PopMenuAndLeftNavComponent,
    AccessPathComponent,
    BottomCardComponent,
    BottomComponent,
    TopBar,
  },
  data() {
    return {
      locale:this.$locale,

      sellTypeData: [],
      officialEntryData: [],

      searchArticleData: null,
    }
  },
  methods: {
    initRandomArticle() {
      HttpGet(`/api/get/select/entry/articleInfos`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.searchArticleData = ret.data.articleInfosAbsList[0]
      }).catch(e => console.log(e))

    },

    initSellType() {
      HttpGet(`/api/get/select/entryType`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.sellTypeData = ret.data.typeList
      }).catch(e => console.log(e))
    },
    initOfficialEntry() {
      HttpGet(`/api/get/select/official/entryInfos`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.officialEntryData = ret.data.entryAbsList
      }).catch(e => console.log(e))
    },
    initData() {
      this.initRandomArticle()
      this.initSellType()
      this.initOfficialEntry()
    }
  },
  mounted() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  background: $index-page-main-background-color-grey;

  .backdrop {
    max-width: 1012px;
    margin: 0 auto;
    padding: 0 16px;

    .right-content {
      flex: 3.5;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: start;

      @media screen and (min-width: $max) {
        .article-wrapper {
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
            font-size: 12px;
            text-align: start;
            width: 100%;
            margin-bottom: 10px;
          }

          ul {
            margin-top: 16px;
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
                  min-width: 56px;
                  height: 56px;
                  overflow: hidden;
                  border-radius: 50%;
                  box-shadow: $color-shadow-medium;
                  transition: all .2s;

                  img {
                    width: inherit;
                    height: inherit;
                  }

                  &:hover {
                    box-shadow: $color-shadow-extra-large;
                    transform: translateY(-5px);
                  }
                }

                .content {
                  width: auto;
                  padding: 0 16px;
                  text-align: start;
                  line-height: 1.25;

                  p {
                    font-size: 12px;
                    margin-top: 4px;
                    color: $index-page-main-font-color-grey-3;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
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

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      @media screen and (max-width: $max) and (min-width: $middle) {
        .article-wrapper {
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
            font-size: 12px;
            text-align: start;
            width: 100%;
            margin-bottom: 10px;
          }

          ul {
            margin-top: 16px;
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
                  min-width: 56px;
                  height: 56px;
                  overflow: hidden;
                  border-radius: 50%;
                  box-shadow: $color-shadow-medium;
                  transition: all .2s;

                  img {
                    width: inherit;
                    height: inherit;
                  }

                  &:hover {
                    box-shadow: $color-shadow-extra-large;
                    transform: translateY(-5px);
                  }
                }

                .content {
                  width: auto;
                  padding: 0 16px;
                  text-align: start;
                  line-height: 1.25;

                  p {
                    font-size: 12px;
                    margin-top: 4px;
                    color: $index-page-main-font-color-grey-3;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
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

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      @media screen and (max-width: $middle) {
        .article-wrapper {
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
            font-size: 12px;
            text-align: start;
            width: 100%;
            margin-bottom: 10px;
          }

          ul {
            margin-top: 16px;
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
                  min-width: 56px;
                  height: 56px;
                  overflow: hidden;
                  border-radius: 50%;
                  box-shadow: $color-shadow-medium;
                  transition: all .2s;

                  img {
                    width: inherit;
                    height: inherit;
                  }

                  &:hover {
                    box-shadow: $color-shadow-extra-large;
                    transform: translateY(-5px);
                  }
                }

                .content {
                  width: auto;
                  padding: 0 16px;
                  text-align: start;
                  line-height: 1.25;

                  p {
                    font-size: 12px;
                    margin-top: 4px;
                    color: $index-page-main-font-color-grey-3;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
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

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 16px 0;

        > div {
          padding: 5px 16px;
          border: 1px solid $index-page-main-border-color-grey;
          font-size: 14px;
        }

        .left-button {
          border-bottom-left-radius: 6px;
          border-top-left-radius: 6px;
          border-right: none;
          color: $index-page-main-middle-font-color-blue-2;
        }

        .right-button {
          border-bottom-right-radius: 6px;
          border-top-right-radius: 6px;
          color: $index-page-main-middle-font-color-blue;
        }
      }
    }
  }

}

</style>