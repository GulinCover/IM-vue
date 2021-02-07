<template>
<div class="search-wrapper">
  <div class="search">
    <search-icon :size="'18'"/>
    <input type="text">
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