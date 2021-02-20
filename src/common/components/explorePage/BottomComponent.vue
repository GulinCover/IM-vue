<template>
  <div class="bottom-wrapper">
    <div class="first">
      <div class="left">
        <h2>{{ bottomData.first.name }}</h2>
        <h3>{{ bottomData.first.h3 }}</h3>
        <p>{{ bottomData.first.p }}</p>
        <a target="_blank" :href="bottomData.first.url">{{ locale.subscribe }}</a>
      </div>

      <ul v-for="(item,key) in locale.bottomList" :key="key">
        <li v-for="(el, k) in item" :key="k">
          <a :href="el.url">{{ el.name }}</a>
        </li>
      </ul>

    </div>
    <div class="second">
      <div class="second-wrapper">
        <div class="left">
          <a target="_blank" :href="item.url" v-for="(item,key) in bottomData.second" :key="key">
            {{ item.name }}
          </a>
        </div>
        <div class="right">
          <a href="https://github.com/gulincover">
            <github-icon :size="'18'"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {GithubIcon} from "vue-feather-icons"

export default {
  name: "BottomComponent",
  components: {
    GithubIcon,
  },
  data() {
    return {
      bottomData: {
        first: {
          name: 'GitHub',
          h3: "请支持GitHub",
          p: "感谢GitHub的技术支持",
          url: "https://github.com/gulincover",
        },
        second: [
          {
            name: "@2021GitHub,Inc,",
            url: 'https://github.com/gulincover',
          },
          {
            name: "Terms",
            url: 'https://github.com/gulincover',
          },
          {
            name: "Policy",
            url: '/policy',
          },
          {
            name: "What is WeekType?",
            url: '/policy',
          },
        ],
      },

      locale:this.$locale
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.bottom-wrapper {
  @media screen and (min-width: $max) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid $index-page-main-border-color-grey;

    .first {
      max-width: 1280px;
      margin-bottom: 32px;
      width: 100%;
      padding: 72px 16px 32px;
      background: white;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .left {
        flex: 2;
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        h2 {
          font-weight: 800;
          font-size: 28px;
        }

        h3 {
          margin-top: 16px;
          font-size: 14px;
          line-height: 24px;
        }

        p {
          margin-bottom: 16px;
          font-size: 12px;
          line-height: 24px;
        }

        a {
          border-radius: 6px;
          padding: 8px 12px;
          margin-bottom: 24px;
          border: 1px solid $index-page-main-background-color-blue;
          opacity: .8;
          font-size: 14px;

          &:hover {
            opacity: 1;
          }
        }
      }

      ul {
        flex: 1;
        padding-left: 24px;
        margin-bottom: 8px;
        font-size: 14px;

        li {
          text-align: start;
          margin-bottom: 16px;

          a {
            color: $index-page-main-font-color-grey-3;

            &:hover {
              color: $index-page-main-background-color-blue;
              text-decoration: underline;
            }
          }
        }
      }
    }

    .second {
      width: 100%;
      background: $index-page-main-background-color-grey;

      .second-wrapper {
        max-width: 1280px;
        margin: 0 auto;
        padding: 24px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div:first-child {
          a {
            font-size: 12px;
            color: $index-page-main-font-color-grey-3;
            margin-right: 16px;

            &:hover {
              color: $index-page-main-background-color-blue;
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }

        div:last-child {
          a {
            width: 28px;
            height: 28px;
            overflow: hidden;
            border-radius: 50%;
            background: $index-page-main-background-color-grey-3;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 75%;
              height: 75%;
              stroke: white;
              fill: white;
            }
          }
        }
      }


    }

  }

  @media screen and (max-width: $mini) {
    .second {
      width: 100%;
      background: $index-page-main-background-color-grey;

      .second-wrapper {
        max-width: 1280px;
        margin: 0 auto;
        padding: 24px 16px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column-reverse;

        div:first-child {
          width: 100%;
          text-align: start;

          a {
            font-size: 12px;
            color: $index-page-main-font-color-grey-3;
            margin-right: 16px;

            &:hover {
              color: $index-page-main-background-color-blue;
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }

        div:last-child {
          width: 100%;
          margin-bottom: 16px;

          a {
            width: 28px;
            height: 28px;
            overflow: hidden;
            border-radius: 50%;
            background: $index-page-main-background-color-grey-3;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 75%;
              height: 75%;
              stroke: white;
              fill: white;
            }
          }
        }
      }


    }
  }

  @media screen and (max-width: $max) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid $index-page-main-border-color-grey;

    .first {
      max-width: 1280px;
      margin-top: 40px;
      width: 100%;
      background: white;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      padding: 0 40px;

      .left {
        width: 100%;
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        h2 {
          font-weight: 800;
          font-size: 28px;
        }

        h3 {
          margin-top: 16px;
          font-size: 14px;
          line-height: 24px;
        }

        p {
          margin-bottom: 16px;
          font-size: 12px;
          line-height: 24px;
        }

        a {
          border-radius: 6px;
          padding: 8px 12px;
          margin-bottom: 24px;
          border: 1px solid $index-page-main-background-color-blue;
          opacity: .8;
          font-size: 14px;

          &:hover {
            opacity: 1;
          }
        }
      }

      ul {
        flex: 1;
        padding-right: 16px;
        margin-bottom: 8px;
        font-size: 14px;

        li {
          text-align: start;
          margin-bottom: 16px;

          a {
            color: $index-page-main-font-color-grey-3;

            &:hover {
              color: $index-page-main-background-color-blue;
              text-decoration: underline;
            }
          }
        }
      }
    }

    .second {
      width: 100%;
      background: $index-page-main-background-color-grey;

      .second-wrapper {
        max-width: 1280px;
        margin: 0 auto;
        padding: 24px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div:first-child {
          a {
            font-size: 12px;
            color: $index-page-main-font-color-grey-3;
            margin-right: 16px;

            &:hover {
              color: $index-page-main-background-color-blue;
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }

        div:last-child {
          a {
            width: 28px;
            height: 28px;
            overflow: hidden;
            border-radius: 50%;
            background: $index-page-main-background-color-grey-3;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 75%;
              height: 75%;
              stroke: white;
              fill: white;
            }
          }
        }
      }
    }
  }
}

</style>