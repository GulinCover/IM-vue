<template>
  <div class="index-marketplace-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="banner">
        <img src="../../assets/cars-on-golden-gate-bridge-from-battery-spencer-viewpoint-picjumbo-com.jpg" alt="">
        <div class="show-info">
          <h3>{{locale.h3}}</h3>
          <p>{{locale.p}}</p>
          <div @click="jumpTo('?entry_name=hot')">{{locale.exploreButton}}</div>
        </div>
      </div>

      <pop-menu-and-left-nav-component>
        <template slot="content">
          <div class="right-content">
            <official-recommended-component/>
            <hot-recommended-component/>
            <recently-added-component/>
            <entry-recommended-component/>
          </div>
        </template>
      </pop-menu-and-left-nav-component>

      <bottom-card-component/>

    </main>

    <footer>
      <bottom-component/>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import BottomCardComponent from "@/common/components/marketplace/BottomCardComponent";
import PopMenuAndLeftNavComponent from "@/common/components/marketplace/PopMenuAndLeftNavComponent";
import OfficialRecommendedComponent from "@/common/components/marketplace/OfficialRecommendedComponent";
import HotRecommendedComponent from "@/common/components/marketplace/HotRecommendedComponent";
import RecentlyAddedComponent from "@/common/components/marketplace/RecentlyAddedComponent";
import EntryRecommendedComponent from "@/common/components/marketplace/EntryRecommendedComponent";

export default {
  name: "Index",
  components: {
    EntryRecommendedComponent,
    RecentlyAddedComponent,
    HotRecommendedComponent,
    OfficialRecommendedComponent,
    PopMenuAndLeftNavComponent,
    BottomCardComponent,
    BottomComponent,
    TopBar,
  },
  data() {
    return {
      locale: this.$locale,
    }
  },
  methods: {
    jumpTo(web) {
      window.open(`/marketplace/search${web}`,"_blank")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  background-color: $index-page-main-background-color-grey;

  .banner {
    margin: 16px auto 0;
    padding-bottom: 16px;
    height: 335px;
    width: 100%;
    background: white;
    overflow: hidden;
    position: relative;

    img {
      border-radius: 6px;
      width: 1012px;
      height: 319px;
      opacity: .8;
      object-position: top;
      object-fit: fill;
    }

    @media screen and (min-width: $middle) {
      .show-info {
        width: 1012px;
        height: 319px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -506px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 100px 0 50px 50px;

        h3 {
          font-size: 44px;
          font-style: italic;
          font-weight: 800;
        }

        p {
          font-size: 24px;
          font-weight: 600;
        }

        > div {
          border-radius: 6px;
          border: 1px solid $index-page-main-background-color-blue;
          padding: 5px 12px;
          margin-top: 16px;
          transition: all .2s;

          &:hover {
            cursor: pointer;
            background-color: $index-page-main-background-color-blue;
            color: white;
          }
        }
      }
    }
    @media screen and (min-width: $mini) and (max-width: $middle) {
      .show-info {
        width: 1012px;
        height: 319px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -506px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 100px 50px 50px;

        h3 {
          font-size: 44px;
          font-style: italic;
          font-weight: 800;
        }

        p {
          font-size: 24px;
          font-weight: 600;
        }

        > div {
          border-radius: 6px;
          border: 1px solid $index-page-main-background-color-blue;
          padding: 5px 12px;
          margin-top: 16px;
          transition: all .2s;

          &:hover {
            cursor: pointer;
            background-color: $index-page-main-background-color-blue;
            color: white;
          }
        }
      }
    }

    @media screen and (max-width: $mini) {
      .show-info {
        width: 1012px;
        height: 319px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -506px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 100px 380px;

        h3 {
          font-size: 44px;
          font-style: italic;
          font-weight: 800;
        }

        p {
          font-size: 24px;
          font-weight: 600;
        }

        > div {
          border-radius: 6px;
          border: 1px solid $index-page-main-background-color-blue;
          padding: 5px 12px;
          margin-top: 16px;
          transition: all .2s;

          &:hover {
            cursor: pointer;
            background-color: $index-page-main-background-color-blue;
            color: white;
          }
        }
      }
    }
  }

  .right-content {
    flex: 3.5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}

</style>