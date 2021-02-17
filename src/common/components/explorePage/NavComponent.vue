<template>
  <div class="nav-wrapper">
    <div class="nav">
      <div></div>
      <div class="explore" ref="explore">
        <a @click="jump('/explore')">{{ locale.explore }}</a>
      </div>
      <div class="topic" ref="topic">
        <a @click="jump('/topic')">{{ locale.topic }}</a>
      </div>
      <div class="hot" ref="hot">
        <a @click="jump('/hot')">{{ locale.hot }}</a>
      </div>
      <div class="policy" ref="policy">
        <a @click="jump('/policy')">{{ locale.policy }}</a>
      </div>
      <div>
        <a>申请词条</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
  props: [
      "locale",
      "pathName"
  ],
  methods: {
    navFix() {
      let nav = document.querySelector(".nav-wrapper")
      let header = document.querySelector("header").getBoundingClientRect()
      const h = header.top + header.height

      try {
        if (h <= 0) {
          nav.style.top = `${window.scrollY - header.height}px`
        } else {
          nav.style.top = '0'
        }
      } catch (e) {
        console.log(e)
      }
    },

    jump(web) {
      if (web===`/${this.$route.name}`) return
      this.$router.push(web)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.navFix)

    document.querySelectorAll(".nav div").forEach(item => item.classList.remove("is-active"))
    if (this.$route.name === this.pathName) {
      this.$refs[this.pathName].classList.add("is-active")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";
.nav-wrapper {
  border-bottom: 1px solid $index-page-main-border-color-grey-3;
  position: relative;
  top: 0;
  z-index: 99;
  background: rgba(255, 255, 255, .75);
  backdrop-filter: blur(9px);

  @media screen and (min-width: $max) {
    .nav {
      margin: 0 auto;
      max-width: 980px;
      padding: 0 16px;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        padding: 16px 0;
        margin-right: 24px;
        font-size: 12px;
        border-bottom: 2px solid white;
        height: 55px;
        transition: all .2s;

        &:hover {
          border-bottom: 2px solid $index-page-main-border-color-grey;
          cursor: pointer;
        }

        a {
          color: $index-page-main-font-color-grey-3;
        }

        &:hover {
          cursor: pointer;
        }

        &.is-active {
          border-bottom: 2px solid $index-page-main-middle-font-color-blue;
          color: black !important;
          font-weight: 600;
        }
      }

      div:first-child {
        width: 25%;
        margin-right: 0;
        z-index: -1;
      }

      div:last-child {
        flex: auto;
        margin-right: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-color: white;

        > a {
          background: $index-page-main-middle-font-color-blue;
          padding: 8px 16px;
          border-radius: 6px;
          color: white;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: $max) and (min-width: $middle) {
    .nav {
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      div {
        padding: 16px 0;
        margin-right: 24px;
        font-size: 12px;
        border-bottom: 2px solid white;
        height: 55px;
        transition: all .2s;

        &:hover {
          border-bottom: 2px solid $index-page-main-border-color-grey;
          cursor: pointer;
        }

        a {
          color: $index-page-main-font-color-grey-3;
        }

        &:hover {
          cursor: pointer;
        }

        &.is-active {
          border-bottom: 2px solid $index-page-main-middle-font-color-blue;
          color: black !important;
          font-weight: 600;
        }
      }

      div:first-child {
        display: none;
      }

      div:last-child {
        flex: auto;
        margin-right: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-color: white;

        > a {
          background: $index-page-main-middle-font-color-blue;
          padding: 8px 16px;
          border-radius: 6px;
          color: white;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: $min) {
    .nav {
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;

      div {
        padding: 8px 0;
        margin-right: 24px;
        font-size: 12px;
        border-bottom: 2px solid white;
        transition: all .2s;

        &:hover {
          border-bottom: 2px solid $index-page-main-border-color-grey;
          cursor: pointer;
        }

        a {
          color: $index-page-main-font-color-grey-3;
        }

        &:hover {
        }

        &.is-active {
          border-bottom: 2px solid $index-page-main-middle-font-color-blue;
          color: black !important;
          font-weight: 600;
        }
      }

      div:first-child {
        display: none;
      }

      div:nth-child(2) {
        margin-top: 8px;
        padding: 0;
        width: 100%;
        border-color: white;
        height: auto;
      }

      div:last-child {
        display: none;
      }
    }
  }

}

</style>