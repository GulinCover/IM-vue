<template>
<div class="bill-wrapper">
  <div class="header">
    <div>
      <p>Balance</p>
      <h3>$0</h3>
    </div>
    <div>
      <p>本月增长</p>
      <h3>$0</h3>
      <p>切换成年增长</p>
    </div>
    <div>
      <p>本月减少</p>
      <h3>$0</h3>
      <p>切换成年减少</p>
    </div>
  </div>

  <div class="content">
    <div class="header">
      <h3>收益&支出</h3>
    </div>
    <ul>
      <li>
        <div class="first">
          <div class="left">
          </div>
          <div class="right">
            <h3>赞相关</h3>
            <p>最近一次在10天前</p>
          </div>
        </div>

        <div class="two">
          <div class="left"></div>
          <div class="middle">
            <h3>收支比</h3>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="right">
            <h3>+$0C</h3>
          </div>
        </div>
      </li>
      <li>
        <div class="first">
          <div class="left">
          </div>
          <div class="right">
            <h3>赞相关</h3>
            <p>最近一次在10天前</p>
          </div>
        </div>

        <div class="two">
          <div class="left"></div>
          <div class="middle">
            <h3>收支比</h3>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="right">
            <h3>+$0C</h3>
          </div>
        </div>
      </li>
      <li>
        <div class="first">
          <div class="left">
          </div>
          <div class="right">
            <h3>赞相关</h3>
            <p>最近一次在10天前</p>
          </div>
        </div>

        <div class="two">
          <div class="left"></div>
          <div class="middle">
            <h3>收支比</h3>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="right">
            <h3>+$0C</h3>
          </div>
        </div>
      </li>
      <li>
        <div class="first">
          <div class="left">
          </div>
          <div class="right">
            <h3>赞相关</h3>
            <p>最近一次在10天前</p>
          </div>
        </div>

        <div class="two">
          <div class="left"></div>
          <div class="middle">
            <h3>收支比</h3>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="right">
            <h3>+$0C</h3>
          </div>
        </div>
      </li>
      <li>
        <div class="first">
          <div class="left">
          </div>
          <div class="right">
            <h3>赞相关</h3>
            <p>最近一次在10天前</p>
          </div>
        </div>

        <div class="two">
          <div class="left"></div>
          <div class="middle">
            <h3>收支比</h3>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="right">
            <h3>+$0C</h3>
          </div>
        </div>
      </li>
      <li>
        <div class="first">
          <div class="left">
          </div>
          <div class="right">
            <h3>赞相关</h3>
            <p>最近一次在10天前</p>
          </div>
        </div>

        <div class="two">
          <div class="left"></div>
          <div class="middle">
            <h3>收支比</h3>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="right">
            <h3>+$0C</h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "BillComponent"
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.bill-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > .header {
    width: 100%;
    display: grid;

    @media screen and (min-width: $middle) {
      grid-template-columns: 1fr 1fr 1fr;

      > div {
        padding: 16px 24px;
        background: $index-page-main-background-color-grey-6;
        border-radius: 6px;
        line-height: 1.5;

        > h3 {
          margin: 4px 0 8px;
          padding-bottom: 4px;
        }

        > p {
          font-size: 12px;
        }

        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }

    @media screen and (max-width: $middle) {
      margin-top: 40px;
      grid-template-columns: 1fr;

      > div {
        margin-bottom: 16px;
        padding: 16px 24px;
        background: $index-page-main-background-color-grey-6;
        border-radius: 6px;
        line-height: 1.5;

        > h3 {
          margin: 4px 0 8px;
          padding-bottom: 4px;
        }

        > p {
          font-size: 12px;
        }
      }
    }
  }

  > .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > .header {
      width: 100%;
      margin-top: 40px;
      margin-bottom: 16px;
      border-bottom: 1px solid $index-page-main-border-color-grey;
      padding-bottom: 16px;
    }

    > ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;

      li {
        width: inherit;
        border: 1px solid $index-page-main-border-color-grey;
        border-radius: 6px;
        margin-bottom: 24px;

        > div {
          width: inherit;
          padding: 16px;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          &:first-child {
            background: $index-page-main-background-color-grey;
          }

          &:not(:last-child) {
            border-bottom: 1px solid $index-page-main-border-color-grey;
          }
        }

        .first {
          > .left {
            flex: 1;
            width: 32px;
            height: 32px;
            background: #2ea44f;
          }

          > .right {
            margin-left: 4px;
            padding-left: 8px;
            flex: 11;
            line-height: 1.5;

            h3 {
              font-size: 14px;
            }
            p {
              font-size: 12px;
            }
          }
        }

        .two {
          .left {
            flex: 1;
            background: #2ea44f;
            height: 32px;
          }
          .middle {
            flex: 10;
            margin-left: 4px;
            padding-left: 8px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            h3 {
              font-size: 14px;
            }

            > div {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              div:first-child {
                height: 4px;
                width: 150px;
                background: red;
                margin-top: 4px;
              }
              div:last-child {
                height: 4px;
                width: 150px;
                background: green;
                margin-top: 4px;
              }
            }
          }
          .right {
            flex: 1;
            color: green;
          }
        }
      }
    }
  }
}

</style>