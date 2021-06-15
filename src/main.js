import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAxios from "vue-axios";
import axios from "axios";
import { Lazyload } from 'vant';
import router from "./router/router";
import store from "./store";

import Vconsole from 'vconsole';

import {Toast} from "vant";

let vConsole = new Vconsole();
Vue.use(vConsole);

Vue.use(VueAxios,axios);
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(Lazyload, {
  lazyComponent: true,
});

Toast.setDefaultOptions('loading', { forbidClick: true });
Vue.config.productionTip = false
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
Vue.prototype.$ajax = axios

Vue.config.productionTip = false
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

