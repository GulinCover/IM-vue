<template>
  <div class="register-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="content">
        <p>{{locale.joinOur}}</p>
        <h2>{{locale.createYourAccount}}</h2>
        <div>
          <label>{{locale.username}}</label>
          <input type="text">
        </div>
        <p>{{locale.usernameDesc}}</p>
        <div>
          <label>{{locale.emailAddress}}</label>
          <input type="email">
        </div>
        <div>
          <label>{{locale.password}}</label>
          <input type="password">
        </div>
        <p>{{locale.passwordDesc}}</p>
        <h4>{{locale.emailPreferences}}</h4>
        <div class="before-picture">
          <div>
            <div></div>
          </div>
          <p>{{locale.emailPreferencesDesc}}</p>
        </div>
        <h4>{{locale.verifyEmail}}</h4>
        <div class="picture">
          <svg height="64" aria-label="Account has been verified. Please continue." viewBox="0 0 24 24" version="1.1" width="64" role="img">
            <path fill="green" fill-rule="evenodd" d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"></path>
          </svg>
        </div>
        <div class="create-button">{{locale.createAccount}}</div>
        <p>{{locale.createDesc}}</p>
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
      locale:this.$locale
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