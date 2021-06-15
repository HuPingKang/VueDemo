<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App',
        beforeCreate() {
            let bodyStyle = document.querySelector('body').style;
            bodyStyle.margin = '0px';
            bodyStyle.backgroundColor = 'white';
            document.querySelector('meta').content = 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no';
        },
        mounted() {
            //vuex响应式：往state里面动态添加属性
            this.$store.commit('addProperty',{key:'nickname',value:'Still、4ever幺惊云'});
            this.$store.commit('addProperty',{key:'userImg',value:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3513415134,1805939256&fm=26&gp=0.jpg'});
            this.$store.commit('deleteProperty','code');
            console.log('获取删除的属性');
            console.log(this.$store.state.code);

            //异步修改state中的属性值：
            this.$store.dispatch('changeUserImg',{key:'userImg',value:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1851283359,3457678391&fm=26&gp=0.jpg'});
            this.$store.dispatch('resetMobile',{mobile:'19899999801',code:909808}).then((response)=>{
                console.log('输出一下:'+response);
            });
        }
    }
</script>

<style lang="less" scoped>
    @import "./components/MainTab";
</style>
