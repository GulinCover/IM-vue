<template>
  <div class="create-hot-wrapper">
    <div class="title">
      <h4>{{locale.createHotEntryH3}}</h4>
      <p>{{locale.createHotEntryP}}</p>
    </div>

    <div class="create-content">
      <div class="name">
        <label>{{locale.entryName}}</label>
        <input v-model="entryHotName" type="text">
      </div>
      <div class="desc">
        <label>{{locale.description}}</label>
        <textarea v-model="entryHotDesc"></textarea>
      </div>
      <div class="visibility">
        <h4>{{locale.visibility}}</h4>
        <div class="visibility-content">
          <div class="pattern">
            <div></div>
          </div>
          <div class="visibility-desc">
            <h4>{{locale.public}}</h4>
            <div>{{locale.publicHotEntryDesc}}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-loading="loading" @click="createEntry" ref="bottomButton" class="bottom-button">
      {{locale.createHotEntry}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {
  },
  data() {
    return {
      locale:this.$locale,
      entryHotName: "",
      entryHotDesc: "",
      loading: false
    }
  },
  methods: {
    createEntry() {
      this.loading = true
      setTimeout(()=>this.loading = false, 2000)
    }
  },
  watch: {
    contentName(newVal) {
      if (newVal === "" || this.entryHotName === "" || this.entryHotDesc === "") {
        this.$refs.bottomButton.classList.remove("is-active")
        return
      }
      this.$refs.bottomButton.classList.add("is-active")
    },
    contentDesc(newVal) {
      if (newVal === "" || this.entryHotName === "" || this.entryHotDesc === "") {
        this.$refs.bottomButton.classList.remove("is-active")
        return
      }
      this.$refs.bottomButton.classList.add("is-active")
    }
  },
  computed: {
    contentName() {
      return this.entryHotName
    },
    contentDesc() {
      return this.entryHotName
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/api/GlobalApi.scss";

.create-hot-wrapper {
  max-width: 768px;
  margin: 0 auto;

  .title {
    border-bottom: 1px solid $index-page-main-border-color-grey;
    width: 100%;
    padding-bottom: 32px;

    h4 {
      margin-bottom: 8px;
    }

    p {
      font-size: 12px;
    }
  }

  .create-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 15px 0;

      label {
        margin-bottom: 6px;
        font-size: 16px;
        font-weight: 600;
      }

      input {
        outline: none;
        border: 1px solid $index-page-main-border-color-grey;
        border-radius: 6px;
        padding: 5px 12px;
        width: 440px;
        background-color: $index-page-main-background-color-grey;

        &:focus {
          box-shadow: $color-state-focus-shadow;
        }
      }

      textarea {
        outline: none;
        border: 1px solid $index-page-main-border-color-grey;
        border-radius: 6px;
        padding: 5px 12px;
        width: 100%;
        background-color: $index-page-main-background-color-grey;
        min-height: 150px;
        height: 150px;
        font-size: 14px;
        line-height: 1.5;

        &:focus {
          box-shadow: $color-state-focus-shadow;
        }
      }

    }

    .visibility {
      padding-bottom: 40px;
      border-bottom: 1px solid $index-page-main-border-color-grey;

      h4 {
        margin-bottom: 8px;

      }

      .visibility-content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .pattern {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          border: 2px solid $index-page-main-background-color-blue;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 8px;
          margin-top: 2px;

          > div {
            height: 8px;
            width: 8px;
            border-radius: 50%;
            background-color: $index-page-main-background-color-blue;
          }
        }

        .visibility-desc {
          > div {
            font-size: 12px;
          }
        }
      }
    }
  }

  .bottom-button {
    opacity: .5;
    color: white;
    text-align: center;
    width: 120px;
    margin-top: 12px;
    padding: 5px 12px;
    border-radius: 6px;
    background-color: $index-page-main-background-color-green;

    &.is-active {
      cursor: pointer;
      opacity: 1;
    }
  }
}


</style>