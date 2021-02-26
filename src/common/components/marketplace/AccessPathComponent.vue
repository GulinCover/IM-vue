<template>
  <div class="access-path-wrapper">
    <div class="access-path">
      <a href="">Marketplace</a>/
      <a href="">{{level2}}</a>/
      {{level3}}
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessPathComponent",
  props:[
      "level2",
      "level3"
  ],
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.access-path-wrapper {
  .access-path {
    padding: 16px 0;
    font-size: 14px;
    text-align: start;

    a {
      font-size: 14px;
      margin-right: 4px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>