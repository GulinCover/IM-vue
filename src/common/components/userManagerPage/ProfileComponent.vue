<template>
  <div class="profile-wrapper">
    <div class="header">
      <h3>{{locale.userManagerAccountSettingsNav[0].name}}</h3>
    </div>
    <div class="content">
      <div class="left-show">
        <div class="name">
          <h3>姓名</h3>
          <div>
            <input disabled type="text" :value="'Alex'">
          </div>
          <p>{{locale.nicknameDesc}}</p>
        </div>
        <div class="desc">
          <h3>简介</h3>
          <textarea></textarea>
          <p>{{locale.descDesc}}</p>
        </div>
        <div class="info">

        </div>
        <div class="location">
          <h3>位置</h3>
          <div>
            <input type="text">
          </div>
          <p>{{locale.locationDesc}}</p>
        </div>

        <div class="button">
          <div>
            更新
          </div>
        </div>
      </div>

      <div class="right">
        <h3>{{locale.editPicture}}</h3>
        <div class="avatar">#</div>
      </div>
    </div>
  </div>
</template>

<script>
import {HttpPost} from "@/http/indexPage";

export default {
  name: "ProfileComponent",
  data() {
    return {
      locale:this.$locale,

      userData: Object
    }
  },
  methods: {
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
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.profile-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: $middle) {
    > .header {
      width: 100%;
      padding-bottom: 8px;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      > h3 {
        margin-bottom: 8px;
        font-size: 24px;
      }
    }

    > .content {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      > .left-show {
        width: 75%;

        .info,
        .location,
        .desc,
        .name {
          width: 100%;
          max-width: 480px;
          margin: 15px 0;
          line-height: 1.5;

          > h3 {
            font-size: 14px;
            margin-bottom: 6px;
          }

          > div {
            padding: 5px 12px;
            border: 1px solid $index-page-main-border-color-grey;
            border-radius: 6px;
            margin-right: 16px;
            background: $index-page-main-background-color-grey;

            input {
              border: none;
              background: inherit;
              width: 100%;
              font-size: 14px;
            }
          }

          > textarea {
            max-width: 75%;
            background: $index-page-main-background-color-grey;
            margin-right: 16px;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            padding: 8px 12px;
            outline: none;
            min-height: 120px;
          }

          > p {
            color: $index-page-main-middle-font-color-grey;
            margin: 4px 0 2px;
            font-size: 12px;
          }
        }

        .button {

          > div {
            display: table;
            font-size: 14px;
            border-radius: 6px;
            background: $index-page-main-background-color-green;
            color: #fff;
            padding: 5px 16px;
            margin-bottom: 40px;
          }
        }
      }

      > .right {
        width: 25%;
        padding: 0 16px;
        margin: 14px 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        > h3 {
          margin-bottom: 8px;
          font-size: 14px;
        }

        .avatar {
          max-width: 200px;
          max-height: 200px;
          border-radius: 50%;
          background: #2c974b;
        }

      }
    }
  }

  @media screen and (max-width: $middle) {
    > .header {
      margin-top: 16px;
      width: 100%;
      padding-bottom: 8px;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      > h3 {
        margin-bottom: 8px;
        font-size: 24px;
      }
    }

    > .content {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;

      > .left-show {
        width: 100%;

        .info,
        .location,
        .desc,
        .name {
          width: 100%;
          margin: 15px 0;
          line-height: 1.5;

          > h3 {
            font-size: 14px;
            margin-bottom: 6px;
          }

          > div {
            padding: 5px 12px;
            border: 1px solid $index-page-main-border-color-grey;
            border-radius: 6px;
            margin-right: 16px;
            background: $index-page-main-background-color-grey;

            input {
              border: none;
              background: inherit;
              width: 100%;
              font-size: 14px;
            }
          }

          > textarea {
            max-width: 100%;
            background: $index-page-main-background-color-grey;
            margin-right: 16px;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            padding: 8px 12px;
            outline: none;
            min-height: 120px;
          }

          > p {
            color: $index-page-main-middle-font-color-grey;
            margin: 4px 0 2px;
            font-size: 12px;
          }
        }

        .button {

          > div {
            display: table;
            font-size: 14px;
            border-radius: 6px;
            background: $index-page-main-background-color-green;
            color: #fff;
            padding: 5px 16px;
            margin-bottom: 40px;
          }
        }
      }

      > .right {
        width: 100%;
        margin: 14px 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        > h3 {
          margin-bottom: 8px;
          font-size: 14px;
        }

        .avatar {
          margin: 16px 0;
          max-width: 200px;
          max-height: 200px;
          border-radius: 50%;
          background: #2c974b;
        }

      }
    }
  }

}

</style>