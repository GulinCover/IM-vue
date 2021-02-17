<template>
  <div ref="rightPopShow" id="show">
    <div>
      <h3>{{hData}}</h3>
      <p>{{pData}}</p>
    </div>
    <div @click="closeShow">
      <x-icon :size="'14'"/>
    </div>
  </div>
</template>

<script>
import {XIcon} from "vue-feather-icons"
export default {
  name: "RightPopShowComponent",
  components: {
    XIcon,
  },
  data() {
    return {
      timer: null,

      hData: "",
      pData: "",
    }
  },
  methods: {
    popShow() {
      if (this.timer !== null && this.$store.state.rightPopShow.show !== true) return
      this.hData = this.$store.state.rightPopShow.title
      this.pData = this.$store.state.rightPopShow.message
      let ele = document.querySelector("#show")
      ele.classList.add("is-active")
      this.timer = setTimeout(()=>{
        ele.classList.remove("is-active")
        this.timer = null
      }, 10000)
      this.$store.commit("editShow", false)
    },

    closeShow() {
      document.querySelector("#show").classList.remove("is-active")
      window.clearTimeout(this.timer)
      this.$store.commit("editShow", false)
    }
  },
  computed: {
    notify() {
      return this.$store.state.rightPopShow.show
    }
  },
  watch: {
    notify(val, oldVal) {
      if (val === oldVal) return
      this.popShow()
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

#show {
  text-align: start;
  position: fixed;
  right: -320px;
  top: 48px;
  width: 320px;
  transition: all .5s;
  z-index: 999;
  padding: 24px;
  border: 1px solid $index-page-main-border-color-grey;
  border-radius: 6px;
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(9px);
  box-shadow: $color-shadow-extra-large;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

p {
  font-size: 12px;
  margin-top: 8px;
}

&.is-active {
   right: 48px;
 }
}
</style>