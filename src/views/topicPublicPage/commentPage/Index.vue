<template>
  <div class="comment-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <header-component/>

      <div class="content">
        <div class="content-desc">
          <h4>{{locale.topicCommentPageH4}}</h4>
          <p>{{locale.topicCommentPageP}}</p>
        </div>

        <div class="content-wrapper">
          <div class="content-wrapper-title">
            <twitch-icon size="16"/>
            当前共
            <span>1213</span>
            条评论
          </div>

          <div class="content-wrapper-comment">
            <ul>
              <li>
                <div class="tag">
                  <chevron-right-icon size="14"/>
                </div>
                <div class="comment-content">
                  <div class="avatar"></div>
                  <div class="comment-content-wrapper">
                    <div class="user-info">
                      <span>Alex</span>
                      <span>Lv S</span>
                    </div>
                    <div class="detail-comment">
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                    </div>
                    <p>
                      <span>2020/01/01 12:12</span>
                      <span>
                        <thumbs-up-icon size="14"/>
                        12
                      </span>
                      <span>
                        <thumbs-down-icon size="14"/>
                      </span>
                      <span>
                        回复
                      </span>
                      <span>
                        展开
                      </span>
                    </p>
                  </div>
                </div>
                <div class="comment-number">
                  <twitch-icon size="14"/>
                  <span>12</span>
                </div>
              </li>
              <li>
                <div class="tag">
                  <chevron-right-icon size="14"/>
                </div>
                <div class="comment-content">
                  <div class="avatar"></div>
                  <div class="comment-content-wrapper">
                    <div class="user-info">
                      <span>Alex</span>
                      <span>Lv S</span>
                    </div>
                    <div class="detail-comment">
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                    </div>
                    <p>
                      <span>2020/01/01 12:12</span>
                      <span>
                        <thumbs-up-icon size="14"/>
                        12
                      </span>
                      <span>
                        <thumbs-down-icon size="14"/>
                      </span>
                      <span>
                        回复
                      </span>
                      <span>
                        展开
                      </span>
                    </p>
                  </div>
                </div>
                <div class="comment-number">
                  <twitch-icon size="14"/>
                  <span>12</span>
                </div>
              </li>
              <li>
                <div class="tag">
                  <chevron-right-icon size="14"/>
                </div>
                <div class="comment-content">
                  <div class="avatar"></div>
                  <div class="comment-content-wrapper">
                    <div class="user-info">
                      <span>Alex</span>
                      <span>Lv S</span>
                    </div>
                    <div class="detail-comment">
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                      fasfasgasfasdfasdas
                    </div>
                    <p>
                      <span>2020/01/01 12:12</span>
                      <span>
                        <thumbs-up-icon size="14"/>
                        12
                      </span>
                      <span>
                        <thumbs-down-icon size="14"/>
                      </span>
                      <span>
                        回复
                      </span>
                      <span>
                        展开
                      </span>
                    </p>
                  </div>
                </div>
                <div class="comment-number">
                  <twitch-icon size="14"/>
                  <span>12</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="content-bottom-button">
          <ul>
            <div>
              <chevron-left-icon size="14"/>
              <span>PRE</span>
            </div>

            <li class="is-active">1</li>
            <li>2</li>

            <div class="is-active">
              <span>NEXT</span>
              <chevron-right-icon size="14"/>
            </div>
          </ul>
        </div>

        <p>
          <at-sign-icon size="14"/>
          <span v-html="locale.proTip"></span>
        </p>
      </div>
    </main>

    <footer>
      <bottom-component background-color="#fff"/>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import BottomComponent from "@/common/components/marketplace/BottomComponent";
import HeaderComponent from "@/common/components/topicPublicPage/HeaderComponent";
import {AtSignIcon,ChevronLeftIcon,ThumbsUpIcon,ThumbsDownIcon,TwitchIcon,ChevronRightIcon} from "vue-feather-icons"
export default {
  name: "Index",
  components: {
    HeaderComponent,
    BottomComponent,
    TopBar,
    AtSignIcon,ChevronLeftIcon,ThumbsUpIcon,ThumbsDownIcon,TwitchIcon,ChevronRightIcon
  },
  data() {
    return {
      locale:this.$locate
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {
  .content {
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    padding: 0 32px;

    .content-desc {
      padding: 24px;
      border-radius: 6px;
      border: 1px solid $index-page-main-border-color-grey;
      background-color: $index-page-main-background-color-grey;
      font-size: 14px;
      line-height: 1.5;

      h4, p{
        width: 75%;
        margin: 0 auto 8px;
      }
    }

    .content-wrapper {
      margin-top: 16px;

      .content-wrapper-title {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        background-color: $index-page-main-background-color-grey;
        border-bottom: none;
        padding: 16px;
        text-align: start;
        font-size: 12px;
        color: grey;

        span {
          margin: 0 2px;
          font-size: 18px;
          color: black;
        }
      }

      .content-wrapper-comment {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        border-top: none;

        ul {
          li {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            border-top: 1px solid $index-page-main-border-color-grey;

            .tag {
              padding: 8px 0 0 16px;
            }

            .comment-content {
              width: 100%;
              padding: 8px;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;

              .avatar {
                width: 24px;
                height: 24px;
                min-width: 24px;
                min-height: 24px;
                border-radius: 50%;
                background-color: #2ea44f;
                margin-right: 16px;
              }

              .comment-content-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;

                .user-info {
                  padding: 2px 0;

                  span {
                    margin-right: 8px;
                    font-size: 12px;

                    &:last-child {
                      font-style: italic;
                    }
                  }
                }

                .detail-comment {
                  padding: 2px 0;
                  text-align: start;
                }

                > p {
                  padding: 2px 0;
                  font-size: 12px;
                  color: $index-page-main-font-color-grey-3;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;

                  span {
                    margin-right: 16px;
                  }
                }
              }
            }

            .comment-number {
              padding: 8px 16px 0 0;
              font-size: 12px;
              display: flex;
              align-items: flex-start;
            }
          }
        }
      }
    }

    .content-bottom-button {
      margin: 16px 0;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;

        li {
          padding: 5px 10px;
          border: 1px solid white;
          transition: all .2s;

          &:not(:nth-last-child(2)) {
            margin-right: 4px;
          }

          &.is-active {
            background: $index-page-main-background-color-blue;
            color: white;
            border-radius: 6px;
          }

          &:hover {
            cursor: pointer;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
          }
        }

        > div {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 5px 10px;
          border: 1px solid white;
          transition: all .2s;

          &.is-active {
            color: $index-page-main-middle-font-color-blue;
          }

          &.is-active:hover {
            cursor: pointer;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
          }
        }
      }
    }

    > p {
      border-bottom: 1px solid $index-page-main-border-color-grey;
      margin-top: 20px;
      padding-bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-left: 4px;
        font-size: 12px;
        color: grey;
      }
    }
  }
}

</style>