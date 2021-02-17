<template>
  <div class="explore-wrapper">
    <header>
      <top-bar-component/>
    </header>

    <main>
      <nav-component
          :locale="locale"
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
                <h3>{{ userData.name }}</h3>
                <p>{{ userData.uuid }}</p>
              </div>
            </div>
            <div class="follow-user-info">
              <a href="">0 条著述回复</a>
            </div>
            <div class="comment-info">
              <a href="">0 条评论回复</a>
            </div>
          </div>
        </div>

        <div class="middle">
          <h2>{{ locale.exploreTitle }}</h2>

          <div class="content">
            <div class="card-wrapper">
              <div v-if="topicData.picture !== null" class="entry-background">
                <img :src="topicData.picture" alt="">
              </div>

              <div class="card-title">
                <div class="row1">
                  <p>{{ hotTopicData.entryDesc }}</p>
                </div>
                <div class="row2">
                  <div>#</div>
                  <a href="">{{ hotTopicData.entry }}</a>
                  <div>
                    <star-icon :size="'14'"/>
                    star
                  </div>
                </div>
              </div>
              <ul>
                <li v-for="(item, key) in hotTopicData.content" :key="key">
                  <div class="topic-title">
                    <book-open-icon :size="'18'"/>
                    <h3>
                      <a href="">{{ item.username }}</a>
                      /
                      <a href="">{{ item.topicTitle }}</a>
                    </h3>
                  </div>
                  <div class="topic-desc">{{ item.desc }}</div>
                </li>
              </ul>
              <div class="more">
                <a :href="hotTopicData.more">{{ locale.moreHotTopic }}</a>
              </div>
            </div>

            <div class="card-wrapper">
              <div class="card-title">
                <div class="row1">
                  <p>{{ topicData.entryDesc }}</p>
                </div>
                <div class="row2">
                  <div>#</div>
                  <a href="">{{ topicData.entry }}</a>
                  <div>
                    <star-icon :size="'14'"/>
                    star
                  </div>
                </div>
              </div>
              <ul>
                <li v-for="(item, key) in topicData.content" :key="key">
                  <div class="topic-title">
                    <book-open-icon :size="'18'"/>
                    <h3>
                      <a href="">{{ item.username }}</a>
                      /
                      <a href="">{{ item.topicTitle }}</a>
                    </h3>
                  </div>
                  <div class="topic-desc">{{ item.desc }}</div>
                </li>
              </ul>
              <div class="more">
                <a :href="hotTopicData.more">{{ locale.moreHotTopic }}</a>
              </div>
            </div>

            <div class="official-card-wrapper">
              <div class="left" v-if="officialData.isLeft === '0'">
                <div class="picture">
                  <img :src="officialData.entryPicture" alt="">
                </div>
                <div class="info">
                  <h3>{{ officialData.entry }}</h3>
                  <div class="desc">{{ officialData.entryDesc }}</div>
                  <ul class="related-entry">
                    <li v-for="(item, key) in officialData.relatedEntries" :key="key">
                      <a href="">{{ item.entry }}</a>
                    </li>
                  </ul>
                  <div class="more">
                    <a :href="officialData.more">{{ locale.moreTopic }}</a>
                    <chevron-right-icon :size="'16'"/>
                  </div>
                </div>
              </div>

              <div class="vertical" v-if="officialDatas.isLeft === '1'">
                <a :href="officialDatas.more">
                  <div class="picture">
                    <img :src="officialDatas.entryPicture" alt="">
                  </div>
                  <div class="title">
                    <h3>{{ officialDatas.entry }}</h3>
                  </div>
                  <div class="desc">
                    {{ officialDatas.entryDesc }}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="hot">
            <div>
              <coffee-icon :size="'14'"/>
              <a>
                <h3>{{ hotTopcis.entry }}</h3>
                <p>{{ hotTopcis.entryDesc }}</p>
              </a>
            </div>
            <ul>
              <li v-for="(item, key) in hotTopcis.content" :key="key">
                <div>
                  <book-open-icon/>
                  <h3>
                    <a href="">{{ item.username }}</a>/
                    <a href="">{{ item.topicTitle }}</a>
                  </h3>
                  <a>
                    <star-icon :size="'14'"/>
                    1.5k
                  </a>
                </div>
                <p>{{ item.topicDesc }}</p>
              </li>
            </ul>
            <a href="">
              <p>{{ locale.moreHotTopic }}</p>
              <chevron-right-icon :size="'18'"/>
            </a>
          </div>

          <div class="topic">
            <div>
              <coffee-icon :size="'14'"/>
              <a>
                <h3>{{ hotTopcis.entry }}</h3>
                <p>{{ hotTopcis.entryDesc }}</p>
              </a>
            </div>
            <ul>
              <li v-for="(item, key) in hotTopcis.content" :key="key">
                <div>
                  <book-open-icon/>
                  <h3>
                    <a href="">{{ item.username }}</a>/
                    <a href="">{{ item.topicTitle }}</a>
                  </h3>
                  <a>
                    <star-icon :size="'14'"/>
                    1.5k
                  </a>
                </div>
                <p>{{ item.topicDesc }}</p>
              </li>
            </ul>
            <a href="">
              <p>{{ locale.moreHotTopic }}</p>
              <chevron-right-icon :size="'18'"/>
            </a>
          </div>
        </div>
      </div>

    </main>

    <footer>
      <bottom-component
          :bottom-data="bottomData"
          :locale="locale"
      />
    </footer>

  </div>
</template>

<script>
import TopBarComponent from "@/common/components/TopBarComponent"
import {UserIcon, BookOpenIcon, StarIcon, ChevronRightIcon, CoffeeIcon} from "vue-feather-icons"
import NavComponent from "@/common/components/explorePage/NavComponent";
import BottomComponent from "@/common/components/explorePage/BottomComponent";

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

      userData: {
        name: 'alex',
        uuid: "123",
      },

      bottomData: {
        first: {
          left: {
            name: 'GitHub',
            h3: "请支持GitHub",
            p: "感谢GitHub的技术支持",
            url: "https://github.com",
          },
          right: [],
        },
        second: [
          {
            name: "@2021GitHub,Inc,",
            url: '',
          },
          {
            name: "Terms",
            url: '',
          },
          {
            name: "Policy",
            url: '',
          },
          {
            name: "What is WeekType?",
            url: '',
          },
        ],
      },

      hotTopicData: {
        entryDesc: "this is a entry desc",
        entryId: '1',
        entry: "图形",
        more: "",
        content: [
          {
            userId: "1",
            username: "alex",
            topicId: "1",
            topicTitle: "this is a title",
            desc: "this is a topic desc"
          },
          {
            userId: "1",
            username: "alex",
            topicId: "1",
            topicTitle: "this is a title",
            desc: "this is a topic desc"
          },
          {
            userId: "1",
            username: "alex",
            topicId: "1",
            topicTitle: "this is a title",
            desc: "this is a topic desc"
          },
          {
            userId: "1",
            username: "alex",
            topicId: "1",
            topicTitle: "this is a title",
            desc: "this is a topic desc"
          },
        ]
      },

      topicData: {
        entryDesc: "this is a entry desc",
        picture: "",
        entryId: '1',
        entry: "图形",
        more: "",
        content: [
          {
            userId: "1",
            username: "alex",
            topicId: "1",
            topicTitle: "this is a title",
            desc: "this is a topic desc"
          },
          {
            userId: "1",
            username: "alex",
            topicId: "1",
            topicTitle: "this is a title",
            desc: "this is a topic desc"
          },
          {
            userId: "1",
            username: "alex",
            topicId: "1",
            topicTitle: "this is a title",
            desc: "this is a topic desc"
          },
          {
            userId: "1",
            username: "alex",
            topicId: "1",
            topicTitle: "this is a title",
            desc: "this is a topic desc"
          },
        ]
      },

      officialData: {
        more: "",
        isLeft: "0",
        entryId: "1",
        entry: "预测",
        entryPicture: "",
        entryDesc: "this is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry desc",
        relatedEntries: [
          {
            entryId: "2",
            entry: "推理",
          },
          {
            entryId: "2",
            entry: "推dsadas理",
          },
          {
            entryId: "2",
            entry: "推理",
          },
          {
            entryId: "2",
            entry: "推dsafasfasfa理",
          },
          {
            entryId: "2",
            entry: "推理",
          },
          {
            entryId: "2",
            entry: "推理",
          },
          {
            entryId: "2",
            entry: "推理ffa",
          },
          {
            entryId: "2",
            entry: "推理",
          },
          {
            entryId: "2",
            entry: "推fasfas理",
          },
          {
            entryId: "2",
            entry: "推理fsafasfasfgsa",
          },
          {
            entryId: "2",
            entry: "推理",
          },
          {
            entryId: "2",
            entry: "推理",
          },
          {
            entryId: "2",
            entry: "推adsasa理",
          },
          {
            entryId: "2",
            entry: "推理",
          },
          {
            entryId: "2",
            entry: "dasdas推理",
          },
          {
            entryId: "2",
            entry: "推理dsa",
          },
          {
            entryId: "2",
            entry: "推理",
          },
        ],
      },
      officialDatas: {
        more: "",
        isLeft: "1",
        entryId: "1",
        entry: "预测",
        entryPicture: "",
        entryDesc: "this is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry desc",
      },

      hotTopcis: {
        entryId: "1",
        entry: "测试",
        entryDesc: "this is a entry desc",
        content: [
          {
            topicId: "1",
            topicTitle: "this is a topic title",
            topicDesc: "this is a topic desc",
            userId: "1",
            username: "alex",
          },
          {
            topicId: "1",
            topicTitle: "this is a topic title",
            topicDesc: "this is a topic desc",
            userId: "1",
            username: "alex",
          },
          {
            topicId: "1",
            topicTitle: "this is a topic title",
            topicDesc: "this is a topic desc",
            userId: "1",
            username: "alex",
          },
          {
            topicId: "1",
            topicTitle: "this is a topic title",
            topicDesc: "this is a topic desc",
            userId: "1",
            username: "alex",
          },
        ]
      },
      topics: {}
    }
  },
  methods: {

  },
  mounted() {
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













