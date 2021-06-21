
import Vue from 'vue'
import VueRouter from "vue-router";

import NewsPage from "../pages/home/NewsPage.vue";
import SearchPage from "../pages/search/SearchPage.vue";
import CirclePage from "../pages/circle/CirclePage.vue";
import CircleWebPage from '../pages/circle/CircleWebPage.vue';
import SettingPage from "../pages/setting/SettingPage.vue";
import PasswordPage from "../pages/setting/PasswordPage.vue";
import MainTab from "../components/MainTab.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'root',
            component:MainTab,
        },
        {
            path:'/NewsPage',
            name:'NewsPage',
            component:NewsPage,
        },
        {
            path:'/SearchPage',
            name:'Category',
            component:SearchPage,
        },
        {
            path:'/CirclePage',
            name:'Brand',
            component:CirclePage,
        },
        {
            path:'/SettingPage',
            name:'Mine',
            component:SettingPage,
        },
        {
            path:'/PasswordPage',
            name:'Password',
            component:PasswordPage,
        },
        {
            path:'/CircleWebPage',
            name:'CircleWebPage',
            component:CircleWebPage,
        },
    ],
    mode:'hash',
});

export default router;
