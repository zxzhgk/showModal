import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
Vue.use(Vuex)
Vue.config.productionTip = false

import initModal from "@/components/zhangxu-showModal/initModal.js";
import showModal from '@/components/zhangxu-showModal/show-modal';
initModal(Vue);
Vue.component('show-modal',showModal);

App.mpType = 'app'
//挂载全局bus
Vue.prototype.$bus = new Vue();
const store = new Vuex.Store();
const app = new Vue({
	store,
    ...App
})
app.$mount()
