<template>
  <div class="forgot-password-wrapper">
    <main>
      <div class="content">
        <div class="avatar">
          <div></div>
        </div>
        <div class="title">{{locale.forgotPasswordPageH}}</div>
        <div class="form">
          <div class="account">
            <label>{{locale.forgotPasswordPageP}}</label>
            <input type="text" :placeholder="locale.enterYourEmail">
          </div>
          <div class="button">{{locale.sendPasswordResetToEmail}}</div>
        </div>
        <div class="bottom-link">
          <span>
            <a href="/policy" target="_blank">{{locale.policy}}</a>
          </span>
          <span>
            <a href="">{{locale.official}}</a>
          </span>
          <span>
            <a href="">{{locale.contactWe}}</a>
          </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Index",
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
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 280px;

    .avatar {
      padding: 32px 0 24px;

      div {
        border-radius: 50%;
        background-color: #2ea44f;
        width: 56px;
        height: 56px;
      }
    }

    .title {
      margin-bottom: 24px;
      font-size: 22px;
    }

    .form {
      padding: 20px;
      border-radius: 6px;
      background-color: $index-page-main-background-color-grey;
      border: 1px solid $index-page-main-background-color-grey-7;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: start;

        label {
          width: 100%;
          margin-bottom: 12px;
          font-size: 14px;
          color: black;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        input {
          font-size: 14px;
          width: 240px;
          border-radius: 6px;
          padding: 8px 12px;
          border: 1px solid $index-page-main-border-color-grey;
          background-color: white;
          margin-bottom: 15px;

          &:focus {
            box-shadow: $color-state-focus-shadow;
          }
        }
      }

      .button {
        width: 100%;
        padding: 5px 16px;
        background-color: $index-page-main-background-color-green;
        color: white;
        border-radius: 6px;
        transition: all .2s;

        &:hover {
          cursor: pointer;
          background-color: $index-page-main-background-color-green-2;
        }
      }
    }

    .bottom-link {
      margin: 40px auto;
      padding: 40px 16px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin: 0 16px;
        &:last-child {
          a {
            color: black;
          }
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

</style>