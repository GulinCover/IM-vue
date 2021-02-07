<template>
  <div class="access-path-wrapper">
    <div class="access-path">
      <a href="">Marketplace</a>/
      <a href="">著述</a>/
      测试
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessPathComponent",
  props:[

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