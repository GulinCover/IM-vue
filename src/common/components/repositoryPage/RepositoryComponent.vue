<template>
  <div class="repository-wrapper">
    <div class="header">
      <div class="search">
        <input v-model="searchContent" type="text" @keydown.enter="search" :placeholder="locale.publicTopicPageSearchPlaceholder">
      </div>
    </div>

    <ul>
      <li v-for="(item,key) in showConsumableListData" :key="key">
        <div>
          <h3>{{ item.topicTitle }}</h3>
          <p>
            <span>类型:{{ item.type }}</span>
            <span>账单号:{{ item.consumableUUID }}</span>
            <span>成功购买于{{ item.buyTime }}天前</span>
          </p>
          <p>
            <span @click="showUseInfo">使用警示...</span>
            <span class="use-button" @click="currentPrice(item.buyPrice,item.consumableId,item.consumableUUID)">使用</span>
          </p>
        </div>
      </li>

    </ul>

    <div class="page-button">
      <page-button-component
          :total-page="20"
      />
    </div>

    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        v-loading="loading"
    >
      <span>确定消耗</span>
      <span style="color: red">{{currentShowPrice}}</span>
      <span>c进行使用?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="useConsumable">继续</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import {HttpPost} from "@/http/indexPage";
import PageButtonComponent from "@/common/components/PageButtonComponent";

export default {
  name: "RepositoryComponent",
  components: {
    PageButtonComponent
  },
  data() {
    return {
      locale: this.$locale,

      loading:false,
      dialogVisible: false,
      currentShowPrice: "",
      currentUseConsumableId: "",
      currentUseConsumableUUID: "",

      searchContent:"",

      showConsumableListData: []
    }
  },
  methods: {
    search() {
      if (this.searchContent === "") return
      let data = {
        search_content:this.searchContent,
        page:this.$route.query.page
      }
      HttpPost("/api/post/select/search/me/consumableInfos",data).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.showConsumableListData = ret.data.consumableInfoAbsList
      }).catch(e=>console.log(e))
    },

    useConsumable() {
      this.loading = true
      let data = {
        consumable_id:this.currentUseConsumableId,
        consumable_UUID: this.currentUseConsumableUUID
      }
      HttpPost("/api/post/update/use/consumableInfo",data).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }
        this.loading = false
        this.dialogVisible = false
        location.reload()
      }).catch(e=>{
        console.log(e)
        this.loading = false
      })
    },
    currentPrice(currentPrice,currentConsumableId,currentConsumableUUID) {
      this.currentShowPrice = currentPrice
      this.currentUseConsumableId = currentConsumableId
      this.currentUseConsumableUUID = currentConsumableUUID
      this.dialogVisible = true
    },

    showUseInfo() {
      this.$message.warning("使用时将额外消耗购买价格的5%硬币,请慎重使用.")
    },

    initShowConsumableListData() {
      HttpPost(`/api/post/select/me/consumableInfos`).then(ret => {
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.showConsumableListData = ret.data.consumableInfoAbsList
      }).catch(e => console.log(e))
    },
    initData() {
      this.initShowConsumableListData()
    }
  },
  mounted() {
    this.initData()
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
        width: 100%;

        input {
          border-radius: 6px;
          border: 1px solid $index-page-main-border-color-grey;
          padding: 5px 12px;
          margin-right: 16px;
          width: 100%;
          height: 100%;

          &:focus {
            box-shadow: $color-state-focus-shadow;
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
    }
  }

  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: $middle) {
      grid-template-columns: 1fr 1fr;
    }

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

      @media screen and (max-width: $middle) {
        &:nth-child(2n + 1) {
          padding: 12px 24px 12px 0;
        }

        &:nth-child(2n+2) {
          padding: 12px 0 12px 0;
        }
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

            span.use-button {
              color: $index-page-main-background-color-green;
            }
          }

          > span {
            margin-right: 6px;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  .page-button {
    padding-top: 40px;
    display: flex;
    justify-content: center;
  }
}

</style>