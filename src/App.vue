<template>
  <div id="app">
    <right-pop-show-component/>
    <router-view/>
  </div>
</template>

<script>
import RightPopShowComponent from "@/common/components/utils/RightPopShowComponent";
export default {
  components: {RightPopShowComponent}
}
</script>

<style lang="scss">
@import "~@/common/style/init.scss";
</style>