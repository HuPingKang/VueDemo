<template>
    <div id="content">
        <div id="ads">
            <van-search shape="round" background="#fff" placeholder="请输入搜索关键词" />
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(img,index) in ads" :key="index">
                    <img :src=img v-lazy=img  />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div id="news">
            <li v-for="(item,index) in news" :key="index">
                <div class="item" @click="showNews(item)">
                    <img :src=item.cover v-lazy=item.cover />
                    <div>{{item.title}}</div>
                </div>
            </li>
        </div>
    </div>
</template>
<script>
    export default {
        name: "NewsPage",
        data(){
            return {
                ads:[
                    "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172985/20/11254/250873/60ab712bE2cfd0e52/f184257039a404d1.png!cr_1053x420_4_0!q70.jpg.dpg",
                    "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/176975/15/7023/172236/60b6e14fEcd6390ce/d42c1e6bd2c2d4ba.jpg!cr_1053x420_4_0!q70.jpg.dpg",
                    "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/179317/4/7141/93465/60b837f9E1d22cb9b/c7d019d8e62381fa.jpg!cr_1053x420_4_0!q70.jpg.dpg",
                    "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/189515/29/5980/154189/60b68ab4E898b39e9/e558c68d31349750.jpg!cr_1125x449_0_166!q70.jpg.dpg"
                ],
                news:[
                    {
                        cover:'https://publish-pic-cpu.baidu.com/0c19dd73-de19-4e49-a38f-bbb34a2eca2a.png@w_228,h_152',
                        title:'央视：鸿蒙系统上线，华为已捐赠最核心基础架构'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/71b7f001-e457-4578-9081-4cb3ebd55388.jpeg@w_228,h_152',
                        title:'Hi-Res小金标到底什么味儿？漫步者NeoBuds Pro真无线降噪耳机体验'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/dbb66795-78e2-4c62-8fe8-6b2ead1ddac4.png@w_228,h_152',
                        title:'鸿蒙系统加持！华为MatePad Pro发布：3799元起'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/d42692f9-e85c-4427-ab96-d17e850bbd7e.jpeg@w_228,h_152',
                        title:'央视：鸿蒙系统上线，华为已捐赠最核心基础架构'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/1ece4602-73dd-41dd-9521-e12672a814ed.jpeg@w_228,h_152',
                        title:'Hi-Res小金标到底什么味儿？漫步者NeoBuds Pro真无线降噪耳机体验'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/9f21387f-1eac-4a37-a524-76386fd8e461.jpeg@w_228,h_152',
                        title:'鸿蒙系统加持！华为MatePad Pro发布：3799元起'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/0c19dd73-de19-4e49-a38f-bbb34a2eca2a.png@w_228,h_152',
                        title:'央视：鸿蒙系统上线,华为已捐赠最核心基础架构'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/71b7f001-e457-4578-9081-4cb3ebd55388.jpeg@w_228,h_152',
                        title:'Hi-Res小金标到底什么味儿？漫步者NeoBuds Pro真无线降噪耳机体验'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/dbb66795-78e2-4c62-8fe8-6b2ead1ddac4.png@w_228,h_152',
                        title:'鸿蒙系统加持！华为MatePad Pro发布：3799元起'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/d42692f9-e85c-4427-ab96-d17e850bbd7e.jpeg@w_228,h_152',
                        title:'央视：鸿蒙系统上线，华为已捐赠最核心基础架构'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/1ece4602-73dd-41dd-9521-e12672a814ed.jpeg@w_228,h_152',
                        title:'Hi-Res小金标到底什么味儿？漫步者NeoBuds Pro真无线降噪耳机体验'
                    },
                    {
                        cover:'https://publish-pic-cpu.baidu.com/9f21387f-1eac-4a37-a524-76386fd8e461.jpeg@w_228,h_152',
                        title:'鸿蒙系统加持！华为MatePad Pro发布：3799元起'
                    }
                ]
            }
        },
        methods:{
            showNews:function (item) {
                console.log(item.title);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./NewsPage";
</style>
