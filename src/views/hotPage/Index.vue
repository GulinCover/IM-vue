<template>
  <div class="index-hot-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <nav-component
          :path-name="this.$route.name"
      />

      <div class="hot-desc">
        <h2>{{ locale.hotPageH2 }}</h2>
        <p>{{ locale.hotPageDesc }}</p>
      </div>

      <div class="hot-content">
        <div>
          <div class="header">
            <div class="hot-topic-switch">
              <div class="topic-hot" :class="{'is-active':isTrue}">{{ locale.hotPageHot }}</div>
              <div @click="()=>this.$router.push('/topic')" class="topic-hot" :class="{'is-active':!isTrue}">
                {{ locale.hotPageTopic }}
              </div>
            </div>
            <div class="button">
              <div class="event-related">
                <el-input v-model="searchValue" placeholder="请输入内容"></el-input>
              </div>
              <div @click="showEntryOptions" class="entry-related">
                {{ locale.hotPageEntryRelatedButton }}:
                {{ entryValue === "" ? "Any" : entryValue }}
                <div class="show-entry-option"
                     :class="{'is-active':hotEntrySearch}"
                     @click="showEntryOptions"
                >
                  <div>
                    <p>{{ locale.searchHotEntryRelated }}</p>
                    <input type="text" v-model="hotEntrySearchContent">
                  </div>
                  <ul>
                    <li v-for="(item, key) in entryRelatedOptions" :key="key"
                        @click="selectHotEntry(item)"
                    >
                      {{ item.entryName }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="date-related">
                <el-select v-model="timeValue" :placeholder="locale.hotPageTimeRelatedButton">
                  <el-option
                      v-for="item in timeRelatedOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div @click="search" class="ok-button">
                {{locale.ok}}
              </div>
            </div>
          </div>

          <div class="content">
            <ul>
              <li v-for="(item,key) in hotTopicData" :key="key">
                <div class="left">
                  <div>
                    <book-open-icon :size="'12'"/>
                    <a :href="`/user/${item.userId}`" target="_blank">{{ item.userName }}</a>/
                    <a :href="`/topic/public/${item.topicId}`" target="_blank">{{ item.topicTitle }}</a>
                  </div>
                  <p>{{ item.topicDesc }}</p>
                  <div>
                    <div>
                      <div v-for="(it,k) in item.entryAbsList" :key="k">
                        <span></span>
                        {{ it.entryName }}
                      </div>
                      <div>
                        <star-icon :size="'12'"/>
                        {{ item.likeNumber }}
                      </div>
                      <div>
                        <share-2-icon :size="'12'"/>
                        {{ item.managerNumber }}
                      </div>
                      <div>
                        Built By
                        <a :href="`/user/${item.userId}`" target="_blank">{{ item.userName }}</a>
                      </div>
                    </div>

                    <div>
                      <activity-icon :size="'15'"/>
                      发布于{{ item.publicTime }}
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div>
                    <star-icon :size="'15'"/>
                    Star
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </main>

    <footer>
      <bottom-component/>
      <div class="backdrop"></div>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import NavComponent from "@/common/components/topicPage/NavComponent";
import BottomComponent from "@/common/components/explorePage/BottomComponent";
import {ActivityIcon, BookOpenIcon, StarIcon, Share2Icon} from "vue-feather-icons"
import {HttpGet} from "@/http/indexPage";

export default {
  name: "Index",
  components: {
    BottomComponent,
    NavComponent,
    TopBar,
    ActivityIcon, BookOpenIcon, StarIcon, Share2Icon
  },
  data() {
    return {
      locale: this.$locale,

      hotTopicData: [],

      searchValue: "",
      entryValue: "",
      hotEntrySearchContent:"",
      entryRelatedOptions: [],
      entryRelatedOptionsBak: [],
      timeValue: "",
      timeRelatedOptions: [
        {
          value: "today",
          label: "今天"
        },
        {
          value: "week",
          label: "这周"
        },
        {
          value: "mouth",
          label: "这月"
        }
      ],
      isTrue: true,
      hotEntrySearch: false,
    }
  },
  methods: {
    showEntryOptions() {
      this.hotEntrySearch = !this.hotEntrySearch
    },

    hideEntryOptions() {
      this.hotEntrySearch = false
    },

    selectHotEntry(entry) {
      this.entryValue = entry.entryName
      this.hideEntryOptions()
    },

    search() {
      HttpGet(`/api/get/select/search/hot/entry/topics?page=0&blurry=${this.searchValue}&entry=${this.entryValue}&time=${this.timeValue}`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.hotTopicData = ret.data.topicInfoAbsList
      }).catch(e => console.log(e))
    },

    initData() {
      HttpGet(`/api/get/select/all/hotTopicInfos?page=0`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.hotTopicData = ret.data.topicInfoAbsList
        console.log(ret.data)
      }).catch(e => console.log(e))
    },

    getHotEntryOptions() {
      HttpGet("/api/get/select/all/hot/entry").then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.entryRelatedOptions = ret.data.entryAbsList
        this.entryRelatedOptionsBak = ret.data.entryAbsList
        console.log(ret.data)
      }).catch(e => console.log(e))
    }
  },
  mounted() {
    this.initData()
    this.getHotEntryOptions()
  },
  watch: {
    hotEntryInputContent(newVal) {
      if (newVal === "") {
        this.entryRelatedOptions = this.entryRelatedOptionsBak
        return
      }
      let newEntryOptions = []
      let reg = RegExp(".*"+newVal+".*","i")
      this.entryRelatedOptionsBak.forEach(it=>{
        if (reg.test(it.entryName.toString())) {
          newEntryOptions.push(it)
        }
      })

      this.entryRelatedOptions = newEntryOptions
    }
  },
  computed: {
    hotEntryInputContent() {
      return this.hotEntrySearchContent
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  .hot-desc {
    margin: 0 auto;
    padding: 40px 16px;
    background: $index-page-main-background-color-grey;
    line-height: 1.5;
    border-bottom: 1px solid $index-page-main-border-color-grey;

    h2 {
      font-size: 40px;
    }

    p {
      margin: 0 auto 10px;
      font-size: 14px;
    }
  }

  .hot-content {
    margin: 0 auto;
    max-width: 1012px;
    @media screen and (min-width: $middle) {
      padding: 40px 16px 0;
    }

    @media screen and (max-width: $middle) {
      padding: 40px 40px 0;
    }

    > div {
      border: 1px solid $index-page-main-border-color-grey;
      overflow: hidden;
      border-radius: 6px;

      .header {
        @media screen and (min-width: $middle) {
          padding: 16px;
          background: $index-page-main-background-color-grey;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .hot-topic-switch {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .topic-hot {
              padding: 5px 16px;
              width: 128px;

              &:first-child {
                border-bottom-left-radius: 6px;
                border-top-left-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                border-right: none;
              }

              &:last-child {
                border-bottom-right-radius: 6px;
                border-top-right-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }

              &:hover {
                cursor: pointer;
              }

              &.is-active {
                background: $index-page-main-background-color-blue;
                color: white;
                border-color: $index-page-main-background-color-blue;
              }
            }


          }

          .button {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .entry-related {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              position: relative;
              margin: 0 12px;

              .show-entry-option {
                position: absolute;
                visibility: hidden;
                opacity: 0;
                z-index: 22;
                width: 240px;
                top: 22px;
                right: 0;
                transition: all .2s;

                &.is-active {
                  visibility: visible;
                  opacity: 1;
                }

                > div {
                  border: $border;
                  border-top-left-radius: 6px;
                  border-top-right-radius: 6px;
                  padding: 16px;
                  background: $index-page-main-background-color-grey;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;

                  p {
                    text-align: start;
                    font-size: 12px;
                    margin-bottom: 4px;
                  }

                  input {
                    padding: 5px 12px;
                    background: $index-page-main-background-color-grey;
                    border: $border;
                    border-radius: 6px;

                    &:focus {
                      box-shadow: $color-state-focus-shadow;
                    }
                  }
                }

                ul {
                  max-height: 360px;
                  overflow: scroll;
                  overflow-x: hidden;
                  border-bottom-left-radius: 6px;
                  border-bottom-right-radius: 6px;
                  border-bottom: $border;

                  li {
                    text-align: start;
                    padding: 5px 16px;
                    background: white;
                    border: $border;
                    border-top: none;

                    &:hover {
                      cursor: pointer;
                      background: $index-page-main-background-color-grey;
                    }
                  }
                }
              }

              &:hover {
                cursor: pointer;
              }

              &:after {
                content: "";
                margin-left: 4px;
                margin-top: 12px;
                display: inline-block;
                width: 12px;
                height: 12px;
                background: black;
                clip-path: polygon(0 0, 100% 0, 50% 50%);
              }
            }

            .ok-button {
              border: $border;
              border-radius: 3px;
              padding: 3px;
              margin-left: 8px;
              transition: all .2s;

              &:hover {
                cursor: pointer;
                background: white;
                box-shadow: $color-shadow-medium;
              }
            }
          }
        }

        @media screen and (max-width: $middle) and (min-width: $mini) {
          padding: 16px;
          background: $index-page-main-background-color-grey;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: center;

          .hot-topic-switch {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .topic-hot {
              padding: 5px 16px;
              width: 128px;

              &:hover {
                cursor: pointer;
              }

              &:first-child {
                border-bottom-left-radius: 6px;
                border-top-left-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                border-right: none;
              }

              &:last-child {
                border-bottom-right-radius: 6px;
                border-top-right-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }

              &.is-active {
                background: $index-page-main-background-color-blue;
                color: white;
                border-color: $index-page-main-background-color-blue;
              }
            }


          }

          .button {
            margin-top: 16px;
            margin-left: -8px;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .entry-related {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              position: relative;
              margin: 0 12px;

              .show-entry-option {
                position: absolute;
                visibility: hidden;
                opacity: 0;
                z-index: 22;
                width: 240px;
                top: 22px;
                right: 0;
                transition: all .2s;

                &.is-active {
                  visibility: visible;
                  opacity: 1;
                }

                > div {
                  border: $border;
                  border-top-left-radius: 6px;
                  border-top-right-radius: 6px;
                  padding: 16px;
                  background: $index-page-main-background-color-grey;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;

                  p {
                    text-align: start;
                    font-size: 12px;
                    margin-bottom: 4px;
                  }

                  input {
                    padding: 5px 12px;
                    background: $index-page-main-background-color-grey;
                    border: $border;
                    border-radius: 6px;

                    &:focus {
                      box-shadow: $color-state-focus-shadow;
                    }
                  }
                }

                ul {
                  max-height: 360px;
                  overflow: scroll;
                  overflow-x: hidden;
                  border-bottom-left-radius: 6px;
                  border-bottom-right-radius: 6px;
                  border-bottom: $border;

                  li {
                    text-align: start;
                    padding: 5px 16px;
                    background: white;
                    border: $border;
                    border-top: none;

                    &:hover {
                      cursor: pointer;
                      background: $index-page-main-background-color-grey;
                    }
                  }
                }
              }

              &:hover {
                cursor: pointer;
              }

              &:after {
                content: "";
                margin-left: 4px;
                margin-top: 12px;
                display: inline-block;
                width: 12px;
                height: 12px;
                background: black;
                clip-path: polygon(0 0, 100% 0, 50% 50%);
              }
            }

            .ok-button {
              border: $border;
              border-radius: 3px;
              padding: 3px;
              margin-left: 8px;
              transition: all .2s;

              &:hover {
                cursor: pointer;
                background: white;
                box-shadow: $color-shadow-medium;
              }
            }
          }
        }

        @media screen and (max-width: $mini) {
          padding: 16px;
          background: $index-page-main-background-color-grey;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: center;

          .hot-topic-switch {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .topic-hot {
              padding: 5px 16px;
              width: 128px;

              &:hover {
                cursor: pointer;
              }

              &:first-child {
                border-bottom-left-radius: 6px;
                border-top-left-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                border-right: none;
              }

              &:last-child {
                border-bottom-right-radius: 6px;
                border-top-right-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
              }

              &.is-active {
                background: $index-page-main-background-color-blue;
                color: white;
                border-color: $index-page-main-background-color-blue;
              }
            }


          }

          .button {
            margin-top: 16px;
            margin-left: -8px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

            .entry-related {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              position: relative;
              margin: 12px 0;

              .show-entry-option {
                position: absolute;
                visibility: hidden;
                opacity: 0;
                z-index: 22;
                width: 240px;
                top: 22px;
                left: 0;
                transition: all .2s;

                &.is-active {
                  visibility: visible;
                  opacity: 1;
                }

                > div {
                  border: $border;
                  border-top-left-radius: 6px;
                  border-top-right-radius: 6px;
                  padding: 16px;
                  background: $index-page-main-background-color-grey;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;

                  p {
                    text-align: start;
                    font-size: 12px;
                    margin-bottom: 4px;
                  }

                  input {
                    padding: 5px 12px;
                    background: $index-page-main-background-color-grey;
                    border: $border;
                    border-radius: 6px;

                    &:focus {
                      box-shadow: $color-state-focus-shadow;
                    }
                  }
                }

                ul {
                  max-height: 360px;
                  overflow: scroll;
                  overflow-x: hidden;
                  border-bottom-left-radius: 6px;
                  border-bottom-right-radius: 6px;
                  border-bottom: $border;

                  li {
                    text-align: start;
                    padding: 5px 16px;
                    background: white;
                    border: $border;
                    border-top: none;

                    &:hover {
                      cursor: pointer;
                      background: $index-page-main-background-color-grey;
                    }
                  }
                }
              }

              &:hover {
                cursor: pointer;
              }

              &:after {
                content: "";
                margin-left: 4px;
                margin-top: 12px;
                display: inline-block;
                width: 12px;
                height: 12px;
                background: black;
                clip-path: polygon(0 0, 100% 0, 50% 50%);
              }
            }

            .ok-button {
              border: $border;
              border-radius: 3px;
              padding: 3px;
              margin-top: 8px;
              transition: all .2s;

              &:hover {
                cursor: pointer;
                background: white;
                box-shadow: $color-shadow-medium;
              }
            }
          }
        }
      }

      .content {
        width: 100%;

        ul {
          li {
            border-top: 1px solid $index-page-main-border-color-grey;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            .left {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;

              > div:first-child {
                a {
                  margin: 0 4px;
                  color: $index-page-main-middle-font-color-blue;

                  &:nth-child(2) {
                    color: $index-page-main-middle-font-color-blue-4;
                  }

                  &:hover {
                    text-decoration: underline;
                  }

                }

                svg {
                  margin-right: 4px;
                }
              }

              p {
                color: $index-page-main-font-color-grey-3;
                font-size: 14px;
                text-align: start;
                margin: 4px 24px 4px 0;
              }

              > div:last-child {

                @media screen and (min-width: $middle) {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  font-size: 12px;

                  > div:first-child {
                    margin-top: 8px;
                    font-size: 12px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    > div {
                      margin-right: 16px;
                    }

                    div {
                      > span {
                        display: inline-block;
                        border-radius: 50%;
                        background: #4c92e2;
                        width: 10px;
                        height: 10px;
                      }
                    }

                    > div:last-child {
                      display: flex;
                      justify-content: flex-start;
                      align-items: center;

                      span:last-child {
                        display: inline-block;
                        border-radius: 50%;
                        width: 16px;
                        height: 16px;
                        background: #4c92e2;
                        margin-left: 4px;
                      }
                    }
                  }

                  > div:last-child {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    right: -60px;

                    svg {
                      margin-right: 4px;
                    }
                  }
                }

                @media screen and (max-width: $middle) and (min-width: $mini) {
                  width: 100%;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  flex-wrap: wrap;
                  font-size: 12px;

                  > div:first-child {
                    margin-top: 8px;
                    font-size: 12px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: wrap;

                    > div {
                      margin-right: 16px;

                      > span {
                        display: inline-block;
                        border-radius: 50%;
                        background: #4c92e2;
                        width: 10px;
                        height: 10px;
                      }
                    }

                    > div:last-child {
                      display: flex;
                      justify-content: flex-start;
                      align-items: center;
                    }
                  }

                  > div:last-child {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin-top: 4px;

                    svg {
                      margin-right: 4px;
                    }
                  }
                }

                @media screen and (max-width: $mini) {
                  width: 100%;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  flex-wrap: wrap;
                  font-size: 12px;

                  > div:first-child {
                    margin-top: 8px;
                    font-size: 12px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: wrap;

                    > div {
                      margin-right: 16px;
                      margin-top: 4px;

                      > span {
                        display: inline-block;
                        border-radius: 50%;
                        background: #4c92e2;
                        width: 10px;
                        height: 10px;
                      }
                    }

                    > div:last-child {
                      display: flex;
                      justify-content: flex-start;
                      align-items: center;
                    }
                  }

                  > div:last-child {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin-top: 4px;

                    svg {
                      margin-right: 4px;
                    }
                  }
                }
              }
            }

            .right {
              height: 100%;
              font-size: 12px;

              > div {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 6px;
                border: 1px solid $index-page-main-border-color-grey;
                padding: 3px 12px;

                svg {
                  margin-right: 4px;
                }
              }
            }
          }
        }

      }
    }
  }
}

footer {
  width: 100%;
  position: relative;

  > div:first-child {
    border: none !important;
    max-width: 1012px;
  }

  .backdrop {
    position: absolute;
    width: 100%;
    height: 76px;
    background: $index-page-main-background-color-grey;
    z-index: -1;
    bottom: 0;
  }
}

</style>