<template>
  <div class="index-marketplace-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div ref="gotoTopButton" @click="gotoTop" class="goto-top">
        <navigation-2-icon/>
      </div>

      <div class="banner">
        <img src="../../assets/cars-on-golden-gate-bridge-from-battery-spencer-viewpoint-picjumbo-com.jpg" alt="">
        <div class="show-info">
          <h3>{{ locale.h3 }}</h3>
          <p>{{ locale.p }}</p>
          <div @click="jumpTo('?entry=hot')">{{ locale.exploreButton }}</div>
        </div>
      </div>

      <pop-menu-and-left-nav-component
          :official-entry-data="officialEntryData"
          :sell-type-data="sellTypeData"
      >
        <template slot="content">
          <div class="right-content">
            <official-recommended-component
                :four-entry-data="fourEntryData"
            />
            <hot-recommended-component
                :hot-article-data="hotArticleData"
            />
            <recently-added-component
                :recent-article-data="recentArticleData"
            />
            <div v-for="(item,key) in randomArticleData" :key="key">
              <entry-recommended-component
                  :ele="item"
              />
            </div>

            <div @click="loadingMore" v-loading="loading" class="more-button">
              <div>更多</div>
            </div>
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
import {HttpGet} from "@/http/indexPage";
import {Navigation2Icon} from "vue-feather-icons"

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
    Navigation2Icon,
  },
  data() {
    return {
      locale: this.$locale,
      loading: false,

      sellTypeData: [],
      officialEntryData: [],

      fourEntryData: [],
      hotArticleData: [],
      recentArticleData: [],

      randomArticleData: [],

    }
  },
  methods: {
    jumpTo(web) {
      window.open(`/marketplace/search${web}`, "_blank")
    },

    loadingMore() {
      this.loading = true
      HttpGet(`/api/get/select/entry/articleInfos`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.randomArticleData.push(...ret.data.articleInfosAbsList)
        this.loading = false
      }).catch(e => {
        this.loading = false
        this.$message({
          message: "加载失败"
        })
        console.log(e)
      })

      setTimeout(() => {
        if (this.loading) {
          this.loading = false
          this.$message({
            message: "加载失败"
          })
        }
      }, 10000)

    },

    showGotoTopButton() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300 && this.$refs.gotoTopButton !== undefined && this.$refs.gotoTopButton.classList.length === 1) {
          this.$refs.gotoTopButton.classList.add("is-active")
        } else if (window.scrollY < 300 && this.$refs.gotoTopButton !== undefined && this.$refs.gotoTopButton.classList.length === 2) {
          this.$refs.gotoTopButton.classList.remove("is-active")
        }
      })
    },
    gotoTop() {
      if (this.$refs.gotoTopButton !== undefined) {
        let fun = () => {
          if (window.scrollY === 0) return
          let currentY = window.scrollY
          window.scrollTo(0, currentY * .9)
          window.requestAnimationFrame(fun)
        }
        fun()
      }
    },

    initRandomArticle() {
      HttpGet(`/api/get/select/entry/articleInfos`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.randomArticleData = ret.data.articleInfosAbsList
      }).catch(e => console.log(e))

    },
    initRecentArticle() {
      HttpGet(`/api/get/select/recent/articleInfos`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.recentArticleData = ret.data.articleInfoAbsList
      }).catch(e => console.log(e))

    },
    initHotArticle() {
      HttpGet(`/api/get/select/hot/articleInfos`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.hotArticleData = ret.data.articleInfoAbsList
      }).catch(e => console.log(e))

    },
    initFourEntry() {
      HttpGet(`/api/get/select/four/official/entryInfos`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.fourEntryData = ret.data.entryAbsList
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
      this.initSellType()
      this.initOfficialEntry()
      this.initFourEntry()
      this.initHotArticle()
      this.initRecentArticle()
      this.initRandomArticle()
    }
  },

  mounted() {
    this.initData()
    this.showGotoTopButton()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  background-color: $index-page-main-background-color-grey;

  .goto-top {
    border-radius: 6px;
    padding: 16px;
    position: fixed;
    display: none;
    bottom: 5%;
    right: 5%;
    transition: all .2s;

    &.is-active {
      display: inline-block;
    }

    &:hover {
      background: white;
      cursor: pointer;
      box-shadow: $color-shadow-extra-large;
    }
  }

  @media screen and (max-width: $min) {
    .goto-top {
      display: none;
    }
  }

  .banner {
    margin: 16px auto 0;
    padding-bottom: 16px;
    height: 335px;
    width: 100%;
    background: white;
    overflow: hidden;
    position: relative;

    img {
      border-radius: 6px;
      width: 1012px;
      height: 319px;
      opacity: .8;
      object-position: top;
      object-fit: fill;
    }

    @media screen and (min-width: $middle) {
      .show-info {
        width: 1012px;
        height: 319px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -506px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 100px 0 50px 50px;

        h3 {
          font-size: 44px;
          font-style: italic;
          font-weight: 800;
        }

        p {
          font-size: 24px;
          font-weight: 600;
        }

        > div {
          border-radius: 6px;
          border: 1px solid $index-page-main-background-color-blue;
          padding: 5px 12px;
          margin-top: 16px;
          transition: all .2s;

          &:hover {
            cursor: pointer;
            background-color: $index-page-main-background-color-blue;
            color: white;
          }
        }
      }
    }
    @media screen and (min-width: $mini) and (max-width: $middle) {
      .show-info {
        width: 1012px;
        height: 319px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -506px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 100px 50px 50px;

        h3 {
          font-size: 44px;
          font-style: italic;
          font-weight: 800;
        }

        p {
          font-size: 24px;
          font-weight: 600;
        }

        > div {
          border-radius: 6px;
          border: 1px solid $index-page-main-background-color-blue;
          padding: 5px 12px;
          margin-top: 16px;
          transition: all .2s;

          &:hover {
            cursor: pointer;
            background-color: $index-page-main-background-color-blue;
            color: white;
          }
        }
      }
    }

    @media screen and (max-width: $mini) {
      .show-info {
        width: 1012px;
        height: 319px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -506px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 100px 380px;

        h3 {
          font-size: 44px;
          font-style: italic;
          font-weight: 800;
        }

        p {
          font-size: 24px;
          font-weight: 600;
        }

        > div {
          border-radius: 6px;
          border: 1px solid $index-page-main-background-color-blue;
          padding: 5px 12px;
          margin-top: 16px;
          transition: all .2s;

          &:hover {
            cursor: pointer;
            background-color: $index-page-main-background-color-blue;
            color: white;
          }
        }
      }
    }
  }

  .right-content {
    flex: 3.5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .more-button {
      border-radius: 6px;
      border: $border;
      padding: 3px 16px;
      background: $index-page-main-background-color-blue;
      color: white;
      transition: all .2s;

      &:hover {
        cursor: pointer;
        box-shadow: $color-shadow-extra-large;
        padding: 3px 36px;
      }
    }
  }
}

</style>