<template>
    <div>
        <div id="navTitle">登录注册</div>
        <div id="mobile">
            <div id="areaCode" @click="onSelectAreaCode">{{areaCode}}</div>
            <van-icon name="arrow-down" style="float: left; margin-top: 15px;" size="20"/>
            <div style="float: right;padding-top:5px; margin-right: 0px;width: 20px;height: 20px" @click="mobile=''">
                <van-icon color='grey' v-show="showClear"  name="cross" size="20" />
            </div>
            <input v-model="mobile" type="tel" placeholder="请输入手机号"/>
        </div>
        <div class="space"></div>
        <div id="sendCode">
            <input type="tel" v-model="yzCode" placeholder="请输入验证码" />
            <div class="vLine"></div>
            <div id="getCode" @click="getCode()">获取验证码</div>
        </div>
        <div class="space"></div>
        <router-link :to="{name:route,params:{username:'836546005',password:'123456'}}">
            <van-button id="login" type="primary" block color="linear-gradient(to right, #ff6034, #ee0a24)" @click="login()">登  录</van-button>
        </router-link>
        <van-button id="accountLogin">账号密码登录</van-button>
        <van-button id="quickRegister">手机快速注册</van-button>

        <van-divider
                :style="{ width:'calc(100% - 60px)', color: 'grey', borderColor: 'lightGrey', padding: '40px 30px',fontSize:'12px' }"
        >
            其他登录方式
        </van-divider>
        <router-link :to="{name:route,params:{username:'841390768',password:'123456'}}">
            <img id="qqLogin" src="../../assets/QQ.png" @click="qqLogin()">
        </router-link>

        <div id="qqText">QQ</div>

        <div id="tips">
            未注册的手机号验证后将自动创建京东账号,登录即代表您已同意
            <span>《京东隐私政策》</span>
        </div>
        <van-popup v-model="isShowPicker" position="bottom"
                   duration="0.2"
                   round
                   :style="{ height: '38%',width: '100%' }">
            <van-picker title="选取手机区号"
                        show-toolbar
                        :columns="columns"
                        @confirm="onConfirm"
                        @cancel="onCancel"
            />
        </van-popup>
<!--        <van-number-keyboard-->
<!--                :show="isShowKeyBoard"-->
<!--                random-key-order-->
<!--                @blur="isShowKeyBoard = false"-->
<!--                @input="onInput"-->
<!--                @delete="onDelete"-->
<!--        />-->
<!--        <van-number-keyboard-->
<!--                :show="isShowKeyBoardForCode"-->
<!--                random-key-order-->
<!--                @blur="isShowKeyBoardForCode = false"-->
<!--                @input="onInputCode"-->
<!--                @delete="onDeleteCode"-->
<!--        />-->
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "SettingPage",
        data(){
            return {
                areaCode:'+86',
                isShowPicker:false,
                showClear:false,
                mobile:'',
                columns: ['+86', '+52', '+33', '+45', '+54', '+90', '+88', '+98'],
                route:'Mine',
                //验证码
                yzCode:'',
                isShowKeyBoard:false,
                isShowKeyBoardForCode:false
            }
        },
        methods:{

            onSelectAreaCode(){
                this.isShowPicker = true;
                this.showClear= false;
                this.isShowKeyBoard = false;
                this.isShowKeyBoardForCode = false;
            },

            onInput(e){
                this.mobile = this.mobile+e;
                console.log(e);
            },
            onDelete(e){
                console.log(e);
                this.mobile = this.mobile.substr(0,this.mobile.length-1);
            },

            onInputCode(e){
                this.yzCode = this.yzCode+e;
            },

            onDeleteCode(e){
                console.log(e);
                this.yzCode = this.yzCode.substr(0,this.yzCode.length-1);
            },

            showKeyboard(isMobile){
                if (isMobile){
                    this.showClear= true;
                    this.isShowKeyBoard = true;
                    this.isShowKeyBoardForCode = false;
                }else {
                    this.showClear= false;
                    this.isShowKeyBoard = false;
                    this.isShowKeyBoardForCode = true;
                }
            },
            getCode () {
                Toast('验证码已发送');
            },
            qqLogin () {
                this.route = 'Password';
            },
            onConfirm(value) {
                this.areaCode = value;
                // $('#areaCode')[0].innerHTML = value;
                this.isShowPicker = !this.isShowPicker;
            },
            onCancel() {
                this.isShowPicker = !this.isShowPicker;
            },
            login() {
                if (this.mobile.length>0 && this.yzCode.length > 0){
                    //2、调用store定义的方法 修改state状态值
                    this.$store.commit('saveMobile',{mobile:this.mobile,code:this.yzCode});
                    this.route = 'Password';
                }else {
                    Toast('请输入手机号和验证码');
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./SettingPage";
</style>

