import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rightPopShow: {
            show: false,
            title: "",
            message: ""
        }
    },
    mutations: {
        edit(state, payload) {
            state.rightPopShow = payload
        },
        editShow(state, payload) {
            state.rightPopShow.show = payload
        }
    },
    actions: {},
    modules: {}
})
