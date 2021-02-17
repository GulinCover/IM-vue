<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="title">
        <div class="title-left">
          <book-open-icon :size="'14'"/>
          <span>Alex</span>
          <span>/</span>
          <span>Topic</span>
        </div>

        <div class="title-middle">
          <p>this is a topic desc</p>
          <ul>
            <li class="h">3D</li>
            <li class="h">3D</li>
            <li class="h">3D</li>
            <li class="h">3D</li>
            <li class="h">3D</li>
            <li class="h">3D</li>
            <li class="h">3D</li>
            <li class="h">3D</li>
            <li class="h">3D</li>
            <li class="h">3D</li>
          </ul>
        </div>

        <div class="title-right">
          <ul>
            <li>
              <div class="li-left">
                <eye-icon :size="'16'"/>
                <span>Watch</span>
              </div>
              <div class="li-right">
                <span>33</span>
              </div>
            </li>
            <li>
              <div class="li-left">
                <star-icon :size="'16'"/>
                <span>Watch</span>
              </div>
              <div class="li-right">
                <span>33</span>
              </div>
            </li>
            <li>
              <div class="li-left">
                <eye-icon :size="'16'"/>
                <span>Watch</span>
              </div>
              <div class="li-right">
                <span>33</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="nav">
        <ul>
          <li @click="jump(locale.topicPublicPageNav[0].url)" :ref="locale.topicPublicPageNav[0].url">
            <code-icon :size="'16'"/>
            <span>{{locale.topicPublicPageNav[0].name}}</span>
          </li>
          <li @click="jump(locale.topicPublicPageNav[1].url)" :ref="locale.topicPublicPageNav[1].url">
            <twitch-icon size="16"/>
            <span>{{locale.topicPublicPageNav[1].name}}</span>
          </li>
          <li @click="jump(locale.topicPublicPageNav[2].url)" :ref="locale.topicPublicPageNav[2].url">
            <alert-circle-icon size="16"/>
            <span>{{locale.topicPublicPageNav[2].name}}</span>
          </li>
          <li @click="jump(locale.topicPublicPageNav[3].url)" :ref="locale.topicPublicPageNav[3].url">
            <git-branch-icon size="16"/>
            <span>{{locale.topicPublicPageNav[3].name}}</span>
          </li>
          <li @click="jump(locale.topicPublicPageNav[4].url)" :ref="locale.topicPublicPageNav[4].url">
            <award-icon size="16"/>
            <span>{{locale.topicPublicPageNav[4].name}}</span>
          </li>
          <li @click="jump(locale.topicPublicPageNav[5].url)" :ref="locale.topicPublicPageNav[5].url">
            <users-icon size="16"/>
            <span>{{locale.topicPublicPageNav[5].name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  AwardIcon,
  EyeIcon,
  BookOpenIcon,
  StarIcon,
  CodeIcon,
  TwitchIcon,
  AlertCircleIcon,
  GitBranchIcon,
  UsersIcon,
} from "vue-feather-icons"
export default {
  name: "HeaderComponent",
  components: {
    EyeIcon,
    BookOpenIcon,
    StarIcon,
    CodeIcon,
    TwitchIcon,
    AlertCircleIcon,
    GitBranchIcon,
    UsersIcon,
    AwardIcon,
  },
  data() {
    return {
      locale: this.$locale
    }
  },
  methods: {
    jump(web) {
      if (web === null || web === this.$route.path.split("/")[2]) return
      const id = this.$route.params.id
      this.$router.push(`/topic/${web}/${id}`)
      this.isActiveNav()
    },

    isActiveNav() {
      const curr = this.$route.path.split("/")[2]
      let flag = true
      this.locale.topicPublicPageNav.forEach(it=>{
        if (it.url === curr) {
          this.$refs[it.url].classList.add("is-active")
          flag = false
        }
      })

      if (flag) this.$refs.public.classList.add("is-active")
    }
  },
  mounted() {
    this.isActiveNav()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

li {
  &.o {
    background: orange;
  }

  &.h {
    background: $index-page-main-background-color-grey-7;
    color: $index-page-main-background-color-blue;
  }

  &.n {
    color: white;
    background: $index-page-main-background-color-green;
  }
}

.header-wrapper {
  width: 100%;
  .header {
    width: 100%;
    margin-bottom: 32px;
    padding-top: 16px;
    background: $index-page-main-background-color-grey;
    border-bottom: 1px solid $index-page-main-border-color-grey;

    .title {
      width: 100%;
      margin: 0 auto 16px;

      @media screen and (min-width: $middle) {
        padding: 0 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title-left {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          svg {
            margin-right: 4px;
          }

          span {
            margin-right: 4px;
          }
        }

        .title-middle {
          display: none;
        }

        .title-right {
          ul {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            li {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 14px;

              &:not(:last-child) {
                margin-right: 16px;
              }

              .li-left {
                padding: 3px 12px;
                border-bottom-left-radius: 6px;
                border-top-left-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                border-right: none;
                background: $index-page-main-background-color-grey;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                  margin-right: 4px;
                }

              }

              .li-right {
                padding: 3px 12px;
                border-bottom-right-radius: 6px;
                border-top-right-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }
            }
          }
        }
      }

      @media screen and (max-width: $middle) {
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .title-left {
          margin-bottom: 16px;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          svg {
            margin-right: 4px;
          }

          span {
            margin-right: 4px;
          }
        }

        .title-middle {
          text-align: start;
          width: 100%;
          margin-bottom: 16px;

          > p {
            margin-bottom: 16px;
          }

          > ul {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;

            li {
              padding: 0 10px;
              margin-right: 1.5px;
              margin-bottom: 4px;
              border-radius: 2em;
            }
          }
        }

        .title-right {
          width: 100%;

          ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            li {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 14px;
              width: 100%;

              &:not(:last-child) {
                margin-right: 16px;
              }

              .li-left {
                width: 100%;
                padding: 3px 12px;
                border-bottom-left-radius: 6px;
                border-top-left-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                border-right: none;
                background: $index-page-main-background-color-grey;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                  margin-right: 4px;
                }

              }

              .li-right {
                padding: 3px 12px;
                border-bottom-right-radius: 6px;
                border-top-right-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }
            }
          }
        }
      }

    }

    .nav {
      margin: 0 auto;

      @media screen and (min-width: $middle) {
        padding: 0 32px;

      }

      ul {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        li {
          padding: 8px 16px;
          border-bottom: 2px solid $index-page-main-background-color-grey;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $index-page-main-font-color-grey-3;
          transition: all .2s;

          &:hover {
            border-bottom: 2px solid $index-page-main-background-color-grey-5;
            cursor: pointer;
          }

          &.is-active {
            color: black;
            border-bottom: 2px solid $index-page-main-border-color-origin;
            font-weight: 600;
          }

          svg {
            margin-right: 4px;
          }
        }
      }
    }
  }
}

</style>