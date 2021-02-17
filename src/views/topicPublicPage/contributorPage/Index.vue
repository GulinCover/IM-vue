<template>
  <div class="contributor-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <header-component/>

      <div class="content">
        <h3>感谢所有提供过支持的人</h3>

        <div class="content-switch-button">
          <div class="left" @click="jump('contributor')">贡献者</div>
          <div class="right" @click="jump('manager')">管理者</div>
          <div></div>
        </div>

        <ul>
          <li>
            <div class="avatar"></div>
            <div class="info">
              <div class="name">Alex</div>
              <div class="uuid">1232dsqe</div>
              <div class="desc">
                <share2-icon size="12"/>
                <span>
                  dedasdasdasdasdasdassc
                  dedasdasdasdasdasdassc
                </span>
              </div>
              <div class="button">关注</div>
            </div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="info">
              <div class="name">Alex</div>
              <div class="uuid">1232dsqe</div>
              <div class="desc">
                <share2-icon size="12"/>
                <span>desc</span>
              </div>
              <div class="button">关注</div>
            </div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="info">
              <div class="name">Alex</div>
              <div class="uuid">1232dsqe</div>
              <div class="desc">
                <share2-icon size="12"/>
                <span>desc</span>
              </div>
              <div class="button">关注</div>
            </div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="info">
              <div class="name">Alex</div>
              <div class="uuid">1232dsqe</div>
              <div class="desc">
                <share2-icon size="12"/>
                <span>desc</span>
              </div>
              <div class="button">关注</div>
            </div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="info">
              <div class="name">Alex</div>
              <div class="uuid">1232dsqe</div>
              <div class="desc">
                <share2-icon size="12"/>
                <span>desc</span>
              </div>
              <div class="button">关注</div>
            </div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="info">
              <div class="name">Alex</div>
              <div class="uuid">1232dsqe</div>
              <div class="desc">
                <share2-icon size="12"/>
                <span>desc</span>
              </div>
              <div class="button">关注</div>
            </div>
          </li>
          <li>
            <div class="avatar"></div>
            <div class="info">
              <div class="name">Alex</div>
              <div class="uuid">1232dsqe</div>
              <div class="desc">
                <share2-icon size="12"/>
                <span>desc</span>
              </div>
              <div class="button">关注</div>
            </div>
          </li>
        </ul>

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
import {Share2Icon,ChevronRightIcon,ChevronLeftIcon} from "vue-feather-icons"
export default {
  name: "Index",
  components: {
    HeaderComponent,
    BottomComponent,
    TopBar,
    Share2Icon,ChevronRightIcon,ChevronLeftIcon
  },
  data() {
    return {
      locale:this.$locate
    }
  },
  methods: {
    jump(web) {
      const curr = this.$route.path.split('/')
      if (curr[2] === web) return
      this.$router.push(`/topic/${web}/${curr[3]}`)
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .content-switch-button {
      margin: 0 auto 16px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      .left {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        border-bottom: 1px solid white;
        padding: 8px 16px;
        margin-bottom: -1px;
      }

      .right {
        padding: 8px 16px;
      }

      div:hover {
        cursor: pointer;
      }
    }

    > ul {
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;

      li {
        width: 305px;
        margin: 0 20px 20px 0;
        padding-bottom: 20px;
        border-bottom: 1px solid $index-page-main-border-color-grey;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .avatar {
          margin-right: 16px;
          width: 75px;
          height: 75px;
          min-width: 75px;
          min-height: 75px;
          border-radius: 50%;
          background: #6a737d;
        }

        .info {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: start;

          .name {
            margin-bottom: 1px;
          }

          .uuid {
            font-size: 12px;
            margin-bottom: 4px;
          }

          .desc {
            font-size: 12px;
            margin-bottom: 8px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            span {
              width: 180px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            svg {
              margin-right: 4px;
            }
          }

          .button {
            padding: 3px 12px;
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            background-color: $index-page-main-background-color-grey;
            font-size: 12px;
          }
        }
      }
    }

    .content-bottom-button {
      margin: 16px auto;
      width: 100%;
      border-bottom: 1px solid $index-page-main-border-color-grey;
      padding-bottom: 40px;

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
  }
}

</style>