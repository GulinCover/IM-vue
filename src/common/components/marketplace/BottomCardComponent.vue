<template>
  <div class="bottom-card-wrapper">
    <div class="bottom-card">
      <div>
        <shopping-bag-icon :size="'48'"/>
      </div>
      <h3>这里可以购买物品</h3>
      <div class="intro-wrapper">
        <div class="intro">
          <h3>阅读购买协议</h3>
          <p>阅读购买协议阅读购买协议阅读购买协议阅读购买协议</p>
        </div>
        <div class="intro">
          <h3>阅读售卖协议</h3>
          <p>阅读购买协议阅读购买协议阅读购买协议阅读购买协议</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ShoppingBagIcon} from "vue-feather-icons"

export default {
  name: "BottomCardComponent",
  components: {
    ShoppingBagIcon
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.bottom-card-wrapper {
  margin: 24px auto 0;
  padding: 0 16px 40px;
  max-width: 1012px;
  width: 100%;

  @media screen and (min-width: $middle) {
    .bottom-card {
      margin: 0 auto;
      box-shadow: $color-shadow-extra-large;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 40px;

      > h3 {
        margin-left: 24px;
        padding-right: 80px;
      }

      .intro-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 40px;

        .intro {
          line-height: 1.5;
          margin-right: 32px;
          font-size: 12px;
          text-align: start;
        }
      }
    }
  }

  @media screen and (max-width: $middle) and (min-width: $mini) {
    .bottom-card {
      margin: 0 auto;
      box-shadow: $color-shadow-extra-large;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 40px;

      > div {
        margin-bottom: 16px;
      }

      > h3 {
        width: 100%;
        margin-bottom: 16px;
      }

      .intro-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .intro {
          line-height: 1.5;
          margin-right: 16px;
          font-size: 12px;
          text-align: start;

          &:last-child {
            margin: 0 0 0 16px;
          }
        }
      }
    }
  }

  @media screen and (max-width: $mini) {
    .bottom-card {
      margin: 0 auto;
      box-shadow: $color-shadow-extra-large;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 40px;

      > div {
        margin-bottom: 16px;
      }

      > h3 {
        width: 100%;
        margin-bottom: 16px;
      }

      .intro-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .intro {
          line-height: 1.5;
          font-size: 12px;
          margin-bottom: 16px;
        }
      }
    }
  }

}

</style>