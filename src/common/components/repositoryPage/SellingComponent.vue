<template>
  <div class="selling-wrapper">
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
      <div>
        <div class="money-left">TYPE</div>
        <div class="money-right">MAX</div>
      </div>
      <li>
        <div class="left">
          <h3>topic</h3>
          <p>
            <span>类型:著述</span>
          </p>
          <div class="buy-time">上架于10天前</div>
          <div class="buy-time">剩余2天</div>
        </div>
        <div class="right">
          $200
        </div>
      </li>
      <li>
        <div class="left">
          <h3>nickname</h3>
          <p>
            <span>类型:著述</span>
          </p>
          <div class="buy-time">上架于10天前</div>
          <div class="buy-time">剩余2天</div>
        </div>
        <div class="right">
          $200
        </div>
      </li>
      <li>
        <div class="left">
          <h3>topic</h3>
          <p>
            <span>类型:著述</span>
          </p>
          <div class="buy-time">上架于10天前</div>
          <div class="buy-time">剩余2天</div>
        </div>
        <div class="right">
          $200
        </div>
      </li>
      <li>
        <div class="left">
          <h3>nickname</h3>
          <p>
            <span>类型:著述</span>
          </p>
          <div class="buy-time">上架于10天前</div>
          <div class="buy-time">剩余2天</div>
        </div>
        <div class="right">
          $200
        </div>
      </li>
      <li>
        <div class="left">
          <h3>topic</h3>
          <p>
            <span>类型:著述</span>
          </p>
          <div class="buy-time">上架于10天前</div>
          <div class="buy-time">剩余2天</div>
        </div>
        <div class="right">
          $200
        </div>
      </li>
      <li>
        <div class="left">
          <h3>nickname</h3>
          <p>
            <span>类型:著述</span>
          </p>
          <div class="buy-time">上架于10天前</div>
          <div class="buy-time">剩余2天</div>
        </div>
        <div class="right">
          $200
        </div>
      </li>
      <li>
        <div class="left">
          <h3>topic</h3>
          <p>
            <span>类型:著述</span>
          </p>
          <div class="buy-time">上架于10天前</div>
          <div class="buy-time">剩余2天</div>
        </div>
        <div class="right">
          $200
        </div>
      </li>
      <li>
        <div class="left">
          <h3>nickname</h3>
          <p>
            <span>类型:著述</span>
          </p>
          <div class="buy-time">上架于10天前</div>
          <div class="buy-time">剩余2天</div>
        </div>
        <div class="right">
          $200
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "SellingComponent",
  props: [
      "locale"
  ]
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.selling-wrapper {
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
    > div {
      font-size: 24px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0;
      border-bottom: 1px solid $index-page-main-border-color-grey;
    }

    > li {
      padding: 24px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        flex: auto;
        > div {
          font-size: 12px;
        }
        >p {
          font-size: 12px;
          >span {
            margin-right: 16px;
          }
        }
      }

      .right {
        font-size: 24px;
      }
    }
  }
}
</style>