<template>
  <div class="home">

    <header>
      <div class="tip" :class="{'not-active':!isTipActive}">
        <h3>{{ locale.browserTip }}</h3>
        <div @click="closeTip">
          <x-circle-icon :size="'18'"/>
        </div>
      </div>
      <top-bar-component/>
    </header>

    <main>
      <div class="main-wrapper">
        <div class="left" ref="content">
          <index-left-component
              :topics-data="topicsData"
          />
        </div>
        <div class="middle" ref="middle">
          <index-middle-component/>
        </div>
        <div class="right">
          <index-right-component/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import TopBarComponent from "@/common/components/TopBarComponent";
import IndexLeftComponent from "@/common/components/indexPage/IndexLeftComponent";
import IndexRightComponent from "@/common/components/indexPage/IndexRightComponent";
import IndexMiddleComponent from "@/common/components/indexPage/IndexMiddleComponent";
import {XCircleIcon} from "vue-feather-icons"
import {HttpPost} from "@/http/indexPage";

export default {
  name: 'Home',
  data() {
    return {
      locale: this.$locale,
      isTipActive: false,
      topicsData: [],
    }
  },
  components: {
    TopBarComponent,
    IndexLeftComponent,
    IndexMiddleComponent,
    IndexRightComponent,
    XCircleIcon,
  },

  methods: {
    closeTip() {
      this.isTipActive = false
    },

    init() {
      const userAgent = navigator.userAgent
      if (userAgent.indexOf("Chrome") > -1) {
        this.isTipActive = false
        return
      }
      this.isTipActive = true
    },

    daTaInit() {
      HttpPost("/api/post/select/me/topics").then(ret=>{
        let lst = ret.data.code.split(" ")
        if (lst[0] !== "200") {
          alert(lst[1])
          return
        }
        this.topicsData = ret.data.topicAbsList

      }).catch(e=>{
        console.log(e)
      })
    }
  },

  mounted() {
    this.init()
    this.daTaInit()
  },
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.tip {
  width: auto;
  background: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  text-align: start;
  padding: 8px;
  color: $index-page-main-font-color-grey-3;

  &.not-active {
    display: none;
  }

  div {
    padding: 6px;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    &:hover {
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 1012px) {
  .main-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    position: relative;
    background: $index-page-main-middle-background-grey;
    overflow: hidden;

    .left {
      width: 25%;
      max-width: 350px;
      padding: 0 24px;
      position: relative;
      background: white;
      height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
    }

    .middle {
      width: 100%;
      height: 100%;
      padding: 0 32px;
      margin-top: 16px;
      border-left: 1px solid $index-page-main-middle-border-color;
      border-bottom: 1px solid $index-page-main-middle-border-color;
    }

    .right {
      height: 100%;
      max-width: 350px;
      width: 25%;
    }
  }
}

@media only screen and(min-width: 768px) and(max-width: 1011px) {
  .main-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: $index-page-main-middle-background-grey;

    .left {
      max-width: 350px;
      height: 100%;
      width: auto;
      flex: 1;
      padding: 0 24px;
      position: relative;
      background: white;
      top: 0;
      left: 0;
      bottom: 0;
    }

    .middle {
      height: 100%;
      width: 68%;
      padding: 0 16px;
      margin-top: 16px;
      border-left: 1px solid $index-page-main-middle-border-color;
      border-bottom: 1px solid $index-page-main-middle-border-color;
    }

    .right {
      display: none;
    }
  }
}

@media only screen and (max-width: 767px) {
  .main-wrapper {
    min-height: 100vh;
    position: relative;
    background: $index-page-main-middle-background-grey;

    .left {
      max-width: 100%;
      padding: 16px 16px 0;
    }

    .middle {
      max-width: 100%;
      padding: 16px;
    }

    .right {
      display: none;
    }
  }
}
</style>
