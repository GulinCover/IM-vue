<template>
  <div class="create-topic-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <div class="content">
        <div class="header">
          <h3>{{locale.createTopicH3}}</h3>
          <p>{{locale.createTopicP}}</p>
        </div>

        <div class="info">
          <div class="title">
            <div class="title-left">
              <div>
                <p>{{locale.owner}}</p>
                <div>
                  <div class="avatar"></div>
                  <p>Alex</p>
                </div>
              </div>
              <div></div>
            </div>
            <div class="title-right">
              <p>{{locale.topicName}}</p>
              <input type="text">
            </div>
          </div>
          <div class="desc">
            <p v-html="locale.topicDesc"></p>
          </div>
          <div class="user-desc">
            <h3>{{locale.description}}</h3>
            <input type="text">
          </div>
        </div>

        <div class="intro">
          <div>
            <div></div>
          </div>
          <div>
            <book-icon size="34"/>
          </div>
          <div>
            <h4>{{locale.public}}</h4>
            <p>{{locale.publicDesc}}</p>
          </div>
        </div>

        <div class="entry">
          <ul>
            <li>
              <div class="entry-avatar">#</div>
              <div class="middle">
                <h3>{{locale.entryContent}}</h3>
                <p>{{locale.entryContentDesc}}</p>
              </div>
              <div class="select-entry">
                {{locale.selectEntry}}
              </div>
            </li>
            <li>
              <div class="entry-avatar">#</div>
              <div class="middle">
                <h3>{{locale.entryRelated}}</h3>
                <p>{{locale.entryRelatedDesc}}</p>
              </div>
              <div class="select-entry">
                {{locale.selectEntry}}
              </div>
            </li>
            <p>
              <alert-circle-icon size="14"/>
              {{locale.entryDesc}}
            </p>
          </ul>
        </div>

        <div class="button">
          {{locale.createTopic}}
        </div>
      </div>
    </main>

    <footer>
      <bottom-component background-color="#fff"/>
    </footer>
  </div>
</template>

<script>
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import TopBar from "@/common/components/TopBarComponent";
import {AlertCircleIcon,BookIcon} from "vue-feather-icons"
export default {
  name: "Index",
  components: {
    TopBar,
    BottomComponent,
    AlertCircleIcon,BookIcon,
  },
  data() {
    return {
      locale:this.$locale,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  width: 100%;
  margin: 40px auto;
  text-align: start;

  .content {
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .header {
      width: 100%;
      padding-bottom: 8px;
      margin-bottom: 32px;
      font-size: 14px;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      h3 {
        margin-bottom: 8px;
        font-size: 22px;
      }

      p {
        margin-bottom: 16px;
      }
    }

    .info {
      width: 100%;
      margin-top: 32px;
      padding-bottom: 16px;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      .title {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .title-left {
          margin-top: 4px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;

          > div:first-child {
            > p {
              margin-bottom: 6px;
              font-size: 14px;
            }
            > div {
              padding: 5px 16px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              border: 1px solid $index-page-main-border-color-grey;
              background-color: $index-page-main-background-color-grey;
              border-radius: 6px;

              .avatar {
                margin-right: 4px;
                width: 20px;
                height: 20px;
                clip-path: circle(40%);
                background-color: #2ea44f;
              }
            }
          }

          > div:last-child {
            width: 24px;
            height: 2px;
            background-color: $index-page-main-background-color-grey-4;
            transform: rotateZ(-60deg);
            margin-bottom: 16px;
          }
        }

        .title-right {
          margin-top: 4px;

          > p {
            margin-bottom: 6px;
            font-size: 14px;
          }

          input {
            width: 250px;
            padding: 8px 16px;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            background-color: $index-page-main-background-color-grey;
            &:focus {
              border-color: $index-page-main-middle-font-color-blue;
              box-shadow: $color-state-focus-shadow;
            }
          }
        }
      }

      .desc {
        margin: 8px 0;
        font-size: 14px;
      }

      .user-desc {
        width: 100%;
        margin: 16px 0 0;

        h3 {
          margin-bottom: 6px;
        }

        input {
          width: 100%;
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          background-color: $index-page-main-background-color-grey;
          &:focus {
            border-color: $index-page-main-middle-font-color-blue;
            box-shadow: $color-state-focus-shadow;
          }
        }

      }
    }

    .intro {
      width: 100%;
      border-bottom: 1px solid $index-page-main-border-color-grey;
      padding: 16px 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      > div {

        &:first-child {
          width: 13px;
          height: 13px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid $index-page-main-background-color-blue;
          border-radius: 50%;
          margin-right: 4px;
          margin-top: 4px;

          > div {
            width: 8px;
            height: 8px;
            clip-path: circle(40%);
            background-color: $index-page-main-background-color-blue;
          }
        }

        &:last-child {
          margin-left: 4px;
          h4 {
            margin-bottom: 4px;
            font-size: 16px;
            font-style: italic;
          }
          p {
            font-size: 14px;
          }
        }
      }
    }

    .entry {
      padding: 16px 0;
      width: 100%;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        li {
          position: relative;
          width: 90%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 16px;
          margin: 4px 32px;
          border-bottom: 1px solid $index-page-main-border-color-grey;

          .entry-avatar {
            width: 48px;
            height: 48px;
            background-color: $index-page-main-background-color-grey-7;
            border-radius: 50%;
            font-size: 28px;
            text-align: center;
            line-height: 48px;
            margin-right: 16px;
          }

          .middle {
            h3 {
              margin-bottom: 4px;
              font-size: 16px;
            }

            p {
              font-size: 12px;
            }
          }

          .select-entry {
            position: absolute;
            top: 0;
            right: 0;
            border: 1px solid $index-page-main-border-color-grey;
            padding: 5px 12px;
            border-radius: 6px;
            font-size: 14px;

            &:hover {
              cursor: pointer;
              box-shadow: $color-shadow-large;
            }
          }
        }

        p {
          width: 100%;
          margin-top: 16px;
          font-size: 14px;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          svg {
            margin-right: 4px;
          }
        }
      }
    }

    .button {
      margin-top: 15px;
      border-radius: 6px;
      background-color: $index-page-main-background-color-green;
      color: white;
      padding: 5px 16px;
      font-size: 14px;

      &:hover {
        cursor: pointer;
      }
    }

  }

}

footer {
  border-top: 1px solid $index-page-main-border-color-grey;
}

</style>