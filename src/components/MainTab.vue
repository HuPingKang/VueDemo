<template>
    <div class="hello">
        <van-tabbar safe-area-inset-bottom v-model="active" @change="onChange">
            <van-tabbar-item icon="home-o" >头条</van-tabbar-item>
            <van-tabbar-item icon="diamond-o">热点</van-tabbar-item>
            <van-tabbar-item icon="hot-o">分类</van-tabbar-item>
            <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
        <div v-show="active==0">
           <NewsPage/>
        </div>
        <div id="friends" v-show="active==1">
            <CirclePage/>
        </div>
        <div id="search" v-show="active==2">
            <SearchPage/>
        </div>
        <div id="setting" v-show="active==3">
            <SettingPage/>
        </div>
    </div>
</template>

<script>
    import NewsPage from "../pages/home/NewsPage";
    import SearchPage from "../pages/search/SearchPage";
    import CirclePage from "../pages/circle/CirclePage";
    import SettingPage from "../pages/setting/SettingPage";
    export default {
        name: 'MainTab',
        components: {SettingPage, CirclePage, SearchPage, NewsPage},
        props: {
            msg: String
        },
        data(){
            return {
                active:0,
            }
        },
        methods:{
            onChange: function(index) {
                console.log(index);
                this.active = index;
            },
        }
    }
</script>

<style lang="less" scoped>
    @import "./MainTab";
</style>
