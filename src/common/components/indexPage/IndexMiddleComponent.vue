<template>
  <div class="index-middle-component">
    <div class="index-middle-content">
      <div class="introduction-content">
        <div class="introduction-card">
          <h2>{{ locale.indexPageH2 }}</h2>
          <p v-html="locale.indexPageP"></p>
          <a :href="exploreLink" target="_blank">{{ locale.indexPageExploreButton }}</a>
        </div>
        <div class="tip-content">
          <div>
            <award-icon :size="'16'"/>
            <p v-html="locale.indexPageTip"></p>
          </div>
          <div>
            <send-icon :size="'16'"/>
            <a v-html="locale.indexPageTip2"></a>
          </div>
        </div>
      </div>

      <div class="bottom-content">
        <div class="github-info">
          <div>
            <a :href="indexPath" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <use :xlink:href="`${icons}#home2`"></use>
              </svg>
            </a>
          </div>
          <p>{{ locale.github }}</p>
        </div>
        <div class="bottom-list">
          <ul v-for="(item, key) in locale.bottomList" :key="key">
            <li v-for="(el, k) in item" :key="k">
              <a :href="el.url">{{ el.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icons from "@/icons/home2.svg"
import {AwardIcon, SendIcon} from "vue-feather-icons"

export default {
  name: "IndexMiddleComponent",
  components: {
    AwardIcon,
    SendIcon,
  },
  data() {
    return {
      indexPath: "https://github.com",
      icons: icons,
      locale: this.$locale,
      exploreLink: "/explore",
    };
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.index-middle-component {
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 1.5;

  .index-middle-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .introduction-content {
      width: 100%;

      .introduction-card {
        margin-top: 16px;
        padding: 36px;
        background: white;
        border-radius: 6px;
        border: 1px solid $index-page-main-middle-border-color;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        h2, p {
          margin-bottom: 8px;
          text-align: start;

        }

        a {
          min-width: 128px;
          text-align: center;
          margin-top: 8px;
          padding: 5px 16px;
          border-radius: 6px;
          border: 1px solid $index-page-main-middle-border-color;
          background: white;
          color: $index-page-main-middle-font-color-blue;
          font-weight: 600;
          box-shadow: $index-page-main-middle-border-shadow;
          transition: all .2s;
        }

        a:hover {
          background: $index-page-main-middle-font-color-blue;
          color: white;
        }
      }

      .tip-content {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        bottom: 0;

        div {
          font-size: 12px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          text-align: start;

          svg {
            margin-right: 2px;
          }

          a {
            color: $index-page-main-middle-font-color-grey;
          }
          a:hover {
            color: $index-page-main-middle-font-color-blue;
            cursor: pointer;
          }

        }
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 1011px) {
      .bottom-content {
        width: 100%;
        position: relative;
        bottom: 0;
        margin: 32px 0;

        .bottom-list {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: start;

          ul {
            width: 100%;

            li {
              margin-right: 24px;
              width: 100%;

              a {
                color: $index-page-main-middle-font-color-grey !important;
                font-size: 12px;
              }

              a:hover {
                color: $index-page-main-middle-font-color-blue !important;
              }
            }
          }
        }

        .github-info {
          display: none;
        }
      }
    }

    @media only screen and (min-width: 1012px) {
      .bottom-content {
        width: 100%;
        position: relative;
        bottom: 0;
        margin: 32px 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .bottom-list {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: start;
          flex: 2;

          ul {
            padding-left: 24px;
            width: 100%;

            li {
              margin-bottom: 4px;
              width: 100%;

              a {
                color: $index-page-main-middle-font-color-grey !important;
                font-size: 12px;
              }

              a:hover {
                color: $index-page-main-middle-font-color-blue !important;
              }
            }
          }
        }

        .github-info {
          margin-right: 32px;
          flex: 1;
          text-align: start;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          div {
            margin-right: 8px;

            a {
              width: 24px;
              height: 24px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }

    @media screen and (max-width: $min){
      .bottom-content {
        width: 100%;
        position: relative;
        bottom: 0;
        margin: 32px 0;

        .bottom-list {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: start;

          ul {
            width: 100%;

            li {
              margin-right: 24px;
              width: 100%;

              a {
                color: $index-page-main-middle-font-color-grey !important;
                font-size: 12px;
              }

              a:hover {
                color: $index-page-main-middle-font-color-blue !important;
              }
            }
          }
        }

        .github-info {
          display: none;
        }
      }
    }
  }


}

</style>