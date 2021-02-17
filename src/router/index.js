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
        path:"/marketplace/search",
        name:"marketplaceSearch",
        component:()=>import("@/views/marketplacePage/searchPage/Index")
    },
    {
        path:"/marketplace/detail/:id",
        name:"marketplaceDetail",
        component:()=>import("@/views/marketplacePage/detailPage/Index")
    },
    {
        path:"/repository",
        name:"repository",
        component:()=>import("@/views/repositoryPage/Index")
    },
    {
        path: "/user/manager",
        name: "userManager",
        component: ()=>import("@/views/userManagerPage/Index")
    },
    {
        path: "/topic/public/:id",
        name: "topicPublic",
        component: ()=>import("@/views/topicPublicPage/Index")
    },
    {
        path: "/topic/comment/:id",
        name: "topicComment",
        component: ()=>import("@/views/topicPublicPage/commentPage/Index")
    },
    {
        path: "/topic/talk/:id",
        name: "topicTalk",
        component: ()=>import("@/views/topicPublicPage/talkPage/Index")
    },
    {
        path: "/topic/branch/:id",
        name: "topicBranch",
        component: ()=>import("@/views/topicPublicPage/branchPage/Index")
    },
    {
        path: "/topic/contributor/:id",
        name: "topicContributor",
        component: ()=>import("@/views/topicPublicPage/contributorPage/Index")
    },
    {
        path: "/topic/manager/:id",
        name: "topicManager",
        component: ()=>import("@/views/topicPublicPage/managerPage/Index")
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
