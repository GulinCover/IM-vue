<template>
  <div class="pop-menu-and-left-nav-wrapper">
    <div class="content-wrapper">
      <div class="content">
        <div class="backdrop">
          <div class="left">
            <div class="left-menu">
              <div>
                <h3>{{ locale.types }}</h3>
                <ul>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                </ul>
              </div>
              <div>
                <h3>{{ locale.categories }}</h3>
                <ul>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                  <li>dasdsa</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="right">
            <search-component/>

            <div class="left-menu-bar"
                 @click="activePopMenu"
            >MENU
            </div>

            <slot name="content"></slot>

          </div>
        </div>
      </div>
    </div>

    <div class="pop-menu-wrapper" :class="{'is-active':isPopMenuActive}">
      <div class="pop-menu">
        <h3>
          <span>Menu</span>
          <x-icon @click="closePopMenu"/>
        </h3>

        <div>
          <div>
            <h3>{{ locale.types }}</h3>
            <ul>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
            </ul>
          </div>
          <div>
            <h3>{{ locale.categories }}</h3>
            <ul>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
              <li>dasdsa</li>
            </ul>
          </div>
        </div>

        <div class="button">
          <div @click="closePopMenu">Close</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {XIcon} from "vue-feather-icons"
import SearchComponent from "@/common/components/marketplace/SearchComponent";

export default {
  name: "PopMenuAndLeftNavComponent",
  components: {
    SearchComponent,
    XIcon
  },
  data() {
    return {
      locale: this.$locate,
      isPopMenuActive: false,
    }
  },
  methods: {
    fixPopMenu() {
      // if (this.isPopMenuActive) {
      //   let element = document.querySelector(".pop-menu-wrapper")
      //   element.style.top = `${window.scrollY}px`
      // }
      let element = document.querySelector(".pop-menu-wrapper")
      element.style.top = `${window.scrollY}px`
    },

    activePopMenu() {
      this.isPopMenuActive = !this.isPopMenuActive
    },

    closePopMenu() {
      this.isPopMenuActive = false
    }
  },

  mounted() {
    window.addEventListener("scroll", this.fixPopMenu)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.content-wrapper {
  background: $index-page-main-background-color-grey;
  width: 100%;

  .content {

    .backdrop {
      max-width: 1012px;
      margin: 0 auto;
      padding: 0 16px;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      @media screen and (min-width: $max) {
        .left {
          flex: 1;
          padding: 8px 32px 40px 0;

          .left-menu {
            font-size: 14px;
            color: $index-page-main-font-color-grey-3;

            > div {
              text-align: start;

              h3 {
                margin-bottom: 36px;
              }

              ul {
                margin-bottom: 24px;

                li {
                  padding: 8px 16px;
                  border-radius: 6px;

                  &:hover {
                    cursor: pointer;
                    background: white;
                  }
                }
              }
            }
          }
        }

        .right {
          flex: 3;

          .left-menu-bar {
            display: none;
          }
        }
      }

      @media screen and (max-width: $max) {
        .left {
          display: none;
        }

        .right {
          width: 100%;

          .left-menu-bar {
            margin: 16px 0;
            border: 1px solid $index-page-main-border-color-grey;
            border-radius: 6px;
            width: 100%;
            padding: 10.5px 21px;
            opacity: .8;

            &:hover {
              opacity: 1;
              background: $index-page-main-background-color-grey-2;
              cursor: pointer;
            }
          }
        }

      }
    }
  }
}

.pop-menu-wrapper.is-active {
  display: flex!important;
}

.pop-menu-and-left-nav-wrapper {
  width: 100%;

  .pop-menu-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($index-page-main-background-color-grey-4, .45);
    backdrop-filter: blur(9px);
    display: none;
    justify-content: center;
    align-items: center;

    .pop-menu {
      overflow: hidden;
      max-height: 80vh;
      max-width: 90vw;
      width: 70%;
      z-index: 99;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      border-radius: 6px;
      border: 1px solid $index-page-main-border-color-grey;

      > h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 16px;
        background: $index-page-main-background-color-grey;
        border-bottom: 1px solid $index-page-main-border-color-grey;

        svg:hover {
          color: $index-page-main-middle-font-color-blue;
        }
      }

      > div {
        width: 100%;
        background: white;
        font-size: 14px;
        text-align: start;

        &:nth-child(2) {
          overflow: scroll;
          overflow-x: hidden;
        }

        &:last-child {
          background: $index-page-main-background-color-grey;
          padding: 16px;
          border-top: 1px solid $index-page-main-border-color-grey;
          overflow: hidden;

          div {
            text-align: center;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            padding: 5px 16px;
          }
        }

        > div {
          padding: 16px;

          &:first-child {
            border-bottom: 1px solid $index-page-main-border-color-grey;
          }

          > h3 {
            margin-bottom: 4px;
          }

          ul {
            li {
              padding: 4px 16px;
              border-radius: 6px;
              transition: all .2s;

              &:hover {
                cursor: pointer;
                background: $index-page-main-background-color-grey;
              }
            }
          }
        }
      }
    }
  }
}

</style>