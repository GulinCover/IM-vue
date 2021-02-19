<template>
  <div class="topic-page-wrapper">
    <header>
      <top-bar/>
    </header>

    <main>
      <nav-component
          :path-name="this.$route.name"
      />

      <div class="topic-desc">
        <h2>{{locale.topicPageH2}}</h2>
        <p>{{locale.topicPageDesc}}</p>
      </div>

      <ul class="topic-recommend">
        <li v-for="(item, key) in recommendEntryData" :key="key">
          <div>
            <div v-if="recommendedLikeSwitch[key] === 0" @click.stop="likeTo(item.entryId,0)">
              <star-icon :size="'16'"/>
            </div>
            <div @click.stop="popRightInfo" v-else>
              <thumbs-up-icon :size="'16'"/>
            </div>
            <el-dialog
                v-loading="fullscreenLoading"
                title="提示"
                :visible.sync="dialogVisible1"
                width="30%">
              <span>点赞会扣除两枚硬币,请勿误操作.</span>
              <span slot="footer" class="dialog-footer">
              <el-button @click.stop="dialogVisible = false">取 消</el-button>
              <el-button type="primary"
                         @click.stop="okToLike(0)"
              >确 定</el-button>
            </span>
            </el-dialog>
            <div class="picture" @click="jumpTo(item.entryId)">
              <img :src="item.entryAvatar" alt="">
            </div>
            <h3>{{item.entryName}}</h3>
            <p>{{item.entryDesc}}</p>
          </div>
        </li>
      </ul>

      <div class="topic-content">
        <div class="left">
          <h3>{{locale.topicPageAllTopicEntry}}</h3>
          <ul>
            <li v-for="(item, key) in allEntryData" :key="key">
              <div @click="jumpTo(item.entryId)" >
                <img :src="item.entryAvatar" alt="">
              </div>
              <div>
                <h3>{{item.entryName}}</h3>
                <p>{{item.entryDesc}}</p>
              </div>

              <div @click="likeTo(item.entryId,1)" class="like-button" v-if="allLikeSwitch[key] === 0">
                <star-icon :size="'16'"/>
                Star
              </div>
              <div @click="popRightInfo" class="like-button" v-else>
                <thumbs-up-icon :size="'16'"/>
              </div>
              <el-dialog
                  v-loading="fullscreenLoading"
                  title="提示"
                  :visible.sync="dialogVisible2"
                  width="30%">
                <span>点赞会扣除两枚硬币,请勿误操作.</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click.stop="dialogVisible = false">取 消</el-button>
                  <el-button type="primary"
                             @click.stop="okToLike(1)"
                  >确 定</el-button>
                </span>
              </el-dialog>
            </li>
          </ul>
          <div v-if="inEnd" class="more-button">more</div>
          <div @click="loadMore" v-else class="more-button">more</div>
        </div>

        <div class="right">
          <h3>{{locale.topicPageRelatedTopicEntry}}</h3>
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
          :locale="locale"
          :bottom-data="bottomData"
      />
    </footer>

  </div>
</template>

<script>
import TopBar from "@/common/components/TopBarComponent";
import NavComponent from "@/common/components/topicPage/NavComponent";
import BottomComponent from "@/common/components/explorePage/BottomComponent";
import {StarIcon,ThumbsUpIcon} from "vue-feather-icons"
import {HttpGet, HttpPost} from "@/http/indexPage";

export default {
  name: "Index",
  components: {
    BottomComponent,
    NavComponent,
    TopBar,
    StarIcon,ThumbsUpIcon
  },
  data() {
    return {
      locale:this.$locale,
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

      recommendEntryData: [],

      allEntryData:[],
      entryPage: 0,
      inEnd: false,

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

      likeId: null,
      likeFalse: false,
      dialogVisible1: false,
      dialogVisible2: false,
      fullscreenLoading: false,
      recommendedLikeSwitch: [],
      allLikeSwitch: [],
    }
  },
  methods: {
    okToLike(index) {
      if (this.likeId === null) return

      this.fullscreenLoading = true
      let data = {
        "id":`${this.likeId}`,
        "type":"entry"
      }
      HttpPost("/api/post/insert/like",data).then(ret=>{
        let res = ret.data.split(" ")
        if (res[0] !== "200") {
          this.fullscreenLoading = false
          alert(res[1])
          return
        }

        if (index === 0) {
          this.recommendEntryData.forEach((it,k)=>{
            if (it.entryId === this.likeId || it.entryId.toString() === this.likeId.toString()) {
              this.recommendedLikeSwitch[k] = 1
            }
          })
          this.dialogVisible1 = false
        } else {
          this.allEntryData.forEach((it,k)=>{
            if (it.entryId === this.likeId || it.entryId.toString() === this.likeId.toString()) {
              this.allLikeSwitch[k] = 1
            }
          })
          this.dialogVisible2 = false
        }

        this.fullscreenLoading = false
      }).catch(e=>{
        this.fullscreenLoading = false
        console.log(e)
      })

    },

    likeTo(id, index) {
      this.likeId = id
      if (index===0)
        this.dialogVisible1 = true
      else
        this.dialogVisible2 = true
    },

    popRightInfo() {
      const h = this.$createElement;

      this.$notify({
        title: '您已点赞,请勿重复操作',
        message: h()
      });
    },

    jumpTo(web) {
      window.open(`/topic/entry/${web}`,"_blank")
    },

    heightFixed() {
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

    },

    loadMore() {
      this.getAllEntryData()
    },

    getAllEntryData() {
      HttpGet(`/api/get/select/all/EntriesInfo?entry_page=${this.entryPage}`).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          alert(res[1])
          return
        }

        this.allEntryData.push(...ret.data.entryAbsList)
        this.allEntryData.forEach((it,k)=>{
          this.allLikeSwitch[k] = it.isLiked
        })
      }).catch(e=>console.log(e))
      ++this.entryPage
    },

    dataInit() {
      HttpGet("/api/get/select/recommended/EntriesInfo").then(ret=>{
        let res = ret.data.code.split(" ")

        if (res[0] !== "200") {
          alert(res[1])
          return
        }
        this.recommendEntryData = ret.data.entryAbsList
        this.recommendEntryData.forEach((it,k)=>{
          this.recommendedLikeSwitch[k] = it.isLiked
        })
      }).catch(e=>console.log(e))
      this.getAllEntryData()
    }
  },

  mounted() {
    this.heightFixed()
    this.dataInit()
    window.onresize = this.heightFixed

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

        > div {
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

          > div:first-child {
            width: 48px;
            height: 48px;
            position: absolute;
            right: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          > .picture {
            margin: 0 auto;
            width: 56px;
            height: 56px;

            img {
              clip-path: circle(40%);
              width: 56px;
              height: 56px;
              object-fit: cover;
              object-position: top left;
            }

            svg {
              position: absolute;
              top: 16px;
              right: 16px;
            }
          }

          p {
            font-size: 12px;
            margin-bottom: 16px;
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
              width: 64px;
              height: 64px;
              margin-right: 16px;
              border-radius: 6px;
              background: $index-page-main-background-color-blue-2;

              img {
                border-radius: 6px;
                width: 64px;
                height: 64px;
                object-position: top left;
                object-fit: cover;
              }
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

            .like-button {
              font-size: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid $index-page-main-border-color-grey;
              max-width: 72px;
              height: 32px;
              border-radius: 6px;
              padding: 3px 12px;

              &:hover {
                cursor: pointer;
              }

              svg {
                margin-right: 4px;
              }
            }

          }
        }

        .more-button {
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
            cursor: pointer;
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

        > div {
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
            margin: 0 auto;
            width: 56px;
            height: 56px;

            img {
              clip-path: circle(40%);
              width: 56px;
              height: 56px;
              object-fit: cover;
              object-position: top left;
            }


            svg {
              position: absolute;
              top: 16px;
              right: 16px;
            }
          }

          p {
            font-size: 12px;
            margin-bottom: 16px;
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
              width: 64px;
              height: 64px;
              margin-right: 16px;
              border-radius: 6px;
              background: $index-page-main-background-color-blue-2;

              img {
                border-radius: 6px;
                width: 64px;
                height: 64px;
                object-position: top left;
                object-fit: cover;
              }
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

        .more-button {
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
            cursor: pointer;
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

        > div {
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

          > div:first-child {
            width: 48px;
            height: 48px;
            position: absolute;
            right: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          > .picture {
            margin: 0 auto;
            width: 56px;
            height: 56px;

            img {
              clip-path: circle(40%);
              width: 56px;
              height: 56px;
              object-fit: cover;
              object-position: top left;
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
              width: 64px;
              height: 64px;
              margin-right: 16px;
              border-radius: 6px;
              background: $index-page-main-background-color-blue-2;

              img {
                border-radius: 6px;
                width: 64px;
                height: 64px;
                object-position: top left;
                object-fit: cover;
              }
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

        .more-button {
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
            cursor: pointer;
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