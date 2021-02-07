<template>
  <div class="official-recommended-wrapper">
    <h3>官方推荐</h3>
    <ul>
      <li>
        <div>#</div>
        <h3>测试</h3>
      </li>
      <li>
        <div>#</div>
        <h3>测试</h3>
      </li>
      <li>
        <div>#</div>
        <h3>测试</h3>
      </li>
      <li>
        <div>#</div>
        <h3>测试</h3>
      </li>
    </ul>
    <a href="">浏览全部</a>
  </div>
</template>

<script>
export default {
  name: "OfficialRecommendedComponent"
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

@media screen and (min-width: $max) {
  .official-recommended-wrapper {
    width: 100%;

    > h3 {
      width: 100%;
      text-align: start;
      margin: 16px 0;
      font-size: 18px;
    }

    ul {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      li {
        padding: 24px;
        margin-bottom: 24px;
        border-radius: 6px;
        background: white;
        box-shadow: $color-shadow-medium;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        > h3 {
          margin-top: 8px;
        }

        > div {
          margin: 0 auto;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          box-shadow: $color-shadow-medium;
          transition: all .15s;
          position: relative;
          top: 0;

          &:hover {
            top: -5px;
            box-shadow: $color-shadow-large;
            cursor: pointer;
          }
        }


        &:nth-child(even) {
          margin-left: 16px;
        }

        &:nth-child(odd) {
          margin-right: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: $max) and (min-width: $middle) {
  .official-recommended-wrapper {
    width: 100%;

    > h3 {
      width: 100%;
      text-align: start;
      margin: 16px 0;
      font-size: 18px;
    }

    ul {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      li {
        padding: 24px;
        margin-bottom: 24px;
        border-radius: 6px;
        background: white;
        box-shadow: $color-shadow-medium;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        > h3 {
          margin-top: 8px;
        }

        > div {
          margin: 0 auto;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          box-shadow: $color-shadow-medium;
          transition: all .15s;
          position: relative;
          top: 0;

          &:hover {
            top: -5px;
            box-shadow: $color-shadow-large;
            cursor: pointer;
          }
        }


        &:nth-child(even) {
          margin-left: 16px;
        }

        &:nth-child(odd) {
          margin-right: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: $middle) {
  .official-recommended-wrapper {
    width: 100%;

    > h3 {
      width: 100%;
      text-align: start;
      margin: 16px 0;
      font-size: 18px;
    }

    ul {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;

      li {
        padding: 24px;
        margin-bottom: 24px;
        border-radius: 6px;
        background: white;
        box-shadow: $color-shadow-medium;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        > h3 {
          margin-top: 8px;
        }

        > div {
          margin: 0 auto;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          box-shadow: $color-shadow-medium;
          transition: all .15s;
          position: relative;
          top: 0;

          &:hover {
            top: -5px;
            box-shadow: $color-shadow-large;
            cursor: pointer;
          }
        }
      }
    }
  }
}

</style>