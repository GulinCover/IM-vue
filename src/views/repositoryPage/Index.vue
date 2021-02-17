<template>
  <div class="repository-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="user-info-wrapper">
        <div class="first">
          <div class="avatar"></div>
          <div class="desc">
            <h3>Alex</h3>
            <p>Alex</p>
          </div>
        </div>
        <div class="two">
          <p>this is a user desc</p>
        </div>
        <div class="three">{{ locale.profileEditor }}</div>
      </div>

      <div class="nav-bar">
        <div class="placeholder"></div>
        <nav-component
            :nav="locale.repositoryPageNav"
            :header-bounding="headerBounding"
            :height="height"
        />
      </div>

      <div class="content">
        <div class="left">
          <div class="avatar"></div>
          <h3>Alex</h3>
          <p>this is a user desc</p>
          <div class="profile-button">
            {{ locale.profileEditor }}
          </div>
          <p>
            <map-pin-icon :size="'12'"/>
            <span>ShangHai</span>
          </p>
        </div>

        <div class="right">
          <div v-if="locale.repositoryPageNav[1].alias === this.pathName">
            <public-topic-component
                :locale="locale"
            />
          </div>
          <div v-else-if="locale.repositoryPageNav[2].alias === this.pathName">
            <public-comment-component
                :locale="locale"
            />
          </div>
          <div v-else-if="locale.repositoryPageNav[3].alias === this.pathName">
            <wallet-component
                :locale="locale"
            />
          </div>
          <div v-else-if="locale.repositoryPageNav[4].alias === this.pathName">
            <selling-component
              :locale="locale"
              />
          </div>
          <div v-else-if="locale.repositoryPageNav[5].alias === this.pathName">
            <photographed-component
              :locale="locale"
              />
          </div>
          <div v-else-if="locale.repositoryPageNav[6].alias === this.pathName">
            <failed-component
              :locale="locale"
              />
          </div>
          <div v-else-if="locale.repositoryPageNav[7].alias === this.pathName">
            <bidding-component
              :locale="locale"
              />
          </div>
          <div v-else-if="locale.repositoryPageNav[8].alias === this.pathName">
            <repository-component
                :locale="locale"
            />
          </div>
          <div v-else>
            <overview-component/>
          </div>

        </div>
      </div>

    </main>

    <footer>
      <bottom-component
          :backgroundColor="'#fff'"
      />
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import NavComponent from "@/common/components/repositoryPage/NavComponent";
import PublicTopicComponent from "@/common/components/repositoryPage/PublicTopicComponent"
import {MapPinIcon} from "vue-feather-icons"
import OverviewComponent from "@/common/components/repositoryPage/OverviewComponent";
import PublicCommentComponent from "@/common/components/repositoryPage/PublicCommentComponent";
import WalletComponent from "@/common/components/repositoryPage/WalletComponent";
import SellingComponent from "@/common/components/repositoryPage/SellingComponent";
import PhotographedComponent from "@/common/components/repositoryPage/PhotographedComponent";
import FailedComponent from "@/common/components/repositoryPage/FailedComponent";
import BiddingComponent from "@/common/components/repositoryPage/BiddingComponent";
import RepositoryComponent from "@/common/components/repositoryPage/RepositoryComponent";

export default {
  name: "Index",
  components: {
    RepositoryComponent,
    FailedComponent,
    PhotographedComponent,
    OverviewComponent,
    NavComponent,
    BottomComponent,
    TopBar,
    MapPinIcon,
    PublicTopicComponent,
    PublicCommentComponent,
    WalletComponent,
    SellingComponent,
    BiddingComponent,
  },
  data() {
    return {
      locale: this.$locale,
      headerBounding: null,
      height: null,

      pathName: "overview"
    }
  },

  methods: {
    fix() {
      if (window.innerWidth <= 767) {
        this.headerBounding = document.querySelector(".placeholder").getBoundingClientRect()
      }
    }
  },
  mounted() {
    this.height = document.querySelector(".placeholder").getBoundingClientRect().top
    window.addEventListener("scroll", this.fix)

    if (this.$route.query.current !== null ||
        this.$route.query.current !== ""
    ) this.pathName = this.$route.query.current

  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  margin-bottom: 40px;

  @media screen and (min-width: $middle) {
    .user-info-wrapper {
      display: none;
    }
  }

  @media screen and (max-width: $middle) {
    .user-info-wrapper {
      padding: 0 24px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .first {
        width: 100%;
        margin-bottom: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .avatar {
          margin-right: 16px;
          flex: 1;
          background: #4f86bf;
          height: 16vw;
          border-radius: 50%;
          overflow: hidden;
        }

        .desc {
          text-align: start;
          flex: 5;
        }
      }

      .two {
        margin-bottom: 16px;
      }

      .three {
        width: 100%;
        padding: 5px 16px;
        margin-bottom: 16px;
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        background: $index-page-main-background-color-grey;
      }
    }
  }

  > .nav-bar {
  }

  > .content {
    width: 100%;
    padding: 0 24px;
    display: flex;
    margin: 0 auto;

    @media screen and (min-width: $middle) {
      justify-content: flex-start;
      align-items: flex-start;
      max-width: 1012px;

      .left {
        margin-top: -32px;
        padding: 8px;
        width: 22%;
        z-index: 99;
        text-align: start;

        .avatar {
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          background: #4e4ed9;
          border-radius: 50%;
        }

        h3 {
          padding-top: 16px;
        }

        p {
          padding-bottom: 16px;
        }

        .profile-button {
          margin-bottom: 16px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          padding: 5px 16px;
          text-align: center;
        }

      }

      .right {
        width: 78%;
        padding: 0 16px;
        text-align: start;

      }

    }

    @media screen and (max-width: $middle) {
      padding: 0 16px;

      .left {
        display: none;
      }

      .right {
        width: 100%;
        text-align: start;


      }
    }

  }
}

footer {
  margin: 0 auto;
  max-width: 1012px;
  border-top: 1px solid $index-page-main-border-color-grey;
}

</style>