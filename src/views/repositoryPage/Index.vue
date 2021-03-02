<template>
  <div class="repository-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="user-info-wrapper">
        <div class="first">
          <div class="avatar">
            <img :src="userData.userAvatar" alt="">
          </div>
          <div class="desc">
            <h3>{{userData.username}}</h3>
            <p>{{userData.UUID}}</p>
          </div>
        </div>
        <div class="two">
          <p>{{userData.userDesc}}</p>
        </div>
        <a href="/user/manager" target="_blank" class="three">{{ locale.profileEditor }}</a>
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
          <div class="avatar">
            <img :src="userData.userAvatar" alt="">
          </div>
          <h3>{{userData.username}}</h3>
          <p>{{userData.userDesc}}</p>
          <a href="/user/manager" target="_blank" class="profile-button">
            {{ locale.profileEditor }}
          </a>
          <p>
            <map-pin-icon :size="'12'"/>
            <span>{{userData.location}}</span>
          </p>
        </div>

        <div class="right">
          <router-view/>
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
import {MapPinIcon} from "vue-feather-icons"
import {HttpPost} from "@/http/indexPage";

export default {
  name: "Index",
  components: {
    NavComponent,
    BottomComponent,
    TopBar,
    MapPinIcon,
  },
  data() {
    return {
      locale: this.$locale,
      headerBounding: null,
      height: null,

      pathName: "overview",
      placeholderHeight: "",

      userData: Object
    }
  },

  methods: {
    fix() {
      try{
        this.headerBounding = document.querySelector(".placeholder").getBoundingClientRect()
      } catch (e) {
        console.log(e)
      }
    },

    navSwitch() {
      this.height = document.querySelector(".placeholder").getBoundingClientRect().top
      window.addEventListener("scroll", this.fix)

      if (this.$route.query.current !== null ||
          this.$route.query.current !== ""
      ) this.pathName = this.$route.query.current
    },

    initUserData() {
      HttpPost(`/api/post/select/me/userInfo`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.userData = ret.data
      }).catch(e => console.log(e))
    },
    initData() {
      this.initUserData()
    }
  },
  mounted() {
    this.navSwitch()
    this.initData()
    window.onresize = ()=>{
      this.fix()
      this.navSwitch()
    }
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
          height: 16vw;
          border-radius: 50%;
          overflow: hidden;

          img {
            width: inherit;
            height: inherit;
          }
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
        color: black;

        &:hover {
          cursor: pointer;
          box-shadow: $color-shadow-medium;
        }
      }
    }
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
          border-radius: 50%;
          overflow: hidden;

          img {
            width: inherit;
          }
        }

        h3 {
          padding-top: 16px;
        }

        p {
          padding-bottom: 16px;
        }

        a.profile-button {
          width: 100%;
          color: black;
          display: inline-block;
          margin-bottom: 16px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          padding: 5px 16px;
          text-align: center;

          &:hover {
            cursor: pointer;
            box-shadow: $color-shadow-medium;
          }
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