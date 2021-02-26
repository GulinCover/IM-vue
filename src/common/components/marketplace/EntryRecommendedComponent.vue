<template>
  <div class="entry-recommended-wrapper">
    <h3>{{ele.entryName}}</h3>
    <p>{{ele.entryDesc}}</p>
    <ul>
      <li v-for="(item,key) in ele.articleInfoAbsList" :key="key">
        <a :href="`/marketplace/detail/${item.articleId}`" target="_blank">
          <div class="avatar">
            <img :src="item.userAvatar" alt="">
          </div>
          <div class="content" v-if="item.articleType === 'topic'">
            <h3>{{item.topicTitle}}</h3>
            <p>{{item.topicDesc}}</p>
            <p>By {{item.price}}</p>
            <p>当前: {{item.bidPrice}}c</p>
          </div>
          <div class="content" v-else>
            <h3>{{item.nickname}}</h3>
            <p>By {{item.price}}</p>
            <p>当前: {{item.bidPrice}}c</p>
          </div>
        </a>
      </li>
    </ul>
    <a :href="`/marketplace/search?entry_name=${ele.entryName}`" target="_blank">浏览全部</a>
  </div>

</template>

<script>
export default {
  name: "EntryRecommendedComponent",
  props: [
    "ele"
  ]
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

@media screen and (min-width: $max) {
  .entry-recommended-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > h3 {
      width: 100%;
      text-align: start;
      margin: 16px 0;
      font-size: 18px;
    }

    > p {
      font-size: 12px;
      text-align: start;
      width: 100%;
      margin-bottom: 10px;
    }

    ul {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      li {
        margin-bottom: 24px;

        a {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .avatar {
            width: 56px;
            min-width: 56px;
            height: 56px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: $color-shadow-medium;
            transition: all .2s;

            img {
              width: inherit;
              height: inherit;
            }

            &:hover {
              box-shadow: $color-shadow-extra-large;
              transform: translateY(-5px);
            }
          }

          .content {
            width: auto;
            padding: 0 16px;
            text-align: start;
            line-height: 1.25;

            p {
              font-size: 12px;
              margin-top: 4px;
              color: $index-page-main-font-color-grey-3;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }

    > a {
      width: 100%;
      text-align: start;
      font-size: 12px;
      margin-bottom: 40px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media screen and (max-width: $max) and (min-width: $middle) {
  .entry-recommended-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > h3 {
      width: 100%;
      text-align: start;
      margin: 16px 0;
      font-size: 18px;
    }

    > p {
      font-size: 12px;
      text-align: start;
      width: 100%;
      margin-bottom: 10px;
    }

    ul {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      li {
        margin-bottom: 24px;

        a {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .avatar {
            width: 56px;
            min-width: 56px;
            height: 56px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: $color-shadow-medium;
            transition: all .2s;

            img {
              width: inherit;
              height: inherit;
            }

            &:hover {
              box-shadow: $color-shadow-extra-large;
              transform: translateY(-5px);
            }
          }

          .content {
            width: auto;
            padding: 0 16px;
            text-align: start;
            line-height: 1.25;

            p {
              font-size: 12px;
              margin-top: 4px;
              color: $index-page-main-font-color-grey-3;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }

    > a {
      width: 100%;
      text-align: start;
      font-size: 12px;
      margin-bottom: 40px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media screen and (max-width: $middle) {
  .entry-recommended-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > h3 {
      width: 100%;
      text-align: start;
      margin: 16px 0;
      font-size: 18px;
    }

    > p {
      font-size: 12px;
      text-align: start;
      width: 100%;
      margin-bottom: 10px;
    }

    ul {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;

      li {
        margin-bottom: 24px;

        a {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .avatar {
            width: 56px;
            min-width: 56px;
            height: 56px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: $color-shadow-medium;
            transition: all .2s;

            img {
              width: inherit;
              height: inherit;
            }

            &:hover {
              box-shadow: $color-shadow-extra-large;
              transform: translateY(-5px);
            }
          }

          .content {
            width: auto;
            padding: 0 16px;
            text-align: start;
            line-height: 1.25;

            p {
              font-size: 12px;
              margin-top: 4px;
              color: $index-page-main-font-color-grey-3;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }

    > a {
      width: 100%;
      text-align: start;
      font-size: 12px;
      margin-bottom: 40px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>