import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './common/router.js'
import Fetch from  './utils/fetch.js'
Vue.prototype.$fetch = Fetch;

var vm = new Vue({
    el:'#app',
    render: e => e(app),
    router
})
