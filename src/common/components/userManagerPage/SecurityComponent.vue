<template>
  <div class="security-wrapper">
    <div class="header">
      <h3>{{ locale.userManagerAccountSettingsNav[1].name }}</h3>
    </div>
    <ul class="info">
      <li>
        <h3>{{locale.oldPwd}}</h3>
        <div>
          <input type="password">
        </div>
      </li>
      <li>
        <h3>{{locale.newPwd}}</h3>
        <div>
          <input type="password">
        </div>
      </li>
      <li>
        <h3>{{locale.confirmPwd}}</h3>
        <div>
          <input type="password">
        </div>
      </li>
      <p>{{locale.pwdDesc}}</p>
      <div class="button">
        <div>{{locale.updatePwd}}</div>
        <div>{{locale.forgotPwd}}</div>
      </div>

      <li>
        <h3>{{locale.oldEmail}}</h3>
        <div>
          <input type="email">
        </div>
      </li>
      <li>
        <h3>{{locale.newEmail}}</h3>
        <div>
          <input type="email">
        </div>
      </li>
      <li>
        <h3>{{locale.confirmEmail}}</h3>
        <div>
          <input type="email">
        </div>
      </li>
      <p>{{locale.emailDesc}}</p>
      <div class="button">
        <div>{{locale.updateEmail}}</div>
      </div>

      <li>
        <h3>{{locale.oldPhone}}</h3>
        <div>
          <input type="tel">
        </div>
      </li>
      <li>
        <h3>{{locale.newPhone}}</h3>
        <div>
          <input type="tel">
        </div>
      </li>
      <li>
        <h3>{{locale.confirmPhone}}</h3>
        <div>
          <input type="tel">
        </div>
      </li>
      <p>{{locale.phoneDesc}}</p>
      <div class="button">
        <div>{{locale.updatePhone}}</div>
      </div>
    </ul>

    <div class="header">
      <h3>{{ locale.sessions }}</h3>
    </div>


    <div class="sessions">
      <p>{{locale.loginInfoDesc}}</p>
      <ul>
        <li>
          <div></div>
          <div>
            <airplay-icon :size="'32'"/>
          </div>
          <div>
            <h3>
              <span>IP</span>
              138.113.10.22
            </h3>
            <p>
              <span>地址</span>
              US
            </p>
          </div>
          <div class="button">
            踢出
          </div>
        </li>
        <li>
          <div></div>
          <div>
            <airplay-icon :size="'32'"/>
          </div>
          <div>
            <h3>
              <span>IP</span>
              138.113.10.22
            </h3>
            <p>
              <span>地址</span>
              US
            </p>
          </div>
          <div class="button">
            踢出
          </div>
        </li>
        <li>
          <div></div>
          <div>
            <airplay-icon :size="'32'"/>
          </div>
          <div>
            <h3>
              <span>IP</span>
              138.113.10.22
            </h3>
            <p>
              <span>地址</span>
              US
            </p>
          </div>
          <div class="button">
            踢出
          </div>
        </li>
        <li>
          <div></div>
          <div>
            <airplay-icon :size="'32'"/>
          </div>
          <div>
            <h3>
              <span>IP</span>
              138.113.10.22
            </h3>
            <p>
              <span>地址</span>
              US
            </p>
          </div>
          <div class="button">
            踢出
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {AirplayIcon} from "vue-feather-icons"
export default {
  name: "SecurityComponent",
  components: {
    AirplayIcon,
  },
  data() {
    return {
      locale: this.$locale
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.security-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > .header {
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid $index-page-main-border-color-grey;

    > h3 {
      margin-bottom: 8px;
      font-size: 24px;
    }
  }

  .info {
    line-height: 1.5;

    li {
      margin: 16px 0;

      h3 {
        margin-bottom: 6px;
        font-size: 14px;
      }

      > div {
        border-radius: 6px;
        background: $index-page-main-background-color-grey;
        border: 1px solid $index-page-main-border-color-grey;
        padding: 5px 12px;

        input {
          background: inherit;
          width: 440px;
          border: none;
        }
      }
    }

    > .button {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 12px;
      margin-bottom: 40px;

      div:last-child {
        color: $index-page-main-middle-font-color-blue;
      }

      div:first-child {
        color: $index-page-main-right-font-color-black;
        padding: 5px 16px;
        margin-right: 8px;
        border-radius: 6px;
        background: $index-page-main-background-color-grey;
        border: 1px solid $index-page-main-border-color-grey;
      }


    }

    p {
      font-size: 12px;
      margin: 6px 0 2px;
    }
  }

  .sessions {
    width: 100%;

    > p {
      font-size: 12px;
      margin: 16px 0 10px;
    }

    ul {
      border: 1px solid $index-page-main-border-color-grey;
      border-radius: 6px;
      background: $index-page-main-background-color-grey;
      margin-bottom: 40px;

      li {
        padding: 16px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;

        &:not(:last-child) {
          border-bottom: 1px solid $index-page-main-border-color-grey;
        }

        & > div:first-child {
          margin-top: 10px;
          border-radius: 50%;
          background: #2c974b;
          width: 8px;
          height: 8px;
        }

        > div {
          margin-right: 16px;

          > p,
          > h3 {
            font-size: 12px;
            span {
              margin-right: 6px;
            }
          }
        }

        .button {
          background: #fff;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          margin-top: 4px;
          padding: 3px 12px;
          color: #2c974b;
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>