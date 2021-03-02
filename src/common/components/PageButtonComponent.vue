<template>
  <div class="button-wrapper">
    <div class="button">
      <div @click="jumpNextPage(-1)" class="left-button">PRE</div>
      <span class="page-number" @click="jumpToPage(item)" :class="`page-number${item}`"
            v-for="item in showPageNumber" :key="item">
                  {{ item }}
                </span>
      <div @click="jumpNextPage(1)" class="right-button">NEXT</div>
    </div>
  </div>
</template>

<script>
import {merge} from "@/http/indexPage";

export default {
  name: "PageButtonComponent",
  props: [
    "totalPage",
  ],
  data() {
    return {
      showPageNumber: [],
      startPage:0,
      endPage:0,
    }
  },
  methods: {
    jumpToPage(page) {
      let url = this.$route.fullPath
      url = merge(url, {page})
      window.open(url, "_self")
    },
    jumpNextPage(index) {
      let current = this.$route.query.page === undefined || this.$route.query.page === "" ? 0 : this.$route.query.page
      current = parseInt(current)
      if (current + index >= 1 && current + index <= this.totalPage) {
        let url = this.$route.fullPath
        url = merge(url, {page:current+index})
        window.open(url, "_self")
      }
    },
    initPage() {
      document.querySelector(`span.page-number${this.$route.query.page}`).classList.add("is-active")
    },
    initPageNumber(maxPage) {
      let current = this.$route.query.page === undefined || this.$route.query.page === "" ? 0 : this.$route.query.page
      current = parseInt(current)
      this.totalPage = maxPage

      if (current > maxPage) {
        this.$message({
          message:"操作错误,请重新操作.",
          type:"error"
        })
      }

      if (current - 4 <= 1) {
        this.startPage = 1
      } else {
        this.startPage = current - 4
      }

      if (current + 4 >= maxPage) {
        this.endPage = maxPage

      } else {
        this.endPage = current + 4
      }

      for (var i = this.startPage;i<=this.endPage;++i) {
        this.showPageNumber.push(i)
      }

      let leftButton = document.querySelector(".button .left-button")
      let rightButton = document.querySelector(".button .right-button")

      if (current !== 1) {
        leftButton.classList.add("is-active")
      } else {
        leftButton.classList.remove("is-active")
      }

      if (current !== maxPage) {
        rightButton.classList.add("is-active")
      } else {
        rightButton.classList.remove("is-active")
      }
    },

    initData() {
      this.initPageNumber(this.totalPage)
      this.$nextTick(()=>this.initPage())
    }
  },
  mounted() {
    this.initData()
  },
  beforeCreate() {
    if (this.$route.query.page === undefined || this.$route.query.page === "")
      this.$router.push(`${this.$route.path}?page=1`)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.button-wrapper {
  .button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 16px 0;

    > span {
      padding: 3px 12px;
      border-radius: 4px;
      transition: all .2s;
      margin: 0 4px;

      &.is-active {
        background-color: $index-page-main-background-color-blue;
        color: white;
      }

      &:hover {
        cursor: pointer;
        background-color: $index-page-main-background-color-grey-5;
      }
    }

    > div {
      padding: 5px 16px;
      border: 1px solid $index-page-main-border-color-grey;
      font-size: 14px;

      &:hover {
        cursor: pointer;
        box-shadow: $color-shadow-medium;
      }

      &.is-active {
        color: $index-page-main-middle-font-color-blue;
      }
    }

    .left-button {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
      color: $index-page-main-middle-font-color-blue-2;
    }

    .right-button {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
      color: $index-page-main-middle-font-color-blue-2;
    }
  }
}

</style>