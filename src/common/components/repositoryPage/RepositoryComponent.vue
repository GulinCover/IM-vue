<template>
  <div class="repository-wrapper">
    <div class="header">
      <div class="search">
        <input type="text" :placeholder="locale.publicTopicPageSearchPlaceholder">
      </div>
      <div class="tag">
        <div>
          <span>
          标签:ALL
          </span>
        </div>
        <div>
          <span>模糊查找:无</span>
        </div>
        <div>
          <span>
            NEW
          </span>
        </div>
      </div>
    </div>

    <ul>
      <li>
        <div>
          <h3>Topic</h3>
          <p>
            <span>类型:著述</span>
            <span>账单号:sd142r23t32t3gf</span>
            <span>成功购买于10天前</span>
          </p>
          <p>
            <span @click="useAlert">使用警示...</span>
            <span>使用</span>
          </p>
        </div>
      </li>
      <li>
        <div>
          <h3>Topic</h3>
          <p>
            <span>类型:著述</span>
            <span>账单号:sd142r23t32t3gf</span>
            <span>成功购买于10天前</span>
          </p>
          <p>
            <span @click="useAlert">使用警示...</span>
            <span>使用</span>
          </p>
        </div>
      </li>
      <li>
        <div>
          <h3>Topic</h3>
          <p>
            <span>类型:著述</span>
            <span>账单号:sd142r23t32t3gf</span>
            <span>成功购买于10天前</span>
          </p>
          <p>
            <span @click="useAlert">使用警示...</span>
            <span>使用</span>
          </p>
        </div>
      </li>
      <li>
        <div>
          <h3>Topic</h3>
          <p>
            <span>类型:著述</span>
            <span>账单号:sd142r23t32t3gf</span>
            <span>成功购买于10天前</span>
          </p>
          <p>
            <span @click="useAlert">使用警示...</span>
            <span>使用</span>
          </p>
        </div>
      </li>
      <li>
        <div>
          <h3>Topic</h3>
          <p>
            <span>类型:著述</span>
            <span>账单号:sd142r23t32t3gf</span>
            <span>成功购买于10天前</span>
          </p>
          <p>
            <span @click="useAlert">使用警示...</span>
            <span>使用</span>
          </p>
        </div>
      </li>
      <li>
        <div>
          <h3>Topic</h3>
          <p>
            <span>类型:著述</span>
            <span>账单号:sd142r23t32t3gf</span>
            <span>成功购买于10天前</span>
          </p>
          <p>
            <span @click="useAlert">使用警示...</span>
            <span>使用</span>
          </p>
        </div>
      </li>
      <li>
        <div>
          <h3>Topic</h3>
          <p>
            <span>类型:著述</span>
            <span>账单号:sd142r23t32t3gf</span>
            <span>成功购买于10天前</span>
          </p>
          <p>
            <span @click="useAlert">使用警示...</span>
            <span>使用</span>
          </p>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>

export default {
  name: "RepositoryComponent",
  components: {
  },
  props: [
      "locale"
  ],
  data() {
    return {
      timer: null
    }
  },
  methods: {
    useAlert() {
      let rightPopShow = {
        show: true,
        title: "使用警示",
        message: "一经使用,将不可塑回,请谨慎使用,使用时会消耗购买价格的5%C,请确保余额充足!"
      }

      this.$store.commit("edit",rightPopShow)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.repository-wrapper {
  @media screen and (min-width: $middle) {
    .header {
      padding: 16px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      .search {
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        padding: 5px 12px;
        margin-right: 16px;
        width: 100%;

        input {
          border: none;
          width: 100%;
          height: 100%;
        }
      }

      .tag {
        font-size: 12px;
        min-width: 270px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        div {
          span {
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            padding: 5px 16px;
          }

          &:first-child {
            margin-right: 8px;
          }

          &:last-child {
            margin-left: 16px;
          }
        }
      }
    }
  }

  @media screen and (max-width: $middle) {
    .header {
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      .search {
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        padding: 5px 12px;
        margin-right: 16px;
        width: 100%;
        margin-bottom: 16px;

        input {
          border: none;
          width: 100%;
          height: 100%;
        }
      }

      .tag {
        width: 100%;
        font-size: 12px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        div {
          span {
            border-radius: 6px;
            border: 1px solid $index-page-main-border-color-grey;
            padding: 5px 16px;
          }

          &:first-child {
            margin-right: 8px;
          }

          &:nth-child(2) {
            flex: auto;
          }

          &:last-child {
            margin-left: 16px;
          }
        }
      }
    }
  }

  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    li {
      width: 100%;

      &:nth-child(3n + 1) {
        padding: 12px 24px 12px 0;
      }

      &:nth-child(3n+2) {
        padding: 12px 0 12px 0;
      }

      &:nth-child(3n+3) {
        padding: 12px 0 12px 24px;
      }

      > div {
        border-radius: 6px;
        border: 1px solid $index-page-main-border-color-grey;
        box-shadow: $color-shadow-large;
        padding: 8px;

        > h3 {
          margin-bottom: 8px;
        }

        > p {
          font-size: 12px;
          margin-bottom: 8px;
          display: flex;
          flex-wrap: wrap;

          &:last-child {
            color: $index-page-main-middle-font-color-blue;
            display: flex;
            justify-content: space-between;

            &:hover {
              cursor: pointer;
            }

            span:last-child {
              color: $index-page-main-background-color-green;
            }
          }

          > span {
            margin-right: 6px;
          }
        }
      }
    }
  }
}

</style>