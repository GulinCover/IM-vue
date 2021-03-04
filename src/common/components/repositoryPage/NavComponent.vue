<template>
  <div class="nav-wrapper">
    <div class="nav">
      <div></div>
      <div v-for="(item, key) in locale.repositoryPageNav" :key="key" :ref="item.alias">
        <a @click="jump(item.url)">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavComponent",
  data() {
    return {
      locale:this.$locale,
    }
  },
  methods: {
    jump(web) {
      if (web === this.$route.name) return
      window.open(`/repository/${web}`,"_self")
      this.$nextTick(()=>this.isNavActive())
    },

    isNavActive() {
      let eles = document.querySelectorAll(".nav div")
      eles.forEach(item => item.classList.remove("is-active"))

      const current = this.$route.name

      for (let item of this.locale.repositoryPageNav) {
        if (item.alias === current) {
          this.$refs[current][0].classList.add("is-active")
          return
        }
      }
    }
  },
  mounted() {
    this.isNavActive()
  },
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.nav-wrapper {
  width: 100%;
  border-bottom: 1px solid $index-page-main-border-color-grey-3;
  position: relative;
  top: 0;
  z-index: 99;
  background: rgba(255, 255, 255, .75);
  backdrop-filter: blur(9px);

  @media screen and (min-width: $middle) {
    .nav {
      margin: 0 auto;
      max-width: 1012px;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
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
          border-bottom: 2px solid $index-page-main-border-color-origin;
          color: black !important;
          font-weight: 600;
        }
      }

      div:first-child {
        width: 22%;
        margin-right: 0;
        z-index: -1;
      }

    }
  }

  @media screen and (max-width: $middle) {
    .nav {
      max-width: 1012px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      justify-content: space-evenly;
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
          border-bottom: 2px solid $index-page-main-border-color-origin;
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
    }
  }

}

</style>