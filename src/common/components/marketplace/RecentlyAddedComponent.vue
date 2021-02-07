<template>
  <div class="recently-added-wrapper">
    <h3>最新更新</h3>
    <ul>
      <li>
        <a href="">
          <div class="avatar">#</div>
          <div class="content">
            <h3>test</h3>
            <p>this is a topic desc</p>
            <p>By 66</p>
            <p>当前: 66c</p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="avatar">#</div>
          <div class="content">
            <h3>test</h3>
            <p>this is a topic desc</p>
            <p>By 66</p>
            <p>当前: 66c</p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="avatar">#</div>
          <div class="content">
            <h3>test</h3>
            <p>this is a topic desc</p>
            <p>By 66</p>
            <p>当前: 66c</p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="avatar">#</div>
          <div class="content">
            <h3>test</h3>
            <p>this is a topic desc</p>
            <p>By 66</p>
            <p>当前: 66c</p>
          </div>
        </a>
      </li>
    </ul>
    <a href="">浏览全部</a>
  </div>
</template>

<script>
export default {
name: "RecentlyAddedComponent"
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

@media screen and (min-width: $max) {
  .recently-added-wrapper {
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
            height: 56px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: $color-shadow-large;
          }

          .content {
            width: auto;
            padding: 0 16px;
            text-align: start;
            line-height: 1.25;

            p {
              font-size: 14px;
              color: $index-page-main-font-color-grey-3;
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
    }
  }
}

@media screen and (max-width: $max) and (min-width: $middle) {
  .recently-added-wrapper {
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
            height: 56px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: $color-shadow-large;
          }

          .content {
            width: auto;
            padding: 0 16px;
            text-align: start;
            line-height: 1.25;

            p {
              font-size: 14px;
              color: $index-page-main-font-color-grey-3;
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
    }
  }
}

@media screen and (max-width: $middle) {
  .recently-added-wrapper {
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
            height: 56px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: $color-shadow-large;
          }

          .content {
            width: auto;
            padding: 0 16px;
            text-align: start;
            line-height: 1.25;

            p {
              font-size: 14px;
              color: $index-page-main-font-color-grey-3;
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
    }
  }
}

</style>