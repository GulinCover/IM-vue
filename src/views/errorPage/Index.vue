<template>
  <div class="error-wrapper">
    <header>
      <top-bar/>
    </header>
    <main>
      <div class="code">{{code}}</div>
      <div class="message">{{message}}</div>
      <div class="backdrop">
        <img src="../../assets/do-not-enter-traffic-control-sign-in-san-francisco-picjumbo-com.jpg" alt="">
      </div>
      <div class="button">返回首页</div>
    </main>
    <footer>
      <bottom-component/>
    </footer>
  </div>
</template>

<script>
import BottomComponent from "@/common/components/explorePage/BottomComponent";
import TopBar from "@/common/components/TopBarComponent";
export default {
  name: "Index",
  components: {
    TopBar,
    BottomComponent
  },
  data() {
    return {
      code: 404,
      message: "页面未找到"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  position: relative;

  .code {
    width: 120px;
    position: absolute;
    top: 32px;
    left: 50%;
    margin-left: -270px;
    font-size: 120px;
    color: white;
    font-style: italic;
  }

  .message {
    width: 120px;
    position: absolute;
    bottom: 320px;
    right: 50%;
    margin-right: -270px;
    color: white;
    font-style: italic;
    font-size: 24px;
  }

  .backdrop {
    width: 100%;
    overflow: hidden;

    img {
      margin: 12px auto;
      width: 800px;
      height: 534px;
      object-fit: contain;
      object-position: top;
      border-radius: 6px;
    }
  }

  .button {
    width: 120px;
    margin: 24px auto 40px;
    padding: 5px 16px;
    background-color: $index-page-main-background-color-grey;
    border-radius: 6px;
    border: 1px solid $index-page-main-border-color-grey;
    transition: all .2s;

    &:hover {
      cursor: pointer;
      background-color: $index-page-main-background-color-grey-5;
      box-shadow: $color-state-focus-shadow;
    }
  }

}

</style>