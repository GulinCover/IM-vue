import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import data from "@/locale/zh_CN.json"
import "@/plugins/elementui.js"

Vue.config.productionTip = false
Vue.prototype.$isCN = true
Vue.prototype.$locale = data

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
