<template>
  <div class="wallet-wrapper">
    <div class="header">
      <search-component
          :url="'/api/post/select/search/me/publicComment'"
          :show-entry-list-data="showEntryListData"
          @searchResultData="ret=>showBillListData = ret"
      />
    </div>

    <ul>
      <div>
        <div class="money-left">Balance</div>
        <div class="money-right">${{showBillListData.balance}}</div>
      </div>

      <li v-for="(item,key) in showBillListData.billAbsList" :key="key">
        <div class="left" v-if="item.positive === '+'">
          <plus-circle-icon/>
        </div>
        <div class="left" v-else>
          <minus-circle-icon/>
        </div>
        <div class="middle">
          <h3>{{item.topicTitle}}</h3>
          <p>
            <span>账单号:{{item.billUUID}}</span>
            <span>类型:{{item.type}}</span>
          </p>
          <div class="buy-time" v-if="item.positive === '+'">售卖于{{item.sellingTime}}天前</div>
          <div class="buy-time" v-else>购买于{{item.buyTime}}天前</div>
        </div>
        <div class="right-plus" v-if="item.positive === '+'">
          +${{item.getPrice}}c
        </div>
        <div class="right-sub" v-else>
          -${{item.getPrice}}c
        </div>
      </li>
    </ul>

    <page-button-component
        total-page="20"
    />
  </div>
</template>

<script>
import {PlusCircleIcon, MinusCircleIcon} from "vue-feather-icons";
import PageButtonComponent from "@/common/components/PageButtonComponent";
import SearchComponent from "@/common/components/repositoryPage/SearchComponent";
import {HttpPost} from "@/http/indexPage";

export default {
  name: "WalletComponent",
  components: {
    PageButtonComponent,
    SearchComponent,
    PlusCircleIcon, MinusCircleIcon,
  },
  data() {
    return {
      locale: this.$locale,

      showEntryListData: Object,

      showBillListData: [],
      balance: Object
    }
  },
  methods: {
    initShowBillListData() {
      HttpPost(`/api/post/select/me/billInfos`).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.showBillListData = ret.data
      }).catch(e=>console.log(e))
    },
    initEntryListData() {
      HttpPost(`/api/post/select/me/publicComment/all/entry`).then(ret=>{
        let res = ret.data.code.split(" ")
        if (res[0] !== "200") {
          this.$message.error(res[1])
          return
        }

        this.showEntryListData = ret.data.entryAbsList
      }).catch(e=>console.log(e))
    },

    initData() {
      this.initEntryListData()
      this.initShowBillListData()
    }
  },
  mounted() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.wallet-wrapper {
  > ul {
    > div {
      font-size: 24px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0;
      border-bottom: 1px solid $index-page-main-border-color-grey;
    }

    > li {
      padding: 24px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        margin-right: 16px;
      }

      .middle {
        flex: auto;

        > div {
          font-size: 12px;
        }

        > p {
          font-size: 12px;

          > span {
            margin-right: 16px;
          }
        }
      }

      .right-plus {
        font-size: 24px;
        color: $index-page-main-background-color-green;
      }

      .right-sub {
        font-size: 24px;
        color: $index-page-main-middle-font-color-blue-3;
      }

    }
  }
}

</style>