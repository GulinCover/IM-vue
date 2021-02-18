import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import data from "@/locale/zh_CN.json"
import axios from "axios"
import VueAxios from "vue-axios"

Vue.config.productionTip = false
Vue.prototype.$isCN = true
Vue.prototype.$locale = data

Vue.use(VueAxios,axios)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
