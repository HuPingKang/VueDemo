<template>
    <div id="container">
        <div class="tips">QQ登录成功</div>

<!--        route页面参数接收-->
        <div class="tips">账号：{{$route.params.username}}</div>
        <div class="tips">密码：{{$route.params.password}}</div>

        <!--1、store取值显示-->
        <div class="tips">{{ $store.state.mobile }}</div>
        <div class="tips">
            <van-image
                    round
                    lazy-load
                    width="60"
                    height="60"
                    :src=this.$store.state.userImg />
        </div>

        <!--2.获取动态响应式添加的属性值-->
        <div class="tips">{{ $store.getters.fullNickName }}</div>
        <van-image-preview closeable v-model="show" :images="images" @change="onChange">
            <template v-slot:index>第{{ index }}页</template>
        </van-image-preview>
        <van-button type="primary" style="margin-right: 20px;margin-top: 300px" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="startRecord()">预览图片</van-button>
        <van-button type="primary" style="margin-top: 300px" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="goBack()">返回上一页</van-button>
    </div>
</template>

<script>
    export default {
        name: "PasswordPage",
        data(){
            return {
                show: false,
                index: 1,
                images: [
                    'https://img01.yzcdn.cn/vant/apple-1.jpg',
                    'https://img01.yzcdn.cn/vant/apple-2.jpg',
                    'https://img01.yzcdn.cn/vant/apple-3.jpg',
                    'https://img01.yzcdn.cn/vant/apple-4.jpg',

                    'https://img01.yzcdn.cn/vant/apple-5.jpg',
                    'https://img01.yzcdn.cn/vant/apple-6.jpg',
                    'https://img01.yzcdn.cn/vant/apple-7.jpg',
                    'https://img01.yzcdn.cn/vant/apple-8.jpg',
                ],
            }
        },

        methods:{
            startRecord(){
                // 停止获取语音流
                // var options = [];
                let callback = {success: function(msg){
                        console.log("开始录音的回调信息",msg)
                    }, error: function(error){
                        console.log("失败回调:"+error);
                    }};
                //调用原生方法：
                AudioUtilsModule.startStreamRecord(callback);
                console.log("app录音获取结束")
            },
            goBack:function () {
                console.log('点击返回');
                //router-link 实现页面返回与跳转 使用 this.$router
                //返回上一页：go(-1) 或者 back()
                this.$router.back();
            },
            onChange:function(index) {
                this.index = index+1;
            },
        }
    }
</script>

<style lang="less" scoped>
    @import "./PasswordPage";
</style>
