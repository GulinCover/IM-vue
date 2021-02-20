<template>
  <div class="top-bar-component">
    <div class="top-bar-wrapper">
      <div class="mobile-menu-btn" @click="mobileMenuBtn">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="icons">
        <a :href="locale.indexPath" target="_blank">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <use :xlink:href="`${icons}#home`"></use>
            </svg>
          </div>
        </a>
      </div>

      <div class="mobile-bell">
        <bell-icon :size="'18'"/>
      </div>

      <div class="top-bar-middle">
        <div class="search-content" :class="{'is-active':isSearchActive}">
          <input v-model="searchData" type="text" @focus="searchFocusIn" @focusout="searchFocusOut"
                 :placeholder="locale.topBarSearchPlaceholder">
          <div class="top-bar-search-show" :class="{'is-active':isSearchActive}">
            <ul>
              <li @click="jumpTo(item.topicId)" class="jumpOp" v-for="(item, key) in searchShowData" :key="key">
                <a @mouseover="searchRecord">
                  <span>
                    <clipboard-icon :size="'18'"/>
                  </span>
                  <h3>{{ item.topicTitle }}</h3>
                  <span>
                    Jump to
                    <external-link-icon :size="'12'"/>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="issues is-hover" @click="linkTo('/repository')">{{ locale.topBarRepository }}</div>
        <div class="marketplace is-hover" @click="linkTo('/marketplace')">{{ locale.topBarMarketplace }}</div>
        <div class="explore is-hover" @click="linkTo('/explore')">{{ locale.topBarExplore }}</div>
      </div>

      <div class="top-bar-notification">
        <div class="top-bar-bell">
          <bell-icon :size="'18'"/>
        </div>
        <div @click="popShow(0)" class="top-bar-plus">
          <plus-icon :size="'18'"/>
          <div class="arrow"></div>
          <div class="show">
            <ul>
              <div></div>
              <li @click="createData(0)">创建著述</li>
              <li @click="createData(1)">创建词条</li>
              <li @click="createData(2)">创建热论词条</li>
              <li @click="createData(3)">创建认证</li>
            </ul>
          </div>
        </div>
        <div @click="popShow(1)" class="top-bar-avatar">
          <user-icon :size="'18'"/>
          <div class="arrow"></div>
          <div class="show">
            <ul>
              <div></div>
              <li>当前登录:Alex</li>
              <h4></h4>
              <p>开心的一天dsadas</p>
              <h4></h4>
              <li @click="newLinkTo('/user/manager')">您的设置</li>
              <li @click="newLinkTo('/repository')">您的仓库</li>
              <h4></h4>
              <li @click="newLinkTo('/user/manager')">设置</li>
              <li @click="logout">登出</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-drop-down-box"
         :class="{'is-active':isMobileMenuActive}">
      <div class="search-mobile-content">
        <input type="text" v-model="searchMobileData" :class="{'is-active':isMobileSearchActive}"
               @focus="searchMobileFocusIn" @focusout="searchMobileFocusOut"
               :placeholder="locale.topBarSearchPlaceholder">
        <div class="show-card" :class="{'is-active':isMobileSearchActive}">
          <a :href="`/marketplace/search?topicLike=${searchMobileData}`" @mouseover="searchRecord">
            <span>
              <book-icon :size="'18'"/>
            </span>
            <h3>{{ searchMobileData }}</h3>
            <span>
              Jump to
              <external-link-icon :size="'12'"/>
            </span>
          </a>
        </div>
      </div>
      <div @click="linkTo('/')">主页</div>
      <div @click="linkTo('/repository')" class="repository">仓库</div>
      <div @click="linkTo('/marketplace')" class="marketplace">市场</div>
      <div @click="linkTo('/explore')" class="explore">发现</div>
      <div @click="linkTo('/user/manager')" class="setting">设置</div>
      <div @click="logout()" class="logout">
        <log-out-icon/>
        <span>登出</span>
      </div>
    </div>
  </div>

</template>

<script>
import icons from "@/icons/home.svg"
import {BookIcon, LogOutIcon, BellIcon, PlusIcon, UserIcon, ClipboardIcon, ExternalLinkIcon} from "vue-feather-icons"
import { HttpPost} from "@/http/indexPage";

export default {
  name: "TopBar",
  components: {
    BellIcon,
    PlusIcon,
    UserIcon,
    ClipboardIcon,
    ExternalLinkIcon,
    LogOutIcon, BookIcon,
  },
  data() {
    return {
      indexPath: "https://github.com/gulincover",
      icons: icons,
      locale: this.$locale,
      isMobileMenuActive: false,
      isSearchActive: false,
      isMobileSearchActive: false,
      isPop: false,
      isGlobal: false,
      searchData: "",
      searchMobileData: "",
      searchShowData: "",

      searchHistorysData: [],
    }
  },

  methods: {
    mobileMenuBtn() {
      this.isMobileMenuActive = !this.isMobileMenuActive
    },

    searchRecord(index) {
      let els = document.querySelectorAll(".jumpOp")
      els.forEach(item => {
        item.classList.remove("is-active")
      })
      els.forEach((item, key) => {
        if (key + 1 === index) {
          item.classList.add("is-active")
        }
      })
    },

    searchFocusIn() {
      this.isSearchActive = true
    },
    searchFocusOut() {
      setTimeout(() => this.isSearchActive = false, 200)
    },
    searchMobileFocusIn() {
      if (this.searchMobileData === "") return
      this.isMobileSearchActive = true
    },
    searchMobileFocusOut() {
      setTimeout(() => this.isMobileSearchActive = false, 200)
    },

    popShow(index) {
      this.popHid()

      let eles = document.querySelectorAll(".show")
      eles[index].classList.add("is-active")
      this.isPop = true
      this.isGlobal = false
    },

    popHid() {
      document.querySelectorAll(".show").forEach(it => it.classList.remove("is-active"))
      this.isGlobal = true
    },

    jumpTo(web) {
      window.open(`/topic/public/${web}`, "_blank")
    },

    linkTo(web) {
      if (this.$route.path === web) return
      this.$router.push(web)
    },

    logout() {
      this.$router.push("/login")
    },

    newLinkTo(web) {
      if (this.$route.path === web) return
      window.open(web, "_blank")

    },

    dataInit() {
      HttpPost("/api/post/select/me/searchHistory/topics").then(ret => {
        let res = ret.data.code.split(" ")

        if (res[0] !== "200") {
          alert(res[1])
          return
        }
        this.searchHistorysData = ret.data.searchHistories
        this.searchShowData = this.searchHistorysData
      }).catch(e => {
        console.log(e)
      })
    },

    globalClick() {
      if (this.isGlobal)
        this.popHid()
      if (this.isPop)
        this.isGlobal = true
    },

    createData(index) {
      switch (index) {
        case 0:
          window.open("/create/topic", "_blank")
          break
        case 1:
          window.open("/create/entry", "_blank")
          break
        case 2:
          window.open("/create/hot", "_blank")
          break
        case 3:
          this.$message({
            message:"此功能暂未上线,请耐心等待...",
          })
          break
        default:
          return;
      }
    },

    searchJumpTo() {
      this.searchShowData = [
        {
          topicId: `search?blurry=${this.searchData}`,
          topicTitle: this.searchData
        }
      ]
    },

  },
  mounted() {
    this.dataInit()

    window.addEventListener("click", this.globalClick)
  },
  watch: {
    searchData(newVal) {
      if (newVal !== "") {
        this.searchJumpTo()
      } else {
        this.searchShowData = this.searchHistorysData
      }
    },

    searchMobileData(newVal) {
      if (newVal !== "")
        this.searchMobileFocusIn()
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/api/GlobalApi.scss";

div.is-hover:hover {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .top-bar-component {
    padding: 16px 24px;
    height: $top-bar-height;
    background: $top-bar-background;
    color: $top-bar-font-color;
    white-space: nowrap;
    font-weight: 600;
    font-size: 14px;

    .top-bar-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .mobile-menu-btn {
        display: none;
      }

      .mobile-bell {
        display: none;
      }

      .icons a .icon {
        height: 32px;
        margin-right: 16px;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;

        :hover {
          cursor: pointer;
        }
      }

      .top-bar-middle {
        height: 30px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 16px;

        .search-content {
          position: relative;
          max-width: 272px;
          width: 30%;
          border-radius: 6px;
          border: 1px solid $top-bar-search-border-color;
          transition: all .2s;
          background: $top-bar-background;

          &.is-active {
            max-width: 400px;
            background: white;
            border: 2px solid $index-page-main-middle-font-color-blue-2;
            width: 50%;
          }

          input {
            width: auto;
            height: 28px;
            background: none;
            border: none;
            padding: 0 12px;
            min-width: 100%;
          }

          .top-bar-search-show {
            display: none;
            transition: all .5s;

            &.is-active {
              z-index: 99;
              width: 100%;
              border-radius: 6px;
              top: 26px;
              display: block;
              position: absolute;
              background: rgba(255, 255, 255, .65);
              backdrop-filter: blur(9px);
              box-shadow: $index-page-main-middle-border-shadow;
            }

            ul li:last-child {
              border-bottom: 1px solid $index-page-main-right-font-color-black;
            }

            ul li a {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 8px;
              color: $index-page-main-right-font-color-black;
              transition: all .2s;

              &:hover {
                background: $index-page-main-middle-font-color-blue-2;
              }

              &:hover span:last-child {
                opacity: 1;
                visibility: visible;
              }

              h3 {
                text-align: start;
                width: 100%;
                margin-left: 8px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }

              span:last-child {
                opacity: 0;
                visibility: hidden;
                width: 72px;
                background: $index-page-main-middle-background-grey;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 6px;
                border: 1px solid $index-page-main-middle-font-color-blue-2;
                height: 28px;
                padding: 6px;
                transition: all .2s;
              }
            }
          }
        }

        div {
          margin-right: 16px;
        }
      }

      .top-bar-notification {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          margin-right: 16px;
          position: relative;

          .arrow {
            position: relative;
            top: 3px;
            border-style: solid;
            border-width: 4px;
            border-color: $index-page-main-background-color-grey transparent transparent;
            width: 0;
            height: 0;
          }

          > .show {
            position: absolute;
            opacity: 0;
            visibility: hidden;

            &.is-active {
              z-index: 1000;
              opacity: 1;
              visibility: visible;
              position: absolute;
              top: 32px;
              right: 0;
              background: white;
              border: 1px solid $index-page-main-border-color-grey;
              border-radius: 6px;

              ul {
                position: relative;

                div {
                  position: absolute;
                  top: -16px;
                  right: 11px;
                  border-style: solid;
                  border-width: 6px;
                  border-color: transparent transparent white;
                  width: 0;
                  height: 0;
                }

                li {
                  width: 128px;
                  text-align: start;

                  &:nth-child(2) {
                    margin-top: 4px;
                  }

                  &:last-child {
                    margin-bottom: 4px;
                  }

                  &:hover {
                    cursor: pointer;
                    background: $index-page-main-middle-font-color-blue;
                    color: white;
                  }

                  padding: 4px 16px;
                  color: $index-page-main-font-color-grey-3;
                }

                h4 {
                  margin: 4px 0;
                  border-bottom: 1px solid $index-page-main-border-color-grey;
                }

                p {
                  border: 1px solid $index-page-main-border-color-grey;
                  border-radius: 6px;
                  width: 98px;
                  margin: 0 auto;
                  padding: 3px 12px;
                  text-align: start;
                  color: $index-page-main-font-color-grey-3;
                  font-size: 12px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                }
              }
            }

          }
        }

        div:last-child {
          margin-right: 0;
        }
      }
    }

    .mobile-drop-down-box {
      display: none;
    }
  }
}

@media all and (max-width: 767px) {
  .top-bar-component {
    padding: 16px 16px;
    min-height: $top-bar-height + 2;
    background: $top-bar-background;
    color: $top-bar-font-color;
    white-space: nowrap;
    font-weight: 600;
    font-size: 14px;

    .top-bar-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .mobile-menu-btn {
        height: 30px;
        margin-right: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        justify-items: center;

        div {
          height: 2px;
          width: 22px;
          background: white;
          border-radius: 8px;
        }
      }

      .icons {
        height: 32px;
        width: 100%;
        margin-right: 16px;
      }

      .mobile-bell {
        height: 32px;
        margin-right: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .top-bar-middle {
        display: none;
      }

      .top-bar-notification {
        display: none;
      }
    }

    .mobile-drop-down-box {
      margin-top: 16px;
      display: none;
      visibility: hidden;
      opacity: 0;
      transition: all .5s;

      .search-mobile-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: center;
        transition: all .2s;
        padding-bottom: 16px;

        input {
          border-radius: 6px;
          border: 1px solid $top-bar-search-border-color;
          background: none;
          padding: 8px 16px;
          width: 100%;
          outline: none;

          &.is-active {
            background: white;
            border: 2px solid $index-page-main-middle-font-color-blue-2;
            box-shadow: $color-state-focus-shadow;
          }
        }

        .show-card {
          opacity: 0;
          visibility: hidden;
          transition: all .2s;
          height: 0;
          border-radius: 6px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: black;

          > a {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
            color: $index-page-main-right-font-color-black;
            transition: all .2s;

            &:hover {
              background: $index-page-main-middle-font-color-blue-2;
            }

            &:hover span:last-child {
              opacity: 1;
              visibility: visible;
            }

            h3 {
              text-align: start;
              width: 100%;
              margin-left: 8px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            span:last-child {
              opacity: 0;
              visibility: hidden;
              width: 72px;
              background: $index-page-main-middle-background-grey;
              font-size: 12px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-radius: 6px;
              border: 1px solid $index-page-main-middle-font-color-blue-2;
              height: 28px;
              padding: 6px;
              transition: all .2s;
            }
          }

          &.is-active {
            opacity: 1;
            visibility: visible;
            height: 48px;
            background-color: white;
          }
        }
      }

      > div:not(:first-child) {
        height: 40px;
        width: 100%;
        border-top: 1px solid $top-bar-search-border-color;
        text-align: start;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &:hover {
          cursor: pointer;
        }

        svg {
          margin-right: 4px;
        }
      }
    }

    .mobile-drop-down-box.is-active {
      display: block;
      visibility: visible;
      opacity: 1;
    }
  }

}

</style>