<template>
    <div id="app">
        <van-nav-bar fixed border safe-area-inset-top title="热门推荐"/>
        <div style="margin-top: 46px;">
            <van-notice-bar
                    color="#1989fa"
                    background="#ecf9ff"
                    scrollable
                    left-icon="volume-o"
                    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
            />
            <van-list
                    v-model="loading"
                    finished-text="没有更多了"
                    @load="loadDatas"
            >
                <div class="card" v-for="(item,index) in wyNews" :key="index">
                    <div class="title">{{item.title}}</div>
                    <van-image style="display: block;height: 150px;object-fit: cover" :src="item.url" v-lazy="item.url"></van-image>
                    <div class="desc">{{item.digest}}</div>
                    <div class="card_bottom">
                        <van-button class="show" type="info" @click="showSelect(item)">View Now<></van-button>
                    </div>
                    <div class="space"></div>
                </div>
            </van-list>
            <van-image-preview closeable v-model="show" :images="[selectImage]">
                <template v-slot:index>{{picTitle}}</template>
            </van-image-preview>
            <div>
                <van-notify v-model="showNotification" type="danger" background="#1C73DC">
                    <van-icon name="bell" style="margin-right: 4px;" />
                    <span>尤雨溪已为您推送20条更新</span>
                </van-notify>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "CirclePage",
        data(){
            return {
                pageIndex:-1,
                picTitle:'',
                selectImage:'',
                show:false,
                wyNews:[],
                loading:false,
                toast1:null,
                showNotification:false
            }
        },
        methods:{

            showNotify:function(){},

            showSelect:function (item) {
                this.show = !this.show;
                this.selectImage = item.url;
                this.picTitle = item.title;
            },

            refreshStyle:function(){
                this.showNotification = true;
                setTimeout(()=>{
                    this.showNotification = false;
                },2000);
            },

            loadDatas:function () {

                console.log('开始请求数据');

                this.showNotification = false;
                if (this.toast1 != null  || this.toast1 != undefined){
                    this.toast1.clear();
                }

                this.toast1 = this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                });

                this.pageIndex++;
                let that = this;
                this.loading = true;
                Vue.axios.get('api/T1348647853363/'+this.pageIndex+'-10.html',{
                    // 还可以直接把参数拼接在url后边
                }).then(function(res){

                    console.log('结束');
                    that.toast1.clear()
                    for (const re of res.data.T1348647853363) {
                        that.wyNews.push({
                            title:re.title,
                            digest:re.digest,
                            url:re.imgsrc,
                            source:re.source,
                            time:re.ptime.split(" ")[0],
                            votecount:re.votecount,
                            replyCount:re.replyCount,
                            html:re.url
                        })
                    }

                    that.loading = false;
                    that.refreshStyle();

                }).catch(function (error) {
                    console.log('结束'+error);
                    that.toast1.clear()
                    that.loading = false;
                });
            }
        },
        mounted(){
            this.loadDatas();
        }
    }
</script>

<style lang="less" scoped>
    @import "./CirclePage";
</style>
