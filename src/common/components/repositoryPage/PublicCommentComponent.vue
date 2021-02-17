<template>
  <div class="public-comment-wrapper">
    <div class="header">
      <div class="search">
        <input type="text" :placeholder="locale.publicTopicPageSearchPlaceholder">
      </div>
      <div class="tag">
        <div>
          <span>
          标签:ALL
          </span>
        </div>
        <div>
          <span>模糊查找:无</span>
        </div>
        <div>
          <span>
            NEW
          </span>
        </div>
      </div>
    </div>

    <ul>
      <li>
        <div class="left">
          <h3 class="title">topic title</h3>
          <div class="comment">hello</div>
          <div class="bottom">
            <span>3D</span>
            <span>回复于6天前</span>
          </div>
        </div>

        <div class="right">
          <star-icon :size="'16'"/>30
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
  </div>
</template>

<script>
import {StarIcon} from "vue-feather-icons";

export default {
  name: "PublicCommentComponent",
  components: {
    StarIcon,
  },
  props: [
      "locale"
  ]
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.public-comment-wrapper {
  @media screen and (min-width: $middle) {
    .header {
      padding: 16px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      .search {
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        padding: 5px 12px;
        margin-right: 16px;
        width: 100%;

        input {
          border: none;
          width: 100%;
          height: 100%;
        }
      }

      .tag {
        font-size: 12px;
        min-width: 270px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        div {
          span {
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            padding: 5px 16px;
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

  @media screen and (max-width: $middle) {
    .header {
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      .search {
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        padding: 5px 12px;
        margin-right: 16px;
        width: 100%;
        margin-bottom: 16px;

        input {
          border: none;
          width: 100%;
          height: 100%;
        }
      }

      .tag {
        width: 100%;
        font-size: 12px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        div {
          span {
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            padding: 5px 16px;
          }

          &:first-child {
            margin-right: 8px;
          }

          &:nth-child(2) {
            flex: auto;
          }

          &:last-child {
            margin-left: 16px;
          }
        }
      }
    }
  }

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
}

</style>