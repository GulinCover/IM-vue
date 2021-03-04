<template>
  <div class="user-manager-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="header">
        <div class="left">
          <div class="avatar">
            <img :src="userData.userAvatar" alt="">
          </div>
          <div class="info">
            <h3>{{userData.username}}</h3>
            <p>{{userData.userDesc}}</p>
          </div>
        </div>
        <div class="right">
          <a href="/repository/overview" class="button">
            前往仓库
          </a>
        </div>
      </div>
      <div class="content">
        <div class="left">
          <ul>
            <li>
              <h3>{{locale.userManagerAccountSettings}}</h3>
            </li>

            <li class="left-nav" :ref="item.url" @click="jump(item.url)"  v-for="(item, key) in locale.userManagerAccountSettingsNav" :key="key">
              <div>
                {{item.name}}
              </div>
            </li>
          </ul>
        </div>

        <div class="right">
          <div v-if="locale.userManagerAccountSettingsNav[1].url === pathName">
            <security-component/>
          </div>
          <div v-else-if="locale.userManagerAccountSettingsNav[2].url === pathName">
            <bill-component/>
          </div>
          <div v-else-if="locale.userManagerAccountSettingsNav[3].url === pathName">
暂不支持
          </div>
          <div v-else-if="locale.userManagerAccountSettingsNav[4].url === pathName">
            <repository-component/>
          </div>
          <div v-else>
            <profile-component/>
          </div>
        </div>
      </div>

      <div></div>
    </main>

    <footer>
      <bottom-component
          :background-color="'#fff'"
      />
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import ProfileComponent from "@/common/components/userManagerPage/ProfileComponent";
import SecurityComponent from "@/common/components/userManagerPage/SecurityComponent";
import BillComponent from "@/common/components/userManagerPage/BillComponent";
import RepositoryComponent from "@/common/components/userManagerPage/RepositoryComponent";
import {HttpPost} from "@/http/indexPage";
export default {
  name: "Index",
  components: {
    RepositoryComponent,
    BillComponent,
    SecurityComponent,
    ProfileComponent,
    BottomComponent,
    TopBar
  },
  data() {
    return {
      locale:this.$locale,
      pathName: "profile",

      userData: Object,
    }
  },
  methods: {
    isActive() {
      const curr = this.$route.query.current
      let flag = true

      document.querySelectorAll(".left-nav").forEach(it=>{
        it.classList.remove("is-active")
      })

      if (curr === null) {
        this.$refs["profile"][0].classList.add("is-active")
        return
      }
      this.locale.userManagerAccountSettingsNav.forEach(it=>{
        if (it.url === curr) {
          this.$refs[curr][0].classList.add("is-active")
          flag = false
        }
      })

      if (flag) this.$refs["profile"][0].classList.add("is-active")
    },

    jump(web) {
      if (web === this.$route.query.current) return
      window.open(`${this.$route.path}?current=${web}`,"_self")
    },

    initActive() {
      this.isActive()

      const curr = this.$route.query.current
      if (curr === null) return
      this.pathName = curr
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
    },
  },
  mounted() {
    this.initData()
    this.initActive()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  max-width: 1012px;
  margin: 0 auto;
  padding: 24px 16px 0;
  text-align: start;

  > div:last-child {
    width: 100%;
    border-bottom: 1px solid $index-page-main-border-color-grey;
  }

  @media screen and (min-width: $middle) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .header {
      margin: 4px 0 24px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .avatar {
          width: 48px;
          height: 48px;
          margin-right: 16px;
          border-radius: 50%;

          img {
            width: inherit;
            height: inherit;
            border-radius: 50%;
          }
        }

        .info {
          h3 {
            font-size: 14px;
          }
          p {
            font-size: 12px;
          }
        }
      }

      .right {
        .button {
          padding: 3px 12px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          font-size: 14px;
        }
      }
    }

    .content {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .left {
        width: 25%;
        padding-right: 24px;

        > ul {
          border: 1px solid $index-page-main-border-color-grey;
          border-radius: 6px;
          font-size: 12px;

          > li {
            padding: 8px 16px;

            &:hover {
              cursor: pointer;
              background: $index-page-main-background-color-grey;
            }

            &.is-active {
              padding-left: 13px;
              border-left: 3px solid $index-page-main-border-color-origin;
            }

            &:not(:first-child) {
              border-top: 1px solid $index-page-main-border-color-grey;
            }
          }
        }
      }

      .right {
        width: 75%;
      }
    }
  }

  @media screen and (max-width: $middle) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .header {
      margin: 4px 0 24px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 8px;

        .avatar {
          width: 48px;
          height: 48px;
          margin-right: 16px;
          border-radius: 50%;

          img {
            width: inherit;
            height: inherit;
            border-radius: 50%;
          }
        }

        .info {
          h3 {
            font-size: 14px;
          }
          p {
            font-size: 12px;
          }
        }
      }

      .right {
        .button {
          padding: 3px 12px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          font-size: 14px;
        }
      }
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .left {
        width: 100%;

        > ul {
          border: 1px solid $index-page-main-border-color-grey;
          border-radius: 6px;
          font-size: 12px;

          > li {
            padding: 8px 16px;

            &:hover {
              cursor: pointer;
              background: $index-page-main-background-color-grey;
            }

            &.is-active {
              padding-left: 13px;
              border-left: 3px solid $index-page-main-border-color-origin;
            }

            &:not(:first-child) {
              border-top: 1px solid $index-page-main-border-color-grey;
            }
          }
        }
      }

      .right {
        width: 100%;
      }
    }
  }

}


footer {
  margin: 0 auto;
  max-width: 1012px;
}
</style>