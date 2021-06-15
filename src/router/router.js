
import Vue from 'vue'
import VueRouter from "vue-router";

import NewsPage from "../pages/home/NewsPage";
import SearchPage from "../pages/search/SearchPage";
import CirclePage from "../pages/circle/CirclePage";
import CircleWebPage from '../pages/circle/CircleWebPage';
import SettingPage from "../pages/setting/SettingPage";
import PasswordPage from "../pages/setting/PasswordPage";
import MainTab from "../components/MainTab";

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
