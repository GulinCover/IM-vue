<template>
  <div class="explore-wrapper">
    <header>
      <top-bar-component/>
    </header>

    <main>
      <nav-component
          :path-name="pathName"
      />

      <div class="content-wrapper">
        <div class="left">
          <div class="info-card">
            <div class="user-info">
              <div class="avatar">
                <user-icon :size="'64'"/>
              </div>
              <div class="name">
                <h3>{{ userData.username }}</h3>
                <p>{{ userData.uuid }}</p>
              </div>
            </div>
            <div class="follow-user-info">
              <a href="/user/manager?current=notify" target="_blank">{{ userData.topicReplyNumber }} 条著述回复</a>
            </div>
            <div class="comment-info">
              <a href="/user/manager?current=notify" target="_blank">{{ userData.commentReplyNumber }} 条评论回复</a>
            </div>
            <div class="comment-info">
              <a href="/user/manager?current=notify" target="_blank">{{ userData.talkReplyNumber }} 条评论回复</a>
            </div>
          </div>
        </div>

        <div class="middle">
          <h2>{{ locale.exploreTitle }}</h2>

          <div class="content">
            <div class="card-wrapper" v-for="(item,key) in entryData" :key="key">
              <div v-if="item.entryAvatar !== null" class="entry-background">
                <img :src="item.entryAvatar" alt="">
              </div>

              <div class="card-title">
                <div class="row1">
                  <p>{{ item.entryDesc }}</p>
                </div>
                <div class="row2">
                  <div>#</div>
                  <a :href="`/topic/entry/${item.entryId}`" target="_blank">{{ item.entryName }}</a>
                  <div>
                    <star-icon :size="'14'"/>
                    star
                  </div>
                </div>
              </div>

              <ul>
                <div v-for="(it, k) in topicsData" :key="k">
                  <li v-if="it.entryId.toString() === item.entryId.toString()">
                    <div class="topic-title">
                      <book-open-icon :size="'18'"/>
                      <h3>
                        <a :href="`/user/${it.userId}`" target="_blank">{{ it.topicUser }}</a>
                        /
                        <a :href="`/topic/public/${it.topicId}`" target="_blank">{{ it.topicTitle }}</a>
                      </h3>
                    </div>
                    <div class="topic-desc">{{ it.topicDesc }}</div>
                  </li>
                </div>
              </ul>

              <div class="more">
                <a :href="`/topic/entry/${item.entryId}`" target="_blank">{{ locale.moreHotTopic }}</a>
              </div>
            </div>

            <div class="official-card-wrapper">
              <div class="left" v-if="entryIntro.isLeft === '0'">
                <div class="picture">
                  <img :src="entryIntro.entryAvatar" alt="">
                </div>
                <div class="info">
                  <h3>{{ entryIntro.entryName }}</h3>
                  <div class="desc">{{ entryIntro.entryDesc }}</div>
                  <ul class="related-entry">
                    <li v-for="(item, key) in entryIntro.entryAbsList" :key="key">
                      <a :href="`/topic/entry/${item.entryId}`" target="_blank">{{ item.entryName }}</a>
                    </li>
                  </ul>
                  <div class="more">
                    <a :href="`/topic/entry/${entryIntro.entryId}`" target="_blank">{{ locale.moreTopic }}</a>
                    <chevron-right-icon :size="'16'"/>
                  </div>
                </div>
              </div>

              <div class="vertical" v-if="entryIntro.isLeft === '1'">
                <a :href="`/topic/entry/${entryIntro.entryId}`" target="_blank">
                  <div class="picture">
                    <img :src="entryIntro.entryAvatar" alt="">
                  </div>
                  <div class="title">
                    <h3>{{ entryIntro.entryName }}</h3>
                  </div>
                  <div class="desc">
                    {{ entryIntro.entryDesc }}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="hot" v-for="(item,key) in hotEntryData" :key="key">
            <div>
              <coffee-icon :size="'14'"/>
              <a :href="`/topic/entry/${item.entryId}`" target="_blank">
                <h3>{{ item.entryName }}</h3>
                <p>{{ item.entryDesc }}</p>
              </a>
            </div>
            <ul>
              <div v-for="(it, k) in hotTopcisData" :key="k">
                <li v-if="it.entryId.toString() === item.entryId.toString()">
                  <div>
                    <book-open-icon size="16"/>
                    <h3>
                      <a :href="`/user/${it.userId}`" target="_blank">{{ it.topicUser }}</a>/
                      <a :href="`/topic/public/${it.topicId}`" target="_blank">{{ it.topicTitle }}</a>
                    </h3>
                    <a>
                      <star-icon :size="'14'"/>
                      {{it.likeNumber}}
                    </a>
                  </div>
                  <p>{{ it.topicDesc }}</p>
                </li>
              </div>
            </ul>
            <a href="/hot" target="_blank">
              <p>{{ locale.moreHotTopic }}</p>
              <chevron-right-icon :size="'18'"/>
            </a>
          </div>
        </div>
      </div>

    </main>

    <footer>
      <bottom-component/>
    </footer>

  </div>
</template>

<script>
import TopBarComponent from "@/common/components/TopBarComponent"
import {UserIcon, BookOpenIcon, StarIcon, ChevronRightIcon, CoffeeIcon} from "vue-feather-icons"
import NavComponent from "@/common/components/explorePage/NavComponent";
import BottomComponent from "@/common/components/explorePage/BottomComponent";
import {HttpGet, HttpPost} from "@/http/indexPage";

export default {
  name: "Index",
  components: {
    BottomComponent,
    NavComponent,
    TopBarComponent,
    UserIcon,
    BookOpenIcon,
    StarIcon, ChevronRightIcon, CoffeeIcon
  },
  data() {
    return {
      locale: this.$locale,
      pathName: this.$route.name,

      userData: {},
      entryData: [],
      entryIds: [],
      topicsData: [],

      entryIntro: {},

      hotEntryData: [],
      hotEntryIds: [],

      hotTopcisData: []
    }
  },
  methods: {
    initData() {
      HttpPost("/api/post/select/userReplyData").then(ret => {
        let res = ret.data.code.split(" ")

        if (res[0] !== "200") {
          alert(res[1])
          return
        }
        this.userData = ret.data
      }).catch(e => {
        console.log(e)
      })

      HttpGet("/api/get/select/random/entryInfos").then(ret => {
        let res = ret.data.code.split(" ")

        if (res[0] !== "200") {
          alert(res[1])
          return
        }
        this.entryData = ret.data.entryAbsList
        ret.data.entryAbsList.forEach(it => {
          this.entryIds.push(it.entryId)
        })
        this.getTopicInfosByEntryIds()
      }).catch(e => {
        console.log(e)
      })
    },

    getTopicInfosByEntryIds() {
      HttpGet("/api/get/select/random/topicInfos/by/entryInfos", {entry_id_list: this.entryIds.toString()}).then(ret => {
        let res = ret.data.code.split(" ")

        if (res[0] !== "200") {
          alert(res[1])
          return
        }
        this.topicsData = ret.data.topicAbsList
      }).catch(e => {
        console.log(e)
      })
    },



    getRandomEntryInfoIntro() {
      if (Math.random() > .5) {
        HttpGet("/api/get/select/random/entryInfo").then(ret => {
          let res = ret.data.code.split(" ")

          if (res[0] !== "200") {
            alert(res[1])
            return
          }

          this.entryIntro = ret.data
        }).catch(e => {
          console.log(e)
        })
      } else {
        HttpGet("/api/get/select/random/entryInfo/and/related").then(ret => {
          let res = ret.data.code.split(" ")

          if (res[0] !== "200") {
            alert(res[1])
            return
          }

          this.entryIntro = ret.data
        }).catch(e => {
          console.log(e)
        })
      }
    },



    getTopicInfosByHotEntryIds() {
      HttpGet("/api/get/select/random/topicInfos/by/entryInfos", {entry_id_list: this.entryIds.toString()}).then(ret => {
        let res = ret.data.code.split(" ")

        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.hotTopcisData = ret.data.topicAbsList
      }).catch(e => {
        console.log(e)
      })
    },

    getRandomEntryTopicInfos() {
      HttpGet("/api/get/select/random/hot/entryInfos").then(ret => {
        let res = ret.data.code.split(" ")

        if (res[0] !== "200") {
          alert(res[1])
          return
        }
        this.hotEntryData = ret.data.entryAbsList
        ret.data.entryAbsList.forEach(it => {
          this.hotEntryIds.push(it.entryId)
        })
        this.getTopicInfosByHotEntryIds()
      }).catch(e => {
        console.log(e)
      })
    }
  },
  mounted() {
    this.initData()
    this.getRandomEntryInfoIntro()
    this.getRandomEntryTopicInfos()
  },
}
</script>

<style scoped lang="scss">
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  z-index: 1;

  .content-wrapper {
    background: $index-page-main-background-color-grey-2;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (min-width: $max) {
      .left {
        width: 25%;
        padding: 0 16px;
        margin-top: -40px;

        .info-card {
          border: 1px solid $index-page-main-border-color-grey-2;
          box-shadow: $index-page-main-middle-border-shadow;
          position: relative;
          background: white;
          z-index: 100;
          border-radius: 6px;

          .user-info {

            .avatar {
              border-radius: 50%;
              overflow: hidden;
              background: $index-page-main-border-color-grey-2;
              margin: 16px auto 0;
              width: 33%;
              padding-bottom: 33%;
              height: 0;
            }

            .name {
              width: 100%;
              padding: 16px;
            }
          }

          .follow-user-info, .comment-info {
            padding: 16px;
            border-top: 1px solid $index-page-main-border-color-grey-2;
            text-align: start;

            a:hover {
              text-decoration: underline;
            }
          }
        }


      }

      .middle {
        width: 50%;
        padding: 24px 16px;

        h2 {
          text-align: start;
          color: $index-page-main-font-color-grey-3;
        }

        .content .card-wrapper {
          margin: 24px 0;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey-2;
          overflow: hidden;

          .entry-background {
            border-bottom: 1px solid $index-page-main-border-color-grey-2;
            min-height: 48px;
            max-height: 128px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-position: center;
              object-fit: contain;
            }
          }

          .card-title {
            background: $index-page-main-background-color-grey;
            border-bottom: 1px solid $index-page-main-border-color-grey-2;

            .row1 {
              padding: 16px 16px 0;
              text-align: start;
              font-size: 12px;
              color: $index-page-main-font-color-grey-3;
            }

            .row2 {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px;

              div:nth-child(1) {
                height: 24px;
                min-width: 24px;
                border-radius: 6px;
                background: $index-page-main-background-color-blue-2;
                margin-right: 16px;
                border: 1px solid $index-page-main-border-color-grey-3;
                display: flex;
                justify-content: center;
                align-items: center;
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
              }

              a {
                width: 100%;
                text-align: start;
              }

              div:last-child {
                padding: 3px 12px;
                border-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey-2;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                  margin-right: 4px;
                }

                &:hover {
                  cursor: pointer;
                }
              }
            }
          }

          ul {
            padding: 16px;

            li {
              border-bottom: 1px solid $index-page-main-border-color-grey-2;
              margin-bottom: 16px;
              padding-bottom: 16px;

              .topic-title {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                svg {
                  margin-right: 8px;
                }

                h3 {
                  a:first-child {
                    color: $index-page-main-middle-font-color-blue-3;
                  }

                  a:hover {
                    text-decoration: underline;
                  }
                }
              }

              .topic-desc {
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
                text-align: start;
              }
            }

            li:last-child {
              border-bottom: 1px solid $index-page-main-border-color-grey-4;
            }
          }

          .more {
            height: 60px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -64px;

            a {
              border-radius: 6px;
              padding: 3px 12px;
              margin: 16px 0;
              border: 1px solid $index-page-main-border-color-grey-2;
              font-size: 12px;
              background: white;
              transition: all .2s;

              &:hover {
                color: white;
                background: $index-page-main-middle-font-color-blue;
              }
            }
          }
        }

        .content .official-card-wrapper {

          .left {
            margin: 24px 0;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            .picture {
              margin-right: 16px;
              width: 16%;
              height: 100%;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top left;
              }
            }

            .info {
              width: 84%;
              text-align: start;

              h3 {
                margin: 4px 0 8px;
              }

              .desc {
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
              }

              ul {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-wrap: wrap;

                li {
                  margin: 4px 1.5px;
                  padding: 0 10px;
                  border-radius: 6px;
                  background: $index-page-main-background-color-blue-2;

                  &:hover {
                    background: $index-page-main-background-color-blue-3;
                  }

                  a {
                    font-size: 12px;
                  }
                }
              }

              .more {
                margin: 8px 0 8px 8px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                a {
                  font-size: 12px;
                  margin-right: 16px;

                  &:hover {
                    text-decoration: underline;
                  }
                }

                svg {
                  color: $index-page-main-middle-font-color-blue-3;
                }
              }
            }
          }

          .vertical {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin: 40px 0;

            a {
              .picture {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                  width: 17%;
                  height: 17%;
                  object-fit: cover;
                  object-position: top left;
                }
              }

              .title {
                color: black;
                margin: 8px 8px;
              }

              .desc {
                margin-bottom: 10px;
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
              }

            }
          }
        }
      }

      .right {
        width: 25%;
        padding: 24px 16px;

        .hot {
          margin-bottom: 24px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;

          > div {
            border-top-right-radius: 6px;
            border-top-left-radius: 6px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 16px;
            background: $index-page-main-background-color-grey;
            border-bottom: 1px solid $index-page-main-border-color-grey;
            text-align: start;

            svg {
              position: relative;
              top: 4px;
            }

            > a {
              width: 80%;
              margin-left: 8px;
              line-height: 24px;
              font-size: 12px;

              &:hover {
                text-decoration: underline;
                cursor: pointer;
              }

              h3, p {
                width: 100%;
                color: $index-page-main-font-color-grey-3;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3; //需要控制的文本行数
                overflow: hidden;
              }

              h3 {
                font-size: 18px;
              }
            }
          }

          > ul {
            li {
              padding: 16px;
              border-bottom: 1px solid $index-page-main-border-color-grey;

              > div {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;

                svg {
                  margin-right: 4px;
                  margin-top: 4px;
                }

                h3 {
                  text-align: start;
                  width: 60%;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2; //需要控制的文本行数
                  overflow: hidden;

                  a {
                    margin-right: 4px;
                    font-size: 18px;
                    text-align: start;

                    &:first-child {
                      color: $index-page-main-middle-font-color-blue-3;
                    }

                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }

                > a {
                  font-size: 14px;
                  color: $index-page-main-font-color-grey-3;

                  &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                    color: $index-page-main-background-color-blue;
                  }
                }

              }

              > p {
                text-align: start;
                width: 70%;
                font-size: 12px;
                color: $index-page-main-font-color-grey-3;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; //需要控制的文本行数
                overflow: hidden;
              }
            }
          }

          > a {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 12px;
            padding: 16px;

            &:hover {
              text-decoration: underline;
            }

            p {
              margin-right: 16px;
            }
          }
        }
      }
    }

    @media screen and (max-width: $max) and (min-width: $middle) {
      padding: 0 40px;
      width: inherit;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      max-width: 1280px;

      .left {
        width: 100%;
        padding: 24px 16px 0;
        box-shadow: $index-page-main-middle-border-shadow;

        .info-card {
          border: 1px solid $index-page-main-border-color-grey-2;
          box-shadow: $index-page-main-middle-border-shadow;
          position: relative;
          background: white;
          z-index: 100;
          border-radius: 6px;

          .user-info {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .avatar {
              border-radius: 50%;
              overflow: hidden;
              background: $index-page-main-border-color-grey-2;
              width: 8.3%;
              padding-bottom: 8.3%;
              height: 0;
              margin: 8px;
              position: relative;

              svg {
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -25% 0 0 -25%;
                width: 50%;
                height: 50%;
              }
            }

            .name {
              text-align: start;
              width: 100%;
            }
          }

          .follow-user-info, .comment-info {
            padding: 16px;
            border-top: 1px solid $index-page-main-border-color-grey-2;
            text-align: start;

            a:hover {
              text-decoration: underline;
            }
          }
        }


      }

      .middle {
        flex: 2;
        padding: 24px 16px;

        h2 {
          text-align: start;
          color: $index-page-main-font-color-grey-3;
        }

        .content .card-wrapper {
          margin: 24px 0;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey-2;
          overflow: hidden;

          .entry-background {
            border-bottom: 1px solid $index-page-main-border-color-grey-2;
            min-height: 48px;
            max-height: 128px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-position: center;
              object-fit: contain;
            }
          }

          .card-title {
            background: $index-page-main-background-color-grey;
            border-bottom: 1px solid $index-page-main-border-color-grey-2;

            .row1 {
              padding: 16px 16px 0;
              text-align: start;
              font-size: 12px;
              color: $index-page-main-font-color-grey-3;
            }

            .row2 {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px;

              div:nth-child(1) {
                height: 24px;
                min-width: 24px;
                border-radius: 6px;
                background: $index-page-main-background-color-blue-2;
                margin-right: 16px;
                border: 1px solid $index-page-main-border-color-grey-3;
                display: flex;
                justify-content: center;
                align-items: center;
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
              }

              a {
                width: 100%;
                text-align: start;
              }

              div:last-child {
                padding: 3px 12px;
                border-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey-2;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                  margin-right: 4px;
                }

                &:hover {
                  cursor: pointer;
                }
              }
            }
          }

          ul {
            padding: 16px;

            li {
              border-bottom: 1px solid $index-page-main-border-color-grey-2;
              margin-bottom: 16px;
              padding-bottom: 16px;

              .topic-title {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                svg {
                  margin-right: 8px;
                }

                h3 {
                  a:first-child {
                    color: $index-page-main-middle-font-color-blue-3;
                  }

                  a:hover {
                    text-decoration: underline;
                  }
                }
              }

              .topic-desc {
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
                text-align: start;
              }
            }

            li:last-child {
              border-bottom: 1px solid $index-page-main-border-color-grey-4;
            }
          }

          .more {
            height: 60px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -64px;

            a {
              border-radius: 6px;
              padding: 3px 12px;
              margin: 16px 0;
              border: 1px solid $index-page-main-border-color-grey-2;
              font-size: 12px;
              background: white;
              transition: all .2s;

              &:hover {
                color: white;
                background: $index-page-main-middle-font-color-blue;
              }
            }
          }
        }

        .content .official-card-wrapper {

          .left {
            margin: 24px 0;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            .picture {
              margin-right: 16px;
              width: 16%;
              height: 100%;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top left;
              }
            }

            .info {
              width: 84%;
              text-align: start;

              h3 {
                margin: 4px 0 8px;
              }

              .desc {
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
              }

              ul {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-wrap: wrap;

                li {
                  margin: 4px 1.5px;
                  padding: 0 10px;
                  border-radius: 6px;
                  background: $index-page-main-background-color-blue-2;

                  &:hover {
                    background: $index-page-main-background-color-blue-3;
                  }

                  a {
                    font-size: 12px;
                  }
                }
              }

              .more {
                margin: 8px 0 8px 8px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                a {
                  font-size: 12px;
                  margin-right: 16px;

                  &:hover {
                    text-decoration: underline;
                  }
                }

                svg {
                  color: $index-page-main-middle-font-color-blue-3;
                }
              }
            }
          }

          .vertical {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin: 40px 0;

            a {
              .picture {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                  width: 17%;
                  height: 17%;
                  object-fit: cover;
                  object-position: top left;
                }
              }

              .title {
                color: black;
                margin: 8px 8px;
              }

              .desc {
                margin-bottom: 10px;
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
              }

            }
          }
        }
      }

      .right {
        flex: 1;
        padding: 24px 16px;

        > div {
          margin-bottom: 24px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;

          > div {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 16px;
            background: $index-page-main-background-color-grey;
            border-bottom: 1px solid $index-page-main-border-color-grey;
            text-align: start;

            svg {
              position: relative;
              top: 4px;
            }

            > a {
              width: auto;
              margin-left: 8px;
              line-height: 24px;
              font-size: 12px;

              &:hover {
                text-decoration: underline;
                cursor: pointer;
              }

              h3, p {
                width: 100%;
                color: $index-page-main-font-color-grey-3;
              }

              h3 {
                font-size: 18px;
              }
            }
          }

          > ul {
            li {
              padding: 16px;
              border-bottom: 1px solid $index-page-main-border-color-grey;

              > div {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;

                svg {
                  margin-right: 4px;
                }

                h3 {
                  text-align: start;

                  a {
                    margin-right: 4px;
                    font-size: 18px;
                    text-align: start;

                    &:first-child {
                      color: $index-page-main-middle-font-color-blue-3;
                    }

                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }

                > a {
                  font-size: 14px;
                  color: $index-page-main-font-color-grey-3;

                  &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                    color: $index-page-main-background-color-blue;
                  }
                }

              }

              > p {
                text-align: start;
                font-size: 12px;
                color: $index-page-main-font-color-grey-3;
              }
            }
          }

          > a {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 12px;
            padding: 16px;

            &:hover {
              text-decoration: underline;
            }

            p {
              margin-right: 16px;
            }
          }
        }
      }
    }

    @media screen and (max-width: $min) {
      padding: 0 40px;
      width: inherit;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      max-width: 1280px;

      .left {
        width: 100%;
        margin-top: 24px;
        box-shadow: $index-page-main-middle-border-shadow;
        z-index: 1;

        .info-card {
          border: 1px solid $index-page-main-border-color-grey-2;
          box-shadow: $index-page-main-middle-border-shadow;
          position: relative;
          background: white;
          z-index: 100;
          border-radius: 6px;

          .user-info {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .avatar {
              border-radius: 50%;
              overflow: hidden;
              background: $index-page-main-border-color-grey-2;
              width: 15%;
              padding-bottom: 12%;
              height: 0;
              margin: 16px;
              position: relative;

              //svg {
              //  position: absolute;
              //  left: 50%;
              //  top: 50%;
              //  margin: -25% 0 0 -25%;
              //  width: 50%;
              //  height: 50%;
              //}
            }

            .name {
              text-align: start;
              width: 100%;
            }
          }

          .follow-user-info, .comment-info {
            padding: 16px;
            border-top: 1px solid $index-page-main-border-color-grey-2;
            text-align: start;

            a:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .middle {
        flex: 2;
        padding-top: 24px;

        h2 {
          text-align: start;
          color: $index-page-main-font-color-grey-3;
        }

        .content .card-wrapper {
          margin: 24px 0;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey-2;
          overflow: hidden;

          .entry-background {
            border-bottom: 1px solid $index-page-main-border-color-grey-2;
            min-height: 48px;
            max-height: 128px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-position: center;
              object-fit: contain;
            }
          }

          .card-title {
            background: $index-page-main-background-color-grey;
            border-bottom: 1px solid $index-page-main-border-color-grey-2;

            .row1 {
              padding: 16px 16px 0;
              text-align: start;
              font-size: 12px;
              color: $index-page-main-font-color-grey-3;
            }

            .row2 {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px;

              div:nth-child(1) {
                height: 24px;
                min-width: 24px;
                border-radius: 6px;
                background: $index-page-main-background-color-blue-2;
                margin-right: 16px;
                border: 1px solid $index-page-main-border-color-grey-3;
                display: flex;
                justify-content: center;
                align-items: center;
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
              }

              a {
                width: 100%;
                text-align: start;
              }

              div:last-child {
                padding: 3px 12px;
                border-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey-2;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                  margin-right: 4px;
                }

                &:hover {
                  cursor: pointer;
                }
              }
            }
          }

          ul {
            padding: 16px;

            li {
              border-bottom: 1px solid $index-page-main-border-color-grey-2;
              margin-bottom: 16px;
              padding-bottom: 16px;

              .topic-title {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                svg {
                  margin-right: 8px;
                }

                h3 {
                  a:first-child {
                    color: $index-page-main-middle-font-color-blue-3;
                  }

                  a:hover {
                    text-decoration: underline;
                  }
                }
              }

              .topic-desc {
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
                text-align: start;
              }
            }

            li:last-child {
              border-bottom: 1px solid $index-page-main-border-color-grey-4;
            }
          }

          .more {
            height: 60px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -64px;

            a {
              border-radius: 6px;
              padding: 3px 12px;
              margin: 16px 0;
              border: 1px solid $index-page-main-border-color-grey-2;
              font-size: 12px;
              background: white;
              transition: all .2s;

              &:hover {
                color: white;
                background: $index-page-main-middle-font-color-blue;
              }
            }
          }
        }

        .content .official-card-wrapper {

          .left {
            margin: 24px 0;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            .picture {
              margin-right: 16px;
              width: 16%;
              height: 100%;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top left;
              }
            }

            .info {
              width: 84%;
              text-align: start;

              h3 {
                margin: 4px 0 8px;
              }

              .desc {
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
              }

              ul {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-wrap: wrap;

                li {
                  margin: 4px 1.5px;
                  padding: 0 10px;
                  border-radius: 6px;
                  background: $index-page-main-background-color-blue-2;

                  &:hover {
                    background: $index-page-main-background-color-blue-3;
                  }

                  a {
                    font-size: 12px;
                  }
                }
              }

              .more {
                margin: 8px 0 8px 8px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                a {
                  font-size: 12px;
                  margin-right: 16px;

                  &:hover {
                    text-decoration: underline;
                  }
                }

                svg {
                  color: $index-page-main-middle-font-color-blue-3;
                }
              }
            }
          }

          .vertical {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin: 40px 0;

            a {
              .picture {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                  width: 17%;
                  height: 17%;
                  object-fit: cover;
                  object-position: top left;
                }
              }

              .title {
                color: black;
                margin: 8px 8px;
              }

              .desc {
                margin-bottom: 10px;
                color: $index-page-main-font-color-grey-3;
                font-size: 12px;
              }

            }
          }
        }
      }

      .right {
        display: none;
      }
    }

  }
}
</style>













