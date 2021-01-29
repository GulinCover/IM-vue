import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import data from "@/locale/zh_CN.json"

Vue.config.productionTip = false
Vue.prototype.$isCN = true
Vue.prototype.$locate = data

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
