import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex);

//创建VueX对象
const store = new Vuex.Store({

    //定义state属性
    state:{
        //存放的键值对就是所要管理的状态
        username:'登录账号',
        password:'登录密码',
        mobile:'手机号',
        code:'验证码'
    },

    //定义操作属性的方法
    mutations:{

        //设置或者修改属性的值：
        edit(state,payload){
            console.log(payload);
            state.username = payload.username;
            state.password = payload.password;
        },

        //属性赋值：
        saveMobile(state,payload){
            console.log(payload);
            state.mobile = payload.mobile;
            state.code = payload.code;
        },

        //动态添加state属性
        addProperty(state,payload){
            //Vue.set 为某个对象设置成员的值，若不存在则新增;
            Vue.set(state,payload.key,payload.value);
        },

        //动态删除state属性
        deleteProperty(state,key){
            //Vue.delete 删除成员:删除state中的属性
            Vue.delete(state,key);
        }
    },

    //getters 可以对state中的成员加工后传递给外界
    //Getters中的方法有两个默认参数
    //     state 当前VueX对象中的状态对象
    //     getters 当前getters对象，用于将getters下的其他getter拿来用
    getters:{

        showPrefix(){
            return true;
        },

        //对state属性加工后返回：
        fullNickName (state,getters) {
            let show = getters.showPrefix;
            if (show){
                return '昵称:' + state.nickname;
            }else {
                return state.nickname;
            }
        }

    },

    //异步操作方法：
    actions:{
        //变更头像
        changeUserImg(context,payload){
            setTimeout(()=>{
                context.commit('addProperty',payload);
            },2000);
        },

        //异步变更手机号
        //由于是异步操作，所以我们可以为我们的异步操作封装为一个Promise对象
        resetMobile(context,payload){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    context.commit('saveMobile',payload);
                    //回调一下
                    resolve(context.state.mobile);
                },5000);
            });
        }
    },
})

export default store
