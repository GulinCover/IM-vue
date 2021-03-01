<template>
  <div class="marketplace-search-wrapper">
    <header>
      <top-bar/>
    </header>
    <main>
      <div class="backdrop">
        <access-path-component
            :level2="this.$route.query.type === undefined || this.$route.query.type === '' ? 'All' : this.$route.query.type"
            :level3="this.$route.query.entry_name"
        />

        <pop-menu-and-left-nav-component
            :official-entry-data="officialEntryData"
            :sell-type-data="sellTypeData"
        >
          <template slot="content">
            <div class="right-content">

              <div class="article-wrapper">
                <h3 v-if="searchArticleData.entryName !== undefined">{{ searchArticleData.entryName }}</h3>
                <p v-if="searchArticleData.entryDesc !== undefined">{{ searchArticleData.entryDesc }}</p>
                <ul>
                  <li v-for="(item,key) in searchArticleData.articleInfoAbsList" :key="key">
                    <a :href="`/marketplace/detail/${item.articleId}`" target="_blank">
                      <div class="avatar">
                        <img :src="item.userAvatar" alt="">
                      </div>
                      <div class="content" v-if="item.articleType === 'topic'">
                        <h3>{{ item.topicTitle }}</h3>
                        <p>{{ item.topicDesc }}</p>
                        <p>By {{ item.price }}</p>
                        <p>当前: {{ item.bidPrice }}c</p>
                      </div>
                      <div class="content" v-else>
                        <h3>{{ item.nickname }}</h3>
                        <p>By {{ item.price }}</p>
                        <p>当前: {{ item.bidPrice }}c</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="button">
                <div @click="jumpNextPage(-1)" class="left-button">PRE</div>
                <span class="page-number" @click="jumpToPage(item)" :class="`page-number${item}`"
                      v-for="item in showPageNumber" :key="item">
                  {{ item }}
                </span>
                <div @click="jumpNextPage(1)" class="right-button">NEXT</div>
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
import {HttpGet, merge} from "@/http/indexPage";

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
      locale: this.$locale,

      sellTypeData: [],
      officialEntryData: [],

      searchArticleData: Object,
      showPageNumber: [],
      totalPage: 0,
      startPage:0,
      endPage:0,
    }
  },
  methods: {
    jumpToPage(page) {
      let url = this.$route.fullPath
      url = merge(url, {page})
      window.open(url, "_self")
    },
    jumpNextPage(index) {
      let current = this.$route.query.page === undefined || this.$route.query.page === "" ? 0 : this.$route.query.page
      current = parseInt(current)
      if (current + index >= 1 && current + index <= this.totalPage) {
        let url = this.$route.fullPath
        url = merge(url, {page:current+index})
        window.open(url, "_self")
      }
    },

    initPage() {
      let eles = document.querySelectorAll(`span.page-number`)

      eles.forEach(it => it.classList.remove("is-active"))
      if (this.$route.query.page === undefined || this.$route.query.page === "") {
        document.querySelector(`span.page-number${1}`).classList.add("is-active")
      } else {
        document.querySelector(`span.page-number${this.$route.query.page}`).classList.add("is-active")
      }
    },
    initPageNumber(maxPage) {
      let current = this.$route.query.page === undefined || this.$route.query.page === "" ? 0 : this.$route.query.page
      current = parseInt(current)
      this.totalPage = maxPage

      if (current > maxPage) {
        this.$message({
          message:"操作错误,请重新操作.",
          type:"error"
        })
      }

      if (current - 4 <= 1) {
        this.startPage = 1
      } else {
        this.startPage = current - 4
      }

      if (current + 4 >= maxPage) {
        this.endPage = maxPage

      } else {
        this.endPage = current + 4
      }

      for (var i = this.startPage;i<=this.endPage;++i) {
        this.showPageNumber.push(i)
      }

      let leftButton = document.querySelector(".button .left-button")
      let rightButton = document.querySelector(".button .right-button")

      if (current !== 1) {
        leftButton.classList.add("is-active")
      } else {
        leftButton.classList.remove("is-active")
      }

      if (current !== maxPage) {
        rightButton.classList.add("is-active")
      } else {
        rightButton.classList.remove("is-active")
      }
    },

    initRandomArticle() {
      let url = "/api/get/select/search/entry/articleInfos?"

      let urlQuery = this.$route.fullPath.split("?")
      let urlQuerys = []
      let urlQuerySet = []
      let urlQueryCompleteSet = []
      if (urlQuery.length > 1) {
        urlQuerys = urlQuery[1].split("&")
        urlQuerys = urlQuerys.filter(s => {
          return s !== ""
        })

        for (var i = 0; i < urlQuerys.length; ++i) {
          let el = urlQuerys[i].split("=")
          if (urlQuerySet.length === 0) {
            urlQuerySet.push(el[0])
            urlQueryCompleteSet.push(urlQuerys[i])
            continue
          }

          let flag = true
          for (var j = 0; j < urlQuerySet.length; ++j) {
            if (el[0] === urlQuerySet[j]) {
              flag = false
            }
          }
          if (flag) {
            urlQuerySet.push(el[0])
            urlQueryCompleteSet.push(urlQuerys[i])
          }
        }
      }
      urlQueryCompleteSet = urlQueryCompleteSet.filter(s => {
        return s !== ""
      })

      let urlParams = ["entry_name", "entry", "type", "public_time", "blurry", "page"]
      urlParams.forEach(item => {
        let flag = true
        for (var i = 0; i < urlQueryCompleteSet.length; ++i) {
          if (item === urlQueryCompleteSet[i].split("=")[0]) {
            url += urlQueryCompleteSet[i] + "&"
            flag = false
            break
          }
        }
        if (flag) {
          url += item + "=&"
        }
      })

      url = url.substr(0, url.length - 1)

      HttpGet(url).then(ret => {
        this.searchArticleData = ret.data.articleInfosAbsList[0]
        this.initPageNumber(ret.data.maxPage)
        this.$nextTick(() => this.initPage())

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
          this.$message.error(res[1])
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

        > span {
          padding: 3px 12px;
          border-radius: 4px;
          transition: all .2s;
          margin: 0 4px;

          &.is-active {
            background-color: $index-page-main-background-color-blue;
            color: white;
          }

          &:hover {
            cursor: pointer;
            background-color: $index-page-main-background-color-grey-5;
          }
        }

        > div {
          padding: 5px 16px;
          border: 1px solid $index-page-main-border-color-grey;
          font-size: 14px;

          &:hover {
            cursor: pointer;
            box-shadow: $color-shadow-medium;
          }

          &.is-active {
            color: $index-page-main-middle-font-color-blue;
          }
        }

        .left-button {
          border-bottom-left-radius: 6px;
          border-top-left-radius: 6px;
          color: $index-page-main-middle-font-color-blue-2;
        }

        .right-button {
          border-bottom-right-radius: 6px;
          border-top-right-radius: 6px;
          color: $index-page-main-middle-font-color-blue-2;
        }
      }
    }
  }

}

</style>