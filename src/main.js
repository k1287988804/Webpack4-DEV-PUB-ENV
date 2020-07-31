import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './common/router.js'
import Fetch from  './utils/fetch.js'
Vue.prototype.$fetch = Fetch;
import {Button} from 'element-ui'
Vue.component(Button.name,Button);


var vm = new Vue({
    el:'#app',
    render: e => e(app),
    router
})
