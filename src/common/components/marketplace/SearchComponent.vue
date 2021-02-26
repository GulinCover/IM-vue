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
    jumpTo(search,content) {
      if (content === "") return
      let url = "/marketplace/search?"

      let lst = this.$route.fullPath.split("?")
      if (lst.length > 1) {
        let flag = true
        let query = lst[1]
        let list = query.split("&")
        list.forEach(it=>{
          if (search === it.split("=")[0]) {
            url += search+"="+content+"&"
            flag = false
          } else {
            url += it.split("=")[0] +"="+it.split("=")[1]+"&"
          }
        })
        if (flag) {
          url += search+"="+content+"&"
        }
        url = url.substr(0,url.length - 1)
      } else {
        url += search +"="+content
      }

      window.open(url,"_self")
    },

    initData() {
      if (this.$route.query.blurry !== undefined) {
        this.searchContent = this.$route.query.blurry
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