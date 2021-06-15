<template>
    <div id="app">
        <van-nav-bar
                :title="$route.params.title"
                left-text="返回"
                left-arrow
                @click-left="$router.go(-1)"
        ></van-nav-bar>
        <div id="web" v-html="html">
            <span>{{$route.params.html}}</span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: "CircleWebPage",
        data () {
            return {
                loading: false,
                html: ''
            }
        },
        mounted () {
            this.loadHTML()
        },
        methods: {

            loadHTML () {
                console.log('请求网页');
                if (this.$route.params.html && this.$route.params.html.length > 0) {
                    // 加载中
                    this.loading = true
                    let param = {
                        accept: "text/html, text/plain"
                    }
                    let that = this;
                    let subUrl = that.$route.params.html;
                    subUrl = subUrl.replace('https://3g.163.com','seeNews');

                    console.log("替换："+subUrl);
                    Vue.axios.get(subUrl,param).then((response) => {
                        console.log("请求成功:"+JSON.stringify(response.data));

                        this.loading = false
                        // 处理HTML显示
                        document.getElementById("web").innerHTML = response.data;

                    }).catch(() => {
                        this.loading = false
                        this.html = '加载失败'
                    });

                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./CircleWebPage";
</style>

