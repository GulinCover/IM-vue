<template>
  <div class="search-wrapper">
    <div class="search"
         @focusin="isActive = true"
         @focusout="isActive = false"
         :class="{'is-active':isActive}">
      <search-icon :size="'18'"/>
      <input type="text"
             @keyup.enter="search"
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
    search() {
      if (this.searchContent === "") return
      window.open(`/marketplace/search?blurry=${this.searchContent}`)
    }
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