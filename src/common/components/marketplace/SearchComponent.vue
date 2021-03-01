<template>
  <div class="search-wrapper">
    <div class="search"
         @focusin="isActive = true"
         @focusout="isActive = false"
         :class="{'is-active':isActive}">
      <search-icon :size="'18'"/>
      <input type="text"
             @keyup.enter="jumpTo('blurry',searchContent)"
             v-model="searchContent">
    </div>
  </div>
</template>

<script>
import {SearchIcon} from "vue-feather-icons"

export default {
  name: "SearchComponent",
  components: {
    SearchIcon,
  },
  data() {
    return {
      isActive: false,
      searchContent: "",
    }
  },
  methods: {
    jumpTo(search, content) {
      if (content === "") return

      window.localStorage.setItem("auctionSearchContent", this.searchContent)

      let inputParams = []
      let inputContent = content.split(" ")
      inputContent = inputContent.filter(s=>{
        return s !== ""
      })

      inputContent.forEach(it => {
        let delimiters = it.split(":")
        delimiters = delimiters.filter(s=>{
          return s !== ""
        })
        if (delimiters.length > 1) {
          if (delimiters[0] === "entry") {
            inputParams.push("entry=" + delimiters[1])
          } else if (delimiters[0] === "type") {
            inputParams.push("type=" + delimiters[1])
          } else if (delimiters[0] === "time") {
            inputParams.push("public_time=" + delimiters[1])
          } else if (delimiters[0] === "content") {
            inputParams.push("blurry=" + delimiters[1])
          } else if (delimiters[0] === "page") {
            inputParams.push("page=" + delimiters[1])
          }

        } else {
          inputParams.push("blurry=" + content)
        }
      })

      inputParams = inputParams.filter(s=>{
        return s !== ""
      })

      let url = "/marketplace/search?"

      let urlQuery = this.$route.fullPath.split("?")
      let urlQuerys = []
      let urlQuerySet = []
      let urlQueryCompleteSet = []
      if (urlQuery.length > 1) {
        urlQuerys = urlQuery[1].split("&")
        urlQuerys = urlQuerys.filter(s=>{
          return s !== ""
        })

        for (var i = 0; i < urlQuerys.length; ++i) {
          let el = urlQuerys[i].split("=")
          if (urlQuerySet.length === 0) {
            urlQuerySet.push(el[0])
            urlQueryCompleteSet.push(urlQuerys[i])
            continue
          }

          let flag = true
          for (var j = 0; j < urlQuerySet.length; ++j) {
            if (el[0] === urlQuerySet[j]) {
              flag = false
            }
          }
          if (flag) {
            urlQuerySet.push(el[0])
            urlQueryCompleteSet.push(urlQuerys[i])
          }
        }
      }
      else {
        urlQueryCompleteSet.push(inputParams.toString())
      }

      urlQueryCompleteSet = urlQueryCompleteSet.filter(s=>{
        return s !== ""
      })

      let flag = []
      inputParams.forEach((item,key)=>{
        urlQueryCompleteSet.forEach((it,k)=>{
          if (item.split("=")[0] === it.split("=")[0]) {
            urlQueryCompleteSet[k] = item
          } else {
            flag.push(key)
          }
        })
      })
      flag.forEach(k=>{
        urlQueryCompleteSet.push(inputParams[k])
      })

      let urlParams = ["entry_name", "entry", "type", "public_time", "blurry", "page"]
      urlParams.forEach(item => {
        let flag = true
        for (var i = 0; i < urlQueryCompleteSet.length; ++i) {
          if (item === urlQueryCompleteSet[i].split("=")[0]) {
            url += urlQueryCompleteSet[i]+"&"
            flag = false
            break
          }
        }
        if (flag) {
          url += item + "=&"
        }
      })

      window.open(url,"_self")
    },

    initData() {
      if (this.$route.query.blurry !== undefined) {
        this.searchContent = window.localStorage.getItem("auctionSearchContent")
      }
    }
  },
  mounted() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.search-wrapper {
  .search {
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid $index-page-main-border-color-grey;
    background: white;
    text-align: start;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &.is-active {
      box-shadow: $color-state-focus-shadow;
    }

    svg {
      margin-right: 10px;
    }

    input {
      border: none;
      width: 100%;
      height: 100%;
    }
  }
}

</style>