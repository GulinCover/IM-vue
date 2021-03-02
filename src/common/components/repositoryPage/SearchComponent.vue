<template>
  <div class="search-wrapper">
    <div class="search">
      <input type="text" :placeholder="locale.publicTopicPageSearchPlaceholder">
    </div>
    <div class="tag">
      <div>
        <div @click="showEntryTime" class="show-related">
          标签:
          {{ entryContent === "" ? "Any" : entryContent }}
          <div class="show-option"
               :class="{'is-active':entryIsActive}"
          >
            <ul>
              <li v-for="(item,key) in showEntryListData" :key="key"
                  @click.stop="searchEntry(item.entryId, item.entryName)">
                {{ item.entryName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div @click="showSearchTime" class="show-related">
          时间:
          {{ timeContent === "" ? "Any" : timeContent }}
          <div class="show-option"
               :class="{'is-active':timeIsActive}"
          >
            <ul>
              <li @click.stop="searchTime('一周')">
                一周
              </li>
              <li @click.stop="searchTime('一月')">
                一月
              </li>
              <li @click.stop="searchTime('所有')">
                ALL
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <span @click="search">确认</span>
      </div>
    </div>
  </div>
</template>

<script>
import {HttpPost} from "@/http/indexPage";

export default {
  name: "SearchComponent",
  props: [
      "url",
      "showEntryListData"
  ],
  data() {
    return {
      locale:this.$locale,

      inputContent: "",
      entryId:"",
      entryContent:"",
      entryIsActive: false,
      timeContent:"",
      timeIsActive: false,
    }
  },
  methods: {
    showEntryTime() {
      this.entryIsActive = !this.entryIsActive
    },
    showSearchTime() {
      this.timeIsActive = !this.timeIsActive
    },

    searchEntry(entryId,entryName) {
      this.entryIsActive = false
      this.entryContent = entryName
      this.entryId = entryId
    },
    searchTime(time) {
      this.timeIsActive = false
      this.timeContent = time
    },

    search() {
      let data = {
        search_content: this.inputContent,
        entry_content: this.entryId,
        time_content: this.timeContent
      }
      HttpPost(`${this.url}`,data).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.$emit('searchResultData',ret.data)
      }).catch(e=>console.log(e))
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.search-wrapper {
  @media screen and (min-width: $middle) {
    padding: 16px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid $index-page-main-border-color-grey;

    .search {
      margin-right: 16px;

      input {
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        padding: 5px 12px;
        width: 100%;

        &:focus {
          box-shadow: $color-state-focus-shadow;
        }
      }
    }

    .tag {
      font-size: 12px;
      min-width: 270px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > div {
        .show-related {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          padding: 5px 16px;

          .show-option {
            position: absolute;
            visibility: hidden;
            opacity: 0;
            z-index: 22;
            width: 180px;
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
            }

            ::-webkit-scrollbar {
              display: none;
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
                padding: 16px 16px;
                background: white;

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

        span {
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          padding: 5px 16px;

          &:hover {
            cursor: pointer;
            box-shadow: $color-shadow-medium;
          }
        }

        &:first-child {
          margin-right: 8px;
        }

        &:last-child {
          margin-left: 16px;
        }
      }
    }

  }

  @media screen and (max-width: $middle) {
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid $index-page-main-border-color-grey;

    .search {
      margin-right: 16px;
      margin-bottom: 16px;

      input {
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        padding: 5px 12px;
        width: 100%;

        &:focus {
          box-shadow: $color-state-focus-shadow;
        }
      }
    }

    .tag {
      width: 100%;
      font-size: 12px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > div {
        .show-related {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          padding: 5px 16px;

          .show-option {
            position: absolute;
            visibility: hidden;
            opacity: 0;
            z-index: 22;
            width: 180px;
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
            }

            ::-webkit-scrollbar {
              display: none;
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
                padding: 16px 16px;
                background: white;

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

        span {
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          padding: 5px 16px;

          &:hover {
            cursor: pointer;
            box-shadow: $color-shadow-medium;
          }
        }

        &:first-child {
          margin-right: 8px;
        }

        &:last-child {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>