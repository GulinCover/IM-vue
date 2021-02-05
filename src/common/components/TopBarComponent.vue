<template>
  <div class="top-bar-component">
    <div class="top-bar-wrapper">
      <div class="mobile-menu-btn" @click="mobileMenuBtn">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="icons">
        <a :href="indexPath" target="_blank">
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
          <input type="text" @focus="searchFocusIn" @focusout="searchFocusOut"
                 :placeholder="locale.topBarSearchPlaceholder">
          <div class="top-bar-search-show" :class="{'is-active':isSearchActive}">
            <ul>
              <li class="jumpOp" v-for="(item, key) in searchHistory" :key="key" @mouseover="searchRecord">
                <a :href="item.url">
                  <span>
                    <clipboard-icon :size="'18'"/>
                  </span>
                  <h3>{{ item.name }}</h3>
                  <span>
                    Jump to
                    <external-link-icon :size="'12'"/>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="issues is-hover" @click="jump('/issues')">{{ locale.topBarIssues }}</div>
        <div class="marketplace is-hover" @click="jump('/marketplace')">{{ locale.topBarMarketplace }}</div>
        <div class="explore is-hover" @click="jump('/explore')">{{ locale.topBarExplore }}</div>
      </div>

      <div class="top-bar-notification">
        <div class="top-bar-bell">
          <bell-icon :size="'18'"/>
        </div>
        <div class="top-bar-plus">
          <plus-icon :size="'18'"/>
          <corner-right-down-icon :size="'12'"/>
        </div>
        <div class="top-bar-avatar">
          <user-icon :size="'18'"/>
          <corner-right-down-icon :size="'12'"/>
        </div>
      </div>
    </div>

    <div class="mobile-drop-down-box"
         :class="{'is-active':isMobileMenuActive}">
      <div class="search-content">
        <input type="text" :placeholder="locale.topBarSearchPlaceholder">
      </div>
      <div class="issues">issues</div>
      <div class="marketplace">marketplace</div>
      <div class="explore">explore</div>
      <div class="setting">setting</div>
      <div class="user">user</div>
      <div class="logout">logout</div>
    </div>
  </div>

</template>

<script>
import icons from "@/icons/home.svg"
import {BellIcon, PlusIcon, CornerRightDownIcon, UserIcon, ClipboardIcon, ExternalLinkIcon} from "vue-feather-icons"

export default {
  name: "TopBar",
  components: {
    BellIcon,
    PlusIcon,
    CornerRightDownIcon,
    UserIcon,
    ClipboardIcon,
    ExternalLinkIcon,
  },
  data() {
    return {
      indexPath: "https://github.com/gulincover",
      icons: icons,
      locale: this.$locate,
      isMobileMenuActive: false,
      isSearchActive: false,

      searchHistory: [
        {
          id: "1",
          name: "textdsdasfsfasfasfdsafsa",
          url: ""
        },
        {
          id: "1",
          name: "text",
          url: ""
        },
        {
          id: "1",
          name: "text",
          url: ""
        },
        {
          id: "1",
          name: "text",
          url: ""
        },
        {
          id: "1",
          name: "text",
          url: ""
        },
      ]
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
      this.isSearchActive = false
    },

    jump(web) {
      if (web===`/${this.$route.name}`) return
      this.$router.push(web)
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/api/GlobalApi.scss";

div.is-hover:hover {
  cursor: pointer;
}

@media all and (min-width: 768px) {
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

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          margin-right: 16px;
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

      .search-content {
        margin-bottom: 16px;
        height: 30px;
        width: 100%;
        border-radius: 6px;
        border: 1px solid $top-bar-search-border-color;
        display: flex;
        justify-content: space-between;
        justify-items: center;

        input {
          background: none;
          border: none;
          width: 100%;
          padding: 0 12px;
        }

        div {
          width: 19px;
        }
      }

      div {
        height: 40px;
        width: 100%;
        border-top: 1px solid $top-bar-search-border-color;
        text-align: start;
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