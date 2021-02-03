<template>
  <div class="topic-page-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <nav-component
          :path-name="this.$route.name"
          :locate="locate"
      />

      <div class="topic-desc">
        <h2>{{locate.topicPageH2}}</h2>
        <p>{{locate.topicPageDesc}}</p>
      </div>

      <ul class="topic-recommend">
        <li v-for="(item, key) in recommendData" :key="key">
          <a href="">
            <div class="picture">
              <!--            <img :src="item.entryPicture" alt="">-->
              <img src="" alt="">
              <star-icon/>
            </div>
            <h3>{{item.entry}}</h3>
            <p>{{item.entryDesc}}</p>
          </a>
        </li>
      </ul>
      <div class="topic-content">
        <div class="left">
          <h3>{{locate.topicPageAllTopicEntry}}</h3>
          <ul>
            <li v-for="(item, key) in topicsData" :key="key">
              <div>
                <img src="" alt="">
              </div>
              <div>
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
              </div>
              <div>
                <star-icon :size="'16'"/>
                Star
              </div>
            </li>
          </ul>
          <a href="">more</a>
        </div>
        <div class="right">
          <h3>{{locate.topicPageRelatedTopicEntry}}</h3>
          <ul>
            <li v-for="(item, key) in relatedEntryData" :key="key">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>

    </main>

    <footer>
      <bottom-component
          :locate="locate"
          :bottom-data="bottomData"
      />
    </footer>

  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import NavComponent from "@/common/components/topicPage/NavComponent";
import BottomComponent from "@/common/components/explorePage/BottomComponent";
import {StarIcon} from "vue-feather-icons"

export default {
  name: "Index",
  components: {
    BottomComponent,
    NavComponent,
    TopBar,
    StarIcon,
  },
  data() {
    return {
      locate:this.$locate,
      bottomData: {
        first: {
          left: {
            name: 'GitHub',
            h3: "请支持GitHub",
            p: "感谢GitHub的技术支持",
            url: "https://github.com",
          },
          right: [],
        },
        second: [
          {
            name: "@2021GitHub,Inc,",
            url: '',
          },
          {
            name: "Terms",
            url: '',
          },
          {
            name: "Policy",
            url: '',
          },
          {
            name: "What is WeekType?",
            url: '',
          },
        ],
      },

      recommendData: [
        {
          entryId:'1',
          entry: "测试",
          entryPicture: "",
          entryDesc: "this is a entry desc"
        },
        {
          entryId:'1',
          entry: "测试",
          entryPicture: "",
          entryDesc: "this is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry descthis is a entry desc"
        },
        {
          entryId:'1',
          entry: "测试",
          entryPicture: "",
          entryDesc: "this is a entry desc"
        },
      ],
      topicsData:[
        {
          name: "3D",
          desc:"this is a entry desc"
        },
        {
          name: "3D",
          desc:"this is a entry desc"
        },
        {
          name: "3D",
          desc:"this is a entry desc"
        },
        {
          name: "3D",
          desc:"this is a entry desc"
        },
      ],
      relatedEntryData:[
        {
          entryId:"1",
          name:"3eqwD",
        },
        {
          entryId:"1",
          name:"3D",
        },
        {
          entryId:"1",
          name:"eqweqw3D",
        },
        {
          entryId:"1",
          name:"3D",
        },
        {
          entryId:"1",
          name:"3qwD",
        },
        {
          entryId:"1",
          name:"3Dsfaasfasfasfasfasf",
        },
        {
          entryId:"1",
          name:"3Dqwfqw",
        },
        {
          entryId:"1",
          name:"3Deqw",
        },
        {
          entryId:"1",
          name:"3eqwD",
        },
        {
          entryId:"1",
          name:"3D",
        },
      ],
    }
  },
  methods: {
    widthFix() {
      let elements = document.querySelector(".topic-recommend").childNodes

      if (document.body.clientWidth > 543) {
        let max = 0
        elements.forEach(it=>{
          max = max < it.firstChild.getBoundingClientRect().height ? it.firstChild.getBoundingClientRect().height : max
        })

        elements.forEach(it=>{
          it.firstChild.style.height = `${max}px`
        })
      } else {
        elements.forEach(it=>{
          it.firstChild.style.height = ``
        })
      }

      // console.log(123)
    }
  },

  mounted() {
    this.widthFix()
    window.onresize = this.widthFix

    // console.log(elements[0].firstChild.style.height)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

main {

  .topic-desc {
    margin: 0 auto;
    padding: 40px 16px;
    background: $index-page-main-background-color-grey;
    line-height: 1.5;
    border-bottom: 1px solid $index-page-main-border-color-grey;

    h2 {
      font-size: 40px;
    }

    p {
      margin: 0 auto 10px;
      font-size: 14px;
    }
  }

  @media screen and (min-width: $middle) {
    .topic-recommend {
      max-width: 1012px;
      margin: 0 auto 24px;
      padding: 40px 16px 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      li {
        flex: 1;

        > a {
          position: relative;
          padding: 32px;
          margin: 0 16px 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          line-height: 1.5;
          color: $index-page-main-font-color-grey-3;

          > div {
            margin: 0 auto 16px;
            max-width: 48px;
            max-height: 48px;
            min-width: 24px;
            min-height: 24px;
            padding: 8px;
            overflow: hidden;

            img {
              border-radius: 6px;
            }


            svg {
              position: absolute;
              top: 16px;
              right: 16px;
            }
          }

          h3 {

          }

          p {
            font-size: 12px;
          }

        }
      }
    }

    .topic-content {
      max-width: 1012px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0 32px;
      margin: 0 auto;

      .left {
        flex: 3;
        margin-bottom: 48px;

        h3 {
          text-align: start;
        }

        ul {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          li {
            width: 100%;
            border-bottom: 1px solid $index-page-main-border-color-grey;
            padding: 24px 0;
            display: flex;
            justify-content: flex-start;

            div:first-child {
              min-width: 64px;
              max-width: 64px;
              height: 64px;
              background: $index-page-main-background-color-blue-2;
              margin-right: 16px;
              border-radius: 6px;
            }

            div:nth-child(2) {
              width: 100%;

              h3,p{
                margin-top: 4px;
                text-align: start;
              }

              p {
                font-size: 12px;
              }
            }

            div:last-child {
              font-size: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid $index-page-main-border-color-grey;
              max-width: 72px;
              height: 32px;
              border-radius: 6px;
              padding: 3px 12px;

              svg {
                margin-right: 4px;
              }
            }

          }
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          width: 100%;
          margin-top: 24px;
          padding: 8px 6px;
          transition: all .2s;

          &:hover {
            background: $index-page-main-background-color-grey;
          }
        }
      }

      .right {
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-left: 32px;
        padding-left: 32px;

        h3 {
          text-align: start;
          width: 100%;
          font-size: 16px;
          margin-bottom: 8px;
        }

        ul {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;

          li {
            margin: 4px 1.5px 4px 0;
            padding: 0 10px;
            background: $index-page-main-background-color-blue-2;
            border-radius: 16px;
            color: $index-page-main-background-color-blue;

            &:hover {
              background: $index-page-main-background-color-blue-3;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: $middle) and (min-width: $mini) {
    .topic-recommend {
      margin: 0 auto;
      padding: 40px 16px 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;

      li {
        width: 50%;

        > a {
          position: relative;
          padding: 32px;
          margin: 0 16px 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          line-height: 1.5;
          color: $index-page-main-font-color-grey-3;

          > div {
            margin: 0 auto 16px;
            max-width: 48px;
            max-height: 48px;
            min-width: 24px;
            min-height: 24px;
            padding: 8px;
            overflow: hidden;

            img {
              border-radius: 6px;
            }


            svg {
              position: absolute;
              top: 16px;
              right: 16px;
            }
          }

          h3 {

          }

          p {
            font-size: 12px;
          }

        }
      }
    }

    .topic-content {
      max-width: 1012px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0 32px;
      margin: 0 auto;

      .left {
        width: 100%;
        margin-bottom: 48px;

        h3 {
          text-align: start;
        }

        ul {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          li {
            width: 100%;
            border-bottom: 1px solid $index-page-main-border-color-grey;
            padding: 24px 0;
            display: flex;
            justify-content: flex-start;

            div:first-child {
              min-width: 64px;
              max-width: 64px;
              height: 64px;
              background: $index-page-main-background-color-blue-2;
              margin-right: 16px;
              border-radius: 6px;
            }

            div:nth-child(2) {
              width: 100%;

              h3,p{
                margin-top: 4px;
                text-align: start;
              }

              p {
                font-size: 12px;
              }
            }

            div:last-child {
              font-size: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid $index-page-main-border-color-grey;
              max-width: 72px;
              height: 32px;
              border-radius: 6px;
              padding: 3px 12px;

              svg {
                margin-right: 4px;
              }
            }

          }
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          width: 100%;
          margin-top: 24px;
          padding: 8px 6px;
          transition: all .2s;

          &:hover {
            background: $index-page-main-background-color-grey;
          }
        }
      }

      .right {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;

        h3 {
          text-align: start;
          width: 100%;
          font-size: 16px;
          margin-bottom: 8px;
        }

        ul {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;

          li {
            margin: 4px 1.5px 4px 0;
            padding: 0 10px;
            background: $index-page-main-background-color-blue-2;
            border-radius: 16px;
            color: $index-page-main-background-color-blue;

            &:hover {
              background: $index-page-main-background-color-blue-3;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: $mini){
    .topic-recommend {
      margin: 0 auto;
      padding: 40px 16px 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;

      li {
        width: 100%;

        > a {
          position: relative;
          padding: 32px;
          margin: 0 16px 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          line-height: 1.5;
          color: $index-page-main-font-color-grey-3;

          > div {
            margin: 0 auto 16px;
            max-width: 48px;
            max-height: 48px;
            min-width: 24px;
            min-height: 24px;
            padding: 8px;
            overflow: hidden;

            img {
              border-radius: 6px;
            }


            svg {
              position: absolute;
              top: 16px;
              right: 16px;
            }
          }

          h3 {

          }

          p {
            font-size: 12px;
          }

        }
      }
    }

    .topic-content {
      max-width: 1012px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0 32px;
      margin: 0 auto;

      .left {
        width: 100%;
        margin-bottom: 48px;

        h3 {
          text-align: start;
        }

        ul {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          li {
            width: 100%;
            border-bottom: 1px solid $index-page-main-border-color-grey;
            padding: 24px 0;
            display: flex;
            justify-content: flex-start;

            div:first-child {
              min-width: 64px;
              max-width: 64px;
              height: 64px;
              background: $index-page-main-background-color-blue-2;
              margin-right: 16px;
              border-radius: 6px;
            }

            div:nth-child(2) {
              width: 100%;

              h3,p{
                margin-top: 4px;
                text-align: start;
              }

              p {
                font-size: 12px;
              }
            }

            div:last-child {
              font-size: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid $index-page-main-border-color-grey;
              max-width: 72px;
              height: 32px;
              border-radius: 6px;
              padding: 3px 12px;

              svg {
                margin-right: 4px;
              }
            }

          }
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          width: 100%;
          margin-top: 24px;
          padding: 8px 6px;
          transition: all .2s;

          &:hover {
            background: $index-page-main-background-color-grey;
          }
        }
      }

      .right {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;

        h3 {
          text-align: start;
          width: 100%;
          font-size: 16px;
          margin-bottom: 8px;
        }

        ul {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;

          li {
            margin: 4px 1.5px 4px 0;
            padding: 0 10px;
            background: $index-page-main-background-color-blue-2;
            border-radius: 16px;
            color: $index-page-main-background-color-blue;

            &:hover {
              background: $index-page-main-background-color-blue-3;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

}

footer > div {
  border: none!important;
}

</style>