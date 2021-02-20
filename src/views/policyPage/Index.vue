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
      <bottom-component/>
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