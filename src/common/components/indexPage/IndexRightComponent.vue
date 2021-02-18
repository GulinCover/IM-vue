<template>
  <div class="index-right-component">
    <div class="index-right-content">
      <div class="title">
        <h3>{{locale.indexPageRightTitle}}</h3>
      </div>
      <ul>
        <li v-for="(item, key) in historyInfos" :key="key">
          <a :href="`/topic/public/${item.topicId}`">{{item.topicTitle}}</a>
          <p>{{item.topicDesc}}</p>
          <div>
            <span v-for="(el, k) in item.entryDataList" :key="k">
              {{el.name}}
            </span>
            <span>
              <star-icon :size="'14'"/>
              {{item.likeNumber}}
            </span>
          </div>
        </li>
      </ul>
      <a :href="showMore">{{locale.showMore}}</a>
    </div>
  </div>
</template>

<script>
import {StarIcon} from "vue-feather-icons"
import {HttpPost} from "@/http/indexPage";

export default {
  name: "IndexRightComponent",
  components: {
    StarIcon,
  },
  data() {
    return {
      locale: this.$locale,
      showMore: "/topic",
      historyInfos: [
        {
          id: '1',
          name: "test",
          desc: "haha",
          entries: [
            {
              name: "news1"
            },
            {
              name: "news2"
            },
            {
              name: "news3"
            },
          ],
          starNumber: "100",
        },
        {
          id: '1',
          name: "test",
          desc: "haha",
          entries: [
            {
              name: "news1"
            },
            {
              name: "news2"
            },
            {
              name: "news3"
            },
          ],
          starNumber: "100",
        },
        {
          id: '1',
          name: "test",
          desc: "haha",
          entries: [
            {
              name: "news1"
            },
            {
              name: "news2"
            },
            {
              name: "news3"
            },
          ],
          starNumber: "100",
        },
        {
          id: '1',
          name: "test",
          desc: "haha",
          entries: [
            {
              name: "news1"
            },
            {
              name: "news2"
            },
            {
              name: "news3"
            },
          ],
          starNumber: "100",
        },
        {
          id: '1',
          name: "test",
          desc: "haha",
          entries: [
            {
              name: "news1"
            },
            {
              name: "news2"
            },
            {
              name: "news3"
            },
          ],
          starNumber: "100",
        },
      ],
    }
  },
  methods:{
    dataInit() {
      HttpPost("/api/post/select/me/browseHistory/topics").then(ret=>{
        let lst = ret.data.code.split(" ")
        if (lst[0] !== "200") {
          alert(lst[1])
          return
        }

        this.historyInfos = ret.data.browseHistoryAbsList
      }).catch(e=>{
        console.log(e)
      })
    }
  },
  mounted() {
    this.dataInit()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.index-right-component {
  margin-top: 32px;
  padding-right: 32px;
  width: 100%;
  height: 100%;

  .index-right-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .title {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 4px;
    }

    ul {
      width: 100%;
      font-size: 12px;

      li:last-child {
        border-bottom: 0;
      }

      li {
        width: 100%;
        margin: 8px 0;
        padding: 8px 0;
        border-bottom: 1px solid $index-page-main-border-color-grey;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        a {
          color: $index-page-main-right-font-color-black;
          margin: 0;
        }
        p {
          margin-bottom: 8px;
          color: $index-page-main-font-color-grey-3;
        }
        div {
          color: $index-page-main-font-color-grey-3;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          span {
            margin-right: 8px;

            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        }
      }

    }

    a {
      font-size: 12px;
      color: $index-page-main-font-color-grey-3;
      margin-bottom: 16px;
    }
    a:hover {
      color: $index-page-main-middle-font-color-blue;
    }
  }
}

</style>