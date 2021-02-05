import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=>import("@/views/Index"),
    },
    {
        path:"/explore",
        name:"explore",
        component:()=>import("@/views/explorePage/Index")
    },
    {
        path:"/topic",
        name:"topic",
        component:()=>import("@/views/topicPage/Index")
    },
    {
        path:"/hot",
        name:"hot",
        component:()=>import("@/views/hotPage/Index")
    },
    {
        path:"/policy",
        name:"policy",
        component:()=>import("@/views/policyPage/Index")
    },
    {
        path:"/marketplace",
        name:"marketplace",
        component:()=>import("@/views/marketplacePage/Index")
    },
    {
        path:"/marketplace/detail/:id",
        name:"marketplaceDetail",
        component:()=>import("@/views/marketplacePage/detailPage/Index")
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
