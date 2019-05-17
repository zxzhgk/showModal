import Vue from 'vue'
import App from './App'

// import pageHead from './components/page-head.vue'
// import pageFoot from './components/page-foot.vue'

// 注册全局modal组件
import initModal from "@/components/show-modal/initModal.js";
import showModal from '@/components/show-modal/show-modal';
initModal(Vue);
Vue.component('show-modal',showModal);

import store from './store'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
