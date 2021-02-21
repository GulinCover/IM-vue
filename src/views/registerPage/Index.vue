<template>
  <div class="register-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="content">
        <p>{{ locale.joinOur }}</p>
        <h2>{{ locale.createYourAccount }}</h2>
        <div>
          <label>{{ locale.username }}</label>
          <input type="text" v-model="userInfo.username">
        </div>
        <p>{{ locale.usernameDesc }}</p>
        <div>
          <label>{{ locale.emailAddress }}</label>
          <input type="email" v-model="userInfo.email">
        </div>
        <div>
          <label>{{ locale.password }}</label>
          <input type="password" v-model="userInfo.password">
        </div>
        <div>
          <label>{{ locale.rePassword }}</label>
          <input type="password" v-model="userInfo.rePassword">
        </div>
        <p>{{ locale.passwordDesc }}</p>
        <h4>{{ locale.emailPreferences }}</h4>
        <div class="before-picture">
          <div>
            <div></div>
          </div>
          <p>{{ locale.emailPreferencesDesc }}</p>
        </div>
        <h4>{{ locale.verifyEmail }}</h4>
        <div class="picture">
          <svg height="64" aria-label="Account has been verified. Please continue." viewBox="0 0 24 24" version="1.1"
               width="64" role="img">
            <path fill="green" fill-rule="evenodd"
                  d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"></path>
          </svg>
        </div>
        <div class="create-button">{{ locale.createAccount }}</div>
        <p>{{ locale.createDesc }}</p>
      </div>
    </main>

    <footer>
      <bottom-component/>
    </footer>
  </div>
</template>

<script>
import BottomComponent from "@/common/components/explorePage/BottomComponent";
import TopBar from "@/common/components/TopBarComponent";

export default {
  name: "Index",
  components: {
    TopBar, BottomComponent
  },
  data() {
    return {
      locale: this.$locale,

      userInfo: {
        username: "",
        email: "",
        password: "",
        rePassword: ""
      },
      nameContentFlag: false,
      emailContentFlag: false,
      passwordContentFlag: false,
      rePasswordContentFlag: false,
      nameFlag: true,
      emailFlag: true,
      passwordFlag: true,
      rePasswordFlag: true,
    }
  },
  methods: {
    ruleDetect() {
      document.querySelector(".create-button").classList.remove("is-active")
      if (this.nameContentFlag && this.emailContentFlag && this.passwordContentFlag && this.rePasswordContentFlag && this.userInfo.rePassword === this.userInfo.password) {
        document.querySelector(".create-button").classList.add("is-active")
      }

      console.log(this.nameContentFlag)
      console.log(this.emailContentFlag)
      console.log(this.passwordContentFlag)
      console.log(this.rePasswordContentFlag)
    }
  },

  mounted() {

  },

  watch: {
    nameRule(newVal) {
      if (newVal === "") return

      let pattern = new RegExp(/^[a-zA-Z0-9\u4e00-\u9fa5]+$/)
      if (!pattern.test(this.userInfo.username) && this.nameFlag) {
        this.nameFlag = false
        this.$message({
          message: "昵称不得包含任何符号",
          type: "warning",
          onClose: () => this.nameFlag = true
        })
      }
      if (this.userInfo.username.length <= 12) {
        this.nameContentFlag = true
        this.ruleDetect()
        return

      } else if (this.nameFlag) {
        this.nameFlag = false
        this.nameContentFlag = false
        this.ruleDetect()
        this.$message({
          message: "昵称不得超过12个字符",
          type: "warning",
          onClose: () => this.nameFlag = true
        })
      }

      this.nameContentFlag = false
    },
    emailRule(newVal) {
      if (newVal === "") return

      let pattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-z0-9]+\.com$/)
      if (pattern.test(this.userInfo.email)) {
        this.emailContentFlag = true
        this.ruleDetect()
        return

      } else if (this.emailFlag) {
        this.emailFlag = false
        this.emailContentFlag = false
        this.ruleDetect()
        this.$message({
          message: "Email格式不正确",
          type: "warning",
          onClose: () => this.emailFlag = true
        })
      }

      this.emailContentFlag = false

    },
    passwordRule(newVal) {
      if (newVal === "" || this.userInfo.rePassword === "") return

      if (this.userInfo.password.length >= 8 && this.userInfo.password.length <= 16 && this.userInfo.password === this.userInfo.rePassword) {
        this.passwordContentFlag = true
        this.rePasswordContentFlag = true
        this.ruleDetect()
        return

      } else if (this.passwordFlag) {
        this.passwordFlag = false
        this.passwordContentFlag = true
        this.ruleDetect()
        this.$message({
          message: "密码长度只能8到16位",
          type: "warning",
          onClose: () => this.passwordFlag = true
        })
      }

      this.passwordContentFlag = false
    },
    rePasswordRule(newVal) {
      if (newVal === "" || this.userInfo.password === "") return
      if (this.userInfo.rePassword.length >= 8 && this.userInfo.rePassword.length <= 16 && this.userInfo.password === this.userInfo.rePassword) {
        this.rePasswordContentFlag = true
        this.passwordContentFlag = true
        this.ruleDetect()
        return

      } else if (this.rePasswordFlag) {
        this.rePasswordFlag = false
        this.rePasswordContentFlag = false
        this.ruleDetect()
        this.$message({
          message: "密码长度只能8到16位",
          type: "warning",
          onClose: () => this.rePasswordFlag = true
        })
      }
      this.rePasswordContentFlag = false
    }
  },
  computed: {
    nameRule() {
      return this.userInfo.username
    },
    emailRule() {
      return this.userInfo.email
    },
    passwordRule() {
      return this.userInfo.password
    },
    rePasswordRule() {
      return this.userInfo.rePassword
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;

  .content {
    width: 518px;
    margin: 48px auto 0;
    text-align: start;

    > h2 {
      text-align: center;
      margin-bottom: 48px;
      font-size: 40px;
    }

    > p {
      &:first-child {
        text-align: center;
      }

      margin-bottom: 16px;
      font-size: 12px;
    }

    > div {
      width: 518px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      &:nth-child(5) {
        margin-bottom: 16px;
      }

      label {
        margin-bottom: 4px;
      }

      input {
        width: 518px;
        padding: 4px 12px;
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        background-color: $index-page-main-background-color-grey;
        font-size: 16px;
        margin-bottom: 2px;

        &:focus {
          box-shadow: $color-state-focus-shadow;
        }
      }
    }

    .before-picture {
      margin: 16px 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      > div {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid $index-page-main-background-color-blue;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 8px;

        > div {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: $index-page-main-background-color-blue;
        }
      }

      p {
        font-size: 12px;
      }
    }

    .picture {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .create-button {
      padding: 16px 24px;
      background-color: $index-page-main-background-color-blue;
      color: white;
      opacity: .5;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 16px 0;
      transition: all .2s;

      &.is-active {
        opacity: 1;
      }
    }
  }
}

</style>