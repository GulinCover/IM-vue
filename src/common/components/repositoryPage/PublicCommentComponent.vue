<template>
  <div class="public-comment-wrapper">
    <div class="header">
      <search-component
          :url="'/api/post/select/search/me/publicComment'"
          :show-entry-list-data="showEntryListData"
          @searchResultData="ret=>showCommentListData = ret.commentInfoAbsList"
      />
    </div>

    <ul>
      <li v-for="(item, key) in showCommentListData" :key="key">
        <div class="left">
          <h3 class="title">{{item.topicTitle}}</h3>
          <div class="comment">{{item.commentContent}}</div>
          <div class="bottom">
            <span v-for="(it,k) in item.entryAbsList" :key="k">
              {{it.entryName}}
            </span>
            <span>回复于{{item.commentTime}}天前</span>
          </div>
        </div>

        <div class="right">
          <star-icon :size="'16'"/>{{item.likeNumber}}
        </div>
      </li>
      <li>
        <div class="left">
          <h3 class="title">topic title</h3>
          <div class="comment">hello</div>
          <div class="comment">
            <a href="">@Alex</a>
            haha
          </div>
          <div class="bottom">
            <span>3D</span>
            <span>回复于6天前</span>
          </div>
        </div>

        <div class="right">
          <star-icon :size="'16'"/>30
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
import {StarIcon} from "vue-feather-icons";
import PageButtonComponent from "@/common/components/PageButtonComponent";
import SearchComponent from "@/common/components/repositoryPage/SearchComponent";
import {HttpPost} from "@/http/indexPage";

export default {
  name: "PublicCommentComponent",
  components: {
    SearchComponent,
    PageButtonComponent,
    StarIcon,
  },
  data() {
    return {
      locale: this.$locale,

      showEntryListData: Object,

      searchResultData: Object,

      showCommentListData: [],
    }
  },
  methods: {
    initShowCommentListData() {
      HttpPost(`/api/post/select/me/publicComment`).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.showCommentListData = ret.data.commentInfoAbsList
      }).catch(e=>console.log(e))
    },
    initEntryListData() {
      HttpPost(`/api/post/select/me/publicComment/all/entry`).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.showEntryListData = ret.data.entryAbsList
      }).catch(e=>console.log(e))
    },

    initData() {
      this.initEntryListData()
      this.initShowCommentListData()
    }
  },
  mounted() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.public-comment-wrapper {
  > ul {
    > li {
      padding: 24px 0;
      border-bottom: 1px solid $index-page-main-border-color-grey;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        .title {
          margin-bottom: 4px;
        }
        .comment {
          margin-bottom: 8px;
          padding-right: 24px;
          font-size: 12px;

          > a {
            margin-right: 4px;
          }
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