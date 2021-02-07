<template>
  <div class="bottom-wrapper" ref="background">
    <div>
      <ul>
        <li v-for="(item, key) in locale.bottomListLeft" :key="key">
          <a :href="item.url">{{item.name}}</a>
        </li>
      </ul>
      <div class="avatar">
        <github-icon :size="'18'"/>
      </div>
      <ul>
        <li v-for="(item, key) in locale.bottomListRight" :key="key">
          <a :href="item.url">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {GithubIcon} from "vue-feather-icons"
export default {
  name: "BottomComponent",
  props: [
      "backgroundColor"
  ],
  components: {
    GithubIcon,
  },
  data() {
    return {
      locale:this.$locate,
    }
  },
  mounted() {
    this.$nextTick(()=>{
      if (this.backgroundColor === '' || this.backgroundColor === null || this.backgroundColor === undefined) return
      this.$refs.background.style.background = this.backgroundColor
    })
  }

}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.bottom-wrapper {
  background: $index-page-main-background-color-grey;

  & > div {
    margin: 0 auto;
    padding: 80px 16px 48px;
    max-width: 1012px;

    @media screen and (min-width: $max) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > ul {
        width: 40%;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          margin-right: 16px;
        }
      }
    }

    @media screen and (max-width: $max) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      & > ul {
        width: 100%;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        li {
          margin-right: 16px;
        }
      }

      & > div {
        display: none;
      }
    }
  }
}

</style>