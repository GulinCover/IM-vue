<template>
  <div class="public-topic-wrapper">
    <div class="header">
      <search-component
          :url="'/api/post/select/search/me/publicTopic'"
          :show-entry-list-data="showEntryListData"
          @searchResultData="ret=>showPubicTopicListData = ret.publicTopicAbsList"
      />
    </div>

    <ul>
      <li @click="jumpTo(item.topicId)" v-for="(item, key) in showPubicTopicListData" :key="key">
        <div class="left">
          <h3 class="title">{{item.topicTitle}}</h3>
          <div class="desc">{{item.topicDesc}}</div>
          <div class="bottom">
            <span v-for="(it,k) in item.entryAbsList" :key="k">{{it.entryName}}</span>
            <span>更新于{{item.updateTime}}天前</span>
          </div>
        </div>
        <div class="right">
          <star-icon :size="'16'"/>Star
        </div>
      </li>
    </ul>

    <div class="page-button">
      <page-button-component
          :total-page="20"
      />
    </div>
  </div>
</template>

<script>
import {StarIcon} from "vue-feather-icons"
import {HttpPost} from "@/http/indexPage";
import PageButtonComponent from "@/common/components/PageButtonComponent";
import SearchComponent from "@/common/components/repositoryPage/SearchComponent";

export default {
  name: "PublicTopicComponent",
  components: {
    PageButtonComponent,
    StarIcon,
    SearchComponent
  },
  data() {
    return {
      locale:this.$locale,

      showPubicTopicListData: [],
      showEntryListData:[],
    }
  },
  methods: {
    jumpTo(web) {
      window.open(`/topic/public/${web}`,'_blank')
    },

    initEntryListData() {
      HttpPost(`/api/post/select/me/publicTopic/all/entry`).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.showEntryListData = ret.data.entryAbsList
      }).catch(e=>console.log(e))
    },
    initPubicTopicListData() {
      HttpPost(`/api/post/select/me/publicTopic`).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.showPubicTopicListData = ret.data.publicTopicAbsList
      }).catch(e=>console.log(e))
    },
    initData() {
      this.initPubicTopicListData()
      this.initEntryListData()
    }
  },
  mounted() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.public-topic-wrapper {
  > ul {
    > li {
      padding: 24px 0;
      border-bottom: 1px solid $index-page-main-border-color-grey;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all .2s;

      &:hover {
        cursor: pointer;
        box-shadow: $color-shadow-medium;
      }

      .left {
        .title {
          margin-bottom: 4px;
        }
        .desc {
          margin-bottom: 8px;
          padding-right: 24px;
          font-size: 12px;
        }
        .bottom {
          margin-top: 8px;
          font-size: 12px;

          span {
            margin-right: 16px;
          }
        }
      }

      .right {
        padding: 3px 12px;
        border: 1px solid $index-page-main-border-color-grey;
        background: $index-page-main-background-color-grey;
        border-radius: 6px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin-right: 4px;
        }
      }

    }
  }

  .page-button {
    padding-top: 40px;
    display: flex;
    justify-content: center;
  }
}

</style>