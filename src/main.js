import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './common/router.js'


var vm = new Vue({
    el:'#app',
    render: e => e(app),
    router
})
