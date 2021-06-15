<template>
    <div>
        <van-tree-select height="100vh" :items="categories" :main-active-index.sync="active">
            <template #content>
                <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
            </template>
        </van-tree-select>
    </div>
</template>

<script>
    export default {
        name: "SearchPage",
        data(){
            return {
                active:1,
                categories:[
                    { text: '热门推荐'},
                    { text:'手机数码'},
                    { text:'电脑办公'},
                    { text:'家用电器'},
                    { text:'计生情趣'},
                    { text:'美妆护肤'},

                    { text:'汽车生活'},
                    { text:'京东超市'},
                    { text:'男装'},
                    { text:'男鞋'},
                    { text:'女装'},
                    { text:'女鞋'},
                    { text:'户外运动'},
                    { text:'内衣配饰'}
                ]
            }
        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
    @import "./SearchPage";
</style>
