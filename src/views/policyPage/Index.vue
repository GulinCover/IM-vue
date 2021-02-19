<template>
  <div class="index-policy-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <nav-component
          :path-name="this.$route.name"
      />

      <div class="policy-content">
        <div class="editor__content">
          <h2>{{locale.policyPageH2}}</h2>
          <p v-html="locale.policyPageDesc"></p>
        </div>
      </div>

    </main>

    <footer>
      <bottom-component
          :locale="locale"
          :bottom-data="bottomData"
      />
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import NavComponent from "@/common/components/topicPage/NavComponent";
import BottomComponent from "@/common/components/explorePage/BottomComponent";
export default {
  name: "Index",
  components: {
    BottomComponent,
    NavComponent,
    TopBar,
  },
  data() {
    return {
      locale:this.$locale,
      bottomData: {
        first: {
          left: {
            name: 'GitHub',
            h3: "请支持GitHub",
            p: "感谢GitHub的技术支持",
            url: "https://github.com",
          },
          right: [],
        },
        second: [
          {
            name: "@2021GitHub,Inc,",
            url: '',
          },
          {
            name: "Terms",
            url: '',
          },
          {
            name: "Policy",
            url: '',
          },
          {
            name: "What is WeekType?",
            url: '',
          },
        ],
      },

    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/common/style/RichStyle.css";

main {
  .policy-content {
    max-width: 1012px;
    margin: 40px auto 0;
    padding: 0 40px;
    text-align: start;
  }
}

</style>