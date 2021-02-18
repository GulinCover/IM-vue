<template>
  <div class="create-topic-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="content">
        <div class="header">
          <h3>{{ locale.createTopicH3 }}</h3>
          <p>{{ locale.createTopicP }}</p>
        </div>

        <div class="info">
          <div class="title">
            <div class="title-left">
              <div>
                <p>{{ locale.owner }}</p>
                <div>
                  <div class="avatar"></div>
                  <p>Alex</p>
                </div>
              </div>
              <div></div>
            </div>
            <div class="title-right">
              <p>{{ locale.topicName }}</p>
              <input type="text">
            </div>
          </div>
          <div class="desc">
            <p v-html="locale.topicDesc"></p>
          </div>
          <div class="user-desc">
            <h3>{{ locale.description }}</h3>
            <input type="text">
          </div>
        </div>

        <div class="intro">
          <div>
            <div></div>
          </div>
          <div>
            <book-icon size="34"/>
          </div>
          <div>
            <h4>{{ locale.public }}</h4>
            <p>{{ locale.publicDesc }}</p>
          </div>
        </div>

        <div class="entry">
          <ul>
            <li>
              <div class="entry-avatar">#</div>
              <div class="middle">
                <h3>{{ locale.entryContent }}</h3>
                <p>{{ locale.entryContentDesc }}</p>
              </div>
              <div class="select-entry">
                <el-button class="el_button" type="text"
                           @click="dialogContentVisible = true">
                  {{ locale.selectEntry }}
                </el-button>
                <el-dialog class="el_dialog_show"
                           :visible.sync="dialogContentVisible"
                           width="30%"
                >
                  <h4>{{locale.selectDesc}}</h4>
                  <ul>
                    <li @click="selectContent(key)"
                        v-for="(item,key) in selectedContentEntry" :key="key">
                      <span>{{ item.name }}</span>
                      <span>{{ item.desc }}</span>
                    </li>
                  </ul>
                  <div class="show-entry">
                      <div @click="deleteContent(item.entryId)"
                            v-for="(item,key) in selectContentEntry" :key="key">
                        <el-tooltip class="item" effect="dark" content="点击删除" placement="bottom">
                          <span>{{ item.name }}</span>
                        </el-tooltip>
                      </div>
                  </div>
                </el-dialog>
              </div>
            </li>
            <li>
              <div class="entry-avatar">#</div>
              <div class="middle">
                <h3>{{ locale.entryRelated }}</h3>
                <p>{{ locale.entryRelatedDesc }}</p>
              </div>
              <div class="select-entry">
                <el-button class="el_button" type="text"
                           @click="dialogRelatedVisible = true">
                  {{ locale.selectEntry }}
                </el-button>

                <el-dialog class="el_dialog_show"
                    :visible.sync="dialogRelatedVisible"
                    width="30%"
                >
                  <h4>{{locale.selectDesc}}</h4>
                  <ul>
                    <li @click="selectRelated(key)"
                        v-for="(item,key) in selectedRelatedEntry" :key="key">
                      <span>{{ item.name }}</span>
                      <span>{{ item.desc }}</span>
                    </li>
                  </ul>
                  <div class="show-entry">
                    <div @click="deleteRelated(item.entryId)"
                         v-for="(item,key) in selectRelatedEntry" :key="key">
                      <el-tooltip class="item" effect="dark" content="点击删除" placement="bottom">
                        <span>{{ item.name }}</span>
                      </el-tooltip>
                    </div>

                  </div>
                </el-dialog>
              </div>
            </li>
            <p>
              <alert-circle-icon size="14"/>
              {{ locale.entryDesc }}
            </p>
          </ul>
        </div>

        <div class="button">
          {{ locale.createTopic }}
        </div>
      </div>
    </main>

    <footer>
      <bottom-component background-color="#fff"/>
    </footer>
  </div>
</template>

<script>
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import TopBar from "@/common/components/TopBarComponent";
import {AlertCircleIcon, BookIcon} from "vue-feather-icons"

export default {
  name: "Index",
  components: {
    TopBar,
    BottomComponent,
    AlertCircleIcon, BookIcon,
  },
  data() {
    return {
      locale: this.$locale,
      dialogContentVisible: false,
      dialogRelatedVisible: false,

      selectedContentEntry: [
        {
          entryId: "1",
          name: "1D",
          desc: "hello world"
        },
        {
          entryId: "2",
          name: "2D",
          desc: "hello worldhello worldhello worldhello worldhello worldhello world"
        },
        {
          entryId: "3",
          name: "3D",
          desc: "hello worldhello world"
        },
        {
          entryId: "4",
          name: "4D",
          desc: "hello worldhello world"
        },
        {
          entryId: "5",
          name: "5D",
          desc: "hello worldhello world"
        },
      ],
      selectContentEntry: [],

      selectedRelatedEntry: [
        {
          entryId: "1",
          name: "1D",
          desc: "hello world"
        },
        {
          entryId: "2",
          name: "2D",
          desc: "hello worldhello worldhello worldhello worldhello worldhello world"
        },
        {
          entryId: "3",
          name: "3D",
          desc: "hello worldhello world"
        },
        {
          entryId: "4",
          name: "4D",
          desc: "hello worldhello world"
        },
        {
          entryId: "5",
          name: "5D",
          desc: "hello worldhello world"
        },
      ],
      selectRelatedEntry: [],
    }
  },
  methods: {
    selectContent(index) {
      const ele = this.selectedContentEntry[index]
      for (let el of this.selectContentEntry) {
        if (el.entryId === ele.entryId)
          return
      }
      this.selectContentEntry.push(ele)
    },

    deleteContent(index) {
      for (var i = 0; i < this.selectContentEntry.length; ++i) {
        if (this.selectContentEntry[i].entryId.toString() === index.toString()) {
          this.selectContentEntry.splice(i, 1)
        }
      }
    },

    selectRelated(index) {
      const ele = this.selectedRelatedEntry[index]
      for (let el of this.selectRelatedEntry) {
        if (el.entryId === ele.entryId)
          return
      }
      this.selectRelatedEntry.push(ele)
    },

    deleteRelated(index) {
      for (var i = 0; i < this.selectRelatedEntry.length; ++i) {
        if (this.selectRelatedEntry[i].entryId.toString() === index.toString()) {
          this.selectRelatedEntry.splice(i, 1)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  margin: 40px auto;
  text-align: start;

  .content {
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .header {
      width: 100%;
      padding-bottom: 8px;
      margin-bottom: 32px;
      font-size: 14px;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      h3 {
        margin-bottom: 8px;
        font-size: 22px;
      }

      p {
        margin-bottom: 16px;
      }
    }

    .info {
      width: 100%;
      margin-top: 32px;
      padding-bottom: 16px;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      .title {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .title-left {
          margin-top: 4px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;

          > div:first-child {
            > p {
              margin-bottom: 6px;
              font-size: 14px;
            }

            > div {
              padding: 5px 16px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              border: 1px solid $index-page-main-border-color-grey;
              background-color: $index-page-main-background-color-grey;
              border-radius: 6px;

              .avatar {
                margin-right: 4px;
                width: 20px;
                height: 20px;
                clip-path: circle(40%);
                background-color: #2ea44f;
              }
            }
          }

          > div:last-child {
            width: 24px;
            height: 2px;
            background-color: $index-page-main-background-color-grey-4;
            transform: rotateZ(-60deg);
            margin-bottom: 16px;
          }
        }

        .title-right {
          margin-top: 4px;

          > p {
            margin-bottom: 6px;
            font-size: 14px;
          }

          input {
            width: 250px;
            padding: 8px 16px;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            background-color: $index-page-main-background-color-grey;

            &:focus {
              border-color: $index-page-main-middle-font-color-blue;
              box-shadow: $color-state-focus-shadow;
            }
          }
        }
      }

      .desc {
        margin: 8px 0;
        font-size: 14px;
      }

      .user-desc {
        width: 100%;
        margin: 16px 0 0;

        h3 {
          margin-bottom: 6px;
        }

        input {
          width: 100%;
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          background-color: $index-page-main-background-color-grey;

          &:focus {
            border-color: $index-page-main-middle-font-color-blue;
            box-shadow: $color-state-focus-shadow;
          }
        }

      }
    }

    .intro {
      width: 100%;
      border-bottom: 1px solid $index-page-main-border-color-grey;
      padding: 16px 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      > div {

        &:first-child {
          width: 13px;
          height: 13px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid $index-page-main-background-color-blue;
          border-radius: 50%;
          margin-right: 4px;
          margin-top: 4px;

          > div {
            width: 8px;
            height: 8px;
            clip-path: circle(40%);
            background-color: $index-page-main-background-color-blue;
          }
        }

        &:last-child {
          margin-left: 4px;

          h4 {
            margin-bottom: 4px;
            font-size: 16px;
            font-style: italic;
          }

          p {
            font-size: 14px;
          }
        }
      }
    }

    .entry {
      padding: 16px 0;
      width: 100%;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      > ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        > li {
          position: relative;
          width: 90%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 16px;
          margin: 4px 32px;
          border-bottom: 1px solid $index-page-main-border-color-grey;

          .entry-avatar {
            width: 48px;
            height: 48px;
            background-color: $index-page-main-background-color-grey-7;
            border-radius: 50%;
            font-size: 28px;
            text-align: center;
            line-height: 48px;
            margin-right: 16px;
          }

          .middle {
            h3 {
              margin-bottom: 4px;
              font-size: 16px;
            }

            p {
              font-size: 12px;
            }
          }

          .select-entry {
            .el_button {
              position: absolute;
              top: 0;
              right: 0;
              border: 1px solid $index-page-main-border-color-grey;
              padding: 5px 12px;
              border-radius: 6px;
              font-size: 14px;
              color: $index-page-main-right-font-color-black;

              &:hover {
                cursor: pointer;
                box-shadow: $color-shadow-medium;
              }
            }

            .el_dialog_show {
              h4 {
                margin-bottom: 4px;
              }

              ul {
                width: 100%;

                li {
                  display: flex;
                  justify-content: flex-start;
                  align-items: flex-end;
                  margin-bottom: 16px;

                  &:hover {
                    background: linear-gradient(to right, $index-page-main-background-color-grey-6, #fff);
                    cursor: pointer;
                  }

                  span {
                    &:first-child {
                      background-color: $index-page-main-background-color-grey-7;
                      margin-right: 4px;
                      font-size: 18px;
                      padding: 5px 12px;
                      border: 1px solid $index-page-main-border-color-grey;
                      border-radius: 6px;
                    }

                    &:last-child {
                      width: 60%;
                      border-bottom: 1px solid $index-page-main-border-color-grey;
                      font-size: 12px;
                    }
                  }
                }
              }

              .show-entry {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: flex-start;

                span {
                  margin-right: 4px;
                  margin-bottom: 4px;
                  border: 1px solid $index-page-main-border-color-grey;
                  background-color: $index-page-main-background-color-grey;
                  border-radius: 6px;
                  padding: 2px 8px;

                  &:hover {
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }

        p {
          width: 100%;
          margin-top: 16px;
          font-size: 14px;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          svg {
            margin-right: 4px;
          }
        }
      }
    }

    .button {
      margin-top: 15px;
      border-radius: 6px;
      background-color: $index-page-main-background-color-green;
      color: white;
      padding: 5px 16px;
      font-size: 14px;

      &:hover {
        cursor: pointer;
      }
    }

  }

}

footer {
  border-top: 1px solid $index-page-main-border-color-grey;
}

</style>