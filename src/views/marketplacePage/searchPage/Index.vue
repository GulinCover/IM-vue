<template>
  <div class="marketplace-search-wrapper">
    <header>
      <top-bar/>
    </header>
    <main>
      <div class="backdrop">
        <access-path-component/>

        <pop-menu-and-left-nav-component>
          <template slot="content">
            <div class="right-content">

              <hot-recommended-component/>

              <div class="button">
                <div class="left-button">PRE</div>
                <div class="right-button">NEXT</div>
              </div>
            </div>
          </template>
        </pop-menu-and-left-nav-component>

      </div>
    </main>

    <bottom-card-component/>

    <footer>
      <bottom-component/>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import BottomCardComponent from "@/common/components/marketplace/BottomCardComponent";
import AccessPathComponent from "@/common/components/marketplace/AccessPathComponent";
import PopMenuAndLeftNavComponent from "@/common/components/marketplace/PopMenuAndLeftNavComponent";
import HotRecommendedComponent from "@/common/components/marketplace/HotRecommendedComponent";

export default {
  name: "Index",
  components: {
    HotRecommendedComponent,
    PopMenuAndLeftNavComponent,
    AccessPathComponent,
    BottomCardComponent,
    BottomComponent,
    TopBar
  },
  data() {
    return {
      locale:this.$locate,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  background: $index-page-main-background-color-grey;

  .backdrop {
    max-width: 1012px;
    margin: 0 auto;
    padding: 0 16px;

    .right-content {
      flex: 3.5;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: start;

      .button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 16px 0;

        > div {
          padding: 5px 16px;
          border: 1px solid $index-page-main-border-color-grey;
          font-size: 14px;
        }

        .left-button {
          border-bottom-left-radius: 6px;
          border-top-left-radius: 6px;
          border-right: none;
          color: $index-page-main-middle-font-color-blue-2;
        }

        .right-button {
          border-bottom-right-radius: 6px;
          border-top-right-radius: 6px;
          color: $index-page-main-middle-font-color-blue;
        }
      }
    }
  }

}

</style>