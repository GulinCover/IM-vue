<template>
  <div class="repository-wrapper">
    <div class="header">
      <h3>仓库</h3>
    </div>
    <div class="content">
      <ul>
        <div>
          <span>
            <span>
              <book-open-icon :size="'14'"/>
            </span>
            <span>仓库</span>
          </span>
          <span>
            <span>
              <x-octagon-icon :size="'14'"/>
            </span>
            <span>删除仓库</span>
          </span>
        </div>
        <div>
          Alex
        </div>

        <li>
          <div>
            <book-open-icon :size="'14'"/>
          </div>
          <h4>
            <span>
              This is a Topic
            </span>
          </h4>
          <div>
            <star-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <twitch-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <users-icon :size="'14'"/>
            <span>15人参与</span>
          </div>
        </li>
        <li>
          <div>
            <book-open-icon :size="'14'"/>
          </div>
          <h4>
            <span>
              This is a Topic
            </span>
          </h4>
          <div>
            <star-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <twitch-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <users-icon :size="'14'"/>
            <span>15人参与</span>
          </div>
        </li>
        <li>
          <div>
            <book-open-icon :size="'14'"/>
          </div>
          <h4>
            <span>
              This is a Topic
            </span>
          </h4>
          <div>
            <star-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <twitch-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <users-icon :size="'14'"/>
            <span>15人参与</span>
          </div>
        </li>
        <li>
          <div>
            <book-open-icon :size="'14'"/>
          </div>
          <h4>
            <span>
              This is a Topic
            </span>
          </h4>
          <div>
            <star-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <twitch-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <users-icon :size="'14'"/>
            <span>15人参与</span>
          </div>
        </li>
        <li>
          <div>
            <book-open-icon :size="'14'"/>
          </div>
          <h4>
            <span>
              This is a Topic
            </span>
          </h4>
          <div>
            <star-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <twitch-icon :size="'14'"/>
            <span>15</span>
          </div>
          <div>
            <users-icon :size="'14'"/>
            <span>15人参与</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {XOctagonIcon, BookOpenIcon,StarIcon,TwitchIcon,UsersIcon} from "vue-feather-icons"
export default {
  name: "RepositoryComponent",
  components: {
    XOctagonIcon, BookOpenIcon,StarIcon,TwitchIcon,UsersIcon,
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.repository-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: $middle) {
    margin-top: 40px;
  }

  > .header {
    width: 100%;
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 1px solid $index-page-main-border-color-grey;

    h3 {
      padding-bottom: 8px;
    }
  }

  > .content {
    width: 100%;
    padding-top: 16px;

    ul {
      margin-bottom: 40px;
      width: 100%;
      border-radius: 6px;
      border: 1px solid $index-page-main-border-color-grey;

      > div {
        padding: 16px;
        background: $index-page-main-background-color-grey;
        border-bottom: 1px solid $index-page-main-border-color-grey;

        span {
          margin-right: 8px;
        }
      }

      li {
        padding: 16px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &:not(:last-child) {
          border-bottom: 1px solid $index-page-main-border-color-grey;
        }

        > * {
          margin-right: 12px;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          span {
            padding-left: 4px;
            color: $index-page-main-middle-font-color-blue;
            font-size: 12px;
          }
        }

        > div:first-child {
          margin-right: 8px;
        }
        h4 {

          span {
            padding-left: 0;
          }
        }
      }
    }
  }

}
</style>